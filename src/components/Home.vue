<template>
<Header/>
  <h1>Hello user, welcome on home page</h1>
</template>

<script>
import Header from './Header.vue'
export default {
  name: "Home",
  components:{
    Header
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Singup" });
    }
  },
};
</script>