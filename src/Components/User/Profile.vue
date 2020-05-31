<template>
  <div>
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
    <button @click="updateName">Click me to via Emit</button>
    <button @click="updateMyName">Click me to Change me</button>
    <div>
      <label>
        <input type="text" v-model="friend">
      </label>
      <button type="button" @click="addFriend">add friends</button>
    </div>
  </div>
</template>

<script>
  import {bus} from "../../main";

  export default {
    name: "Profile",
    data() {
      return {
        friend:''
      }
    },
    props: {
      name: String,
      info: Object,
      updateMyName:Function
    },
    methods: {
      updateName() {
        this.$emit('UpdateName');
      },
      addFriend(){
          this.friend = '';
          bus.$emit('addFriend',this.friend);
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
