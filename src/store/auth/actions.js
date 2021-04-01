import api from "@/service/api";

export function retrieveToken(context, credentials) {
  return new Promise((resolve, reject) => {
    api.post('/login', {
      email: credentials.email,
      password: credentials.password,
    })
      .then(response => {
        const token = response.data.access_token

        localStorage.setItem('access_token', token)
        context.commit('retrieveToken', token)
        resolve(response)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}
