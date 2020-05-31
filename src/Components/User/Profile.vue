<template>
  <div class="container">
    <div class="user_profile">
      <h3>User Information:</h3>
      <ul>
        <li><span>Name:</span> {{name}}</li>
      </ul>
    </div>
    <div class="user_profile">
      <h3>Other Information</h3>
      <ul v-for="(key,value,index) in info" :key="index">
        <li><span>{{key}}:</span> {{value}}</li>
      </ul>
    </div>
    <button @click="updateName">Click me to Change me</button>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    props: {
      name: String,
      info: Object
    },
    methods: {
      updateName() {
        this.$emit('UpdateName');
      }
    }

  }
</script>

<style scoped lang="scss">
  span {
    font-weight: 600;
  }

  .user_profile {
    border: 1px solid #2196F3;
    padding: 10px 20px;

    &:not(:first-child) {
      margin-top: 20px;
    }
  }
</style>
