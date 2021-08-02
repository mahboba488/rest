<template>
  <img class="logo" src="../assets/rest.jpg" />

  <h1>Login</h1>
  <div class="register">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="text" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login">Login</button>
    <p>
      <router-link class="link" to="/singup">Singup</router-link>
    </p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "Login",
  data()
  {
    return{
      email:'',
      password:''
    }
  },
  methods:{
 async login()
    {
      let result =await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`

      )

      if(result.status==200 && result.data.length>0)
      {
        localStorage.setItem("user-info",JSON.stringify(result.data[0]))
        this.$router.push({name:'Home'})
      }
      console.warn(result)
    }
  }

};
</script>


<style>
.link {
  text-decoration: none;
  width: 30px;

  color: skyblue;
  cursor: pointer;
}
</style>