import api from "@/service/api";

export function register(context, data) {
  return new Promise((resolve, reject) => {
    api
      .post("/register", {
        name: data.name,
        email: data.email,
        password: data.password
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function retrieveToken(context, credentials) {
  return new Promise((resolve, reject) => {
    api
      .post("/login", {
        email: credentials.email,
        password: credentials.password
      })
      .then(response => {
        if (response.status !== 202) {
          reject("Invalid credentials");
          return;
        }
        const token = response.data.access_token;
        localStorage.setItem("access_token", token);
        context.commit("setToken", token);
        context.commit("setUser", response.data.user);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}

export function destroyToken(context) {
  api.defaults.headers.common["Authorization"] =
    "Bearer " + context.state.token;
  if (context.getters.loggedIn) {
    return new Promise((resolve, reject) => {
      api
        .post("/logout")
        .then(response => {
          localStorage.removeItem("access_token");
          context.commit("destroyToken");
          context.commit("setUser", "");
          resolve(response);
        })
        .catch(error => {
          localStorage.removeItem("access_token");
          context.commit("destroyToken");
          reject(error);
        });
    });
  }
}
