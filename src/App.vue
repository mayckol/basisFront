<template>
  <BasisHeader />
  <router-view />
  <BasisFooter />
</template>
<script>
import store from "@/store";
import BasisHeader from "@/components/BasisHeader.vue";
import BasisFooter from "@/components/BasisFooter.vue";

export default {
  components: { BasisFooter, BasisHeader },
  computed: {
    isLogged: () => {
      return store.getters["authStore/loggedIn"];
    }
  }
};
</script>

<style>
 @import './styles/index.css';
</style>
