import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

router.beforeEach((to, from, next) => {
  const loggedIn = store.getters["authStore/loggedIn"];
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!loggedIn) {
      next({
        name: "Login"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (loggedIn) {
      next({
        name: "Main"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

createApp(App)
  .use(router, store)
  .mount("#app");
