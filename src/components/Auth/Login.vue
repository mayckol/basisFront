<template>
  <main class="container">
    <form action="#" @submit.prevent="login">
      <h2>Login</h2>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email" />
      </div>

      <div>
        <label for="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
        />
      </div>

      <div>
        <button type="submit">Entrar</button>
      </div>
    </form>
  </main>
</template>

<script>
import store from "../Auth/../../store";

export default {
  name: "Login",
  components: {},
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    login() {
      store
        .dispatch("authStore/retrieveToken", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "Main" });
        });
    }
  }
};
</script>
<style scoped src="./styles/index.css" />
