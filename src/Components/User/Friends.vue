<template>
  <div class="user_friends">
    <h2>User Friends</h2>
    <ul>
      <li v-for="(value,index) in friends" :key="index">
        {{value}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {bus} from "../../main";

  export default {
    name: "Friends",
    data() {
      return {
        friends: ['Ronnie', 'Martia', 'boghos']
      }
    },
    created() {
      bus.$on('addFriend', (value) => {
        this.friends.push(value);
      });
    }
  }
</script>

<style scoped lang="scss">
  .user_friends {
    border: 1px solid #2196F3;
    padding: 10px 20px;

    &:not(:first-child) {
      margin-top: 20px;
    }
  }
</style>
