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
    <button class="btn" @click="updateName">Click me to via Emit</button>
    <button class="btn" @click="updateMyName">Click me to Change me</button>
    <div>
      <label>
        <input type="text" v-model="friend">
      </label>
      <button class="btn" type="button" @click="addFriend">add friends</button>
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
      addFriend() {
        bus.$emit('addFriend', this.friend);
        this.friend = '';
      }
    }

  }
</script>

<style scoped lang="scss">
  span {
    font-weight: 600;
  }
</style>
