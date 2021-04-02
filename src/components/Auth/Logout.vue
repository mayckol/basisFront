<script>
import store from "@/store";

export default {
  created() {
    store.dispatch('authStore/destroyToken')
      .then(() => {
        this.$router.push({ name: 'Home' })
      })
  }
}
</script>
