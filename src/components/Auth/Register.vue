<template>
  <main class="container">
    <form class="register" action="#" @submit.prevent="register">
      <h2 class="register">Registrar</h2>
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="name" />
      </div>

      <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
        />
      </div>

      <div>
        <button class="register" type="submit">Registrar</button>
      </div>
    </form>
  </main>
</template>

<script>
import store from "../../store";

export default {
  name: "Register",
  components: {},
  data: () => ({
    name: "",
    email: "",
    password: ""
  }),
  methods: {
    register() {
      store
        .dispatch("authStore/register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    }
  }
};
</script>
<style scoped src="./styles/index.css" />
