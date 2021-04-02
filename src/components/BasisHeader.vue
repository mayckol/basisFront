<template>
  <header class="container">
    <router-link v-if="!isLogged" to="/">Home</router-link>
    <router-link v-if="isLogged" :to="{ name: 'Main' }">Home</router-link>
    <span v-if="userName">Olá, {{ userName }}</span>
    <router-link v-if="!isLogged" :to="{ name: 'Login' }">Entrar</router-link>
    <router-link v-if="!isLogged" :to="{ name: 'Register' }"
      >Registrar</router-link
    >
    <router-link v-if="isLogged" :to="{ name: 'Logout' }">Sair</router-link>
  </header>
</template>

<script>
import store from "@/store";

export default {
  name: "BasisHeader",
  computed: {
    isLogged: () => {
      return store.getters["authStore/loggedIn"];
    },
    userName: () => {
      return store.getters["authStore/user"]?.name;
    }
  }
};
</script>

<style scoped src="../styles/layout/header.css"/>
