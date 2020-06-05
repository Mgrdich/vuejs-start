<template>
  <div class="container">
    <div class="user_profile">
      <h2>User Friends</h2>
      <ul>
        <li v-for="(value,index) in names" :key="index">
          {{value.name}} <span> <b>{{value.lastname}}</b></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Requests",
    data() {
      return {
        names:[],
        loading:false
      }
    },
    methods:{
      fetchData() {
        this.loading = true;
        this.$http.get('http://localhost:3000/users')
          .then((response) => {
            this.names = response.body;
          }).finally(() => {
          this.loading = false;
        })
      }
    },
    created() {
        this.fetchData();
    }
  }
</script>

<style scoped>

</style>
