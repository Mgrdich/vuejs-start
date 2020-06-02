<template>
  <div class="container">
    <div>{{username}}</div>
    <div v-awesome.red.big="text"></div>
    <div v-awesome.blue.small="text"></div>
    <div v-user-name="text"></div>
  </div>
</template>

<script>
  export default {
    name: "Development",
    data() {
      return {
        text:'sss',
        username:''
      }
    },
    mounted() {
      setTimeout( () => {
          this.username = 'ssssss';
      })
    },
    directives: {
      'user-name': {
        bind(element, binding, vNode) {
          element.innerHTML = binding.value;
        },
      }
    }
  }
</script>

<style scoped>

</style>
