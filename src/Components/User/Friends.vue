<template>
  <div class="user_profile">
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
