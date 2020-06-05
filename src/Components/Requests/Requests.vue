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
    <div class="user_profile">
      <h2>User Cars</h2>
      <ul>
        <li v-for="(value,index) in cars" :key="index">
          {{value.brand}}
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
        loading:0,
        cars:[],
        resource:''
      }
    },
    methods:{
      fetchData() {
        this.loading = true;
        this.$http.get('users')
          .then((response) => {
            this.names = response.body;
          }).finally(() => {
          this.loading += 1;
        });

        this.resource.get().then((res)=>{
          this.cars = res.body;
        }).finally(()=>{
          this.loading += 1;
        })
      }
    },
    created() {
        this.resource = this.$resource('cars/{id}');
        this.fetchData();
    }
  }
</script>

<style scoped>

</style>
