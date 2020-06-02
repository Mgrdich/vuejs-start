<template>
  <div class="container">

    <transition name="appear">
        <div class="bg-success" v-if="btn">Hello Biatch</div>
    </transition>

    <button class="btn" @click="btn=!btn">Toggle</button>
  </div>

</template>

<script>
    export default {
        name: "Transitions",
        data() {
          return {
            btn:false
          }
        }
    }
</script>

<style scoped lang="scss">
  button {
    margin-top: 20px;
  }
  .appear-enter {
    opacity: 0;
    transform: translateX(20px);
    &-active {
        transition: all 2s ease;
    }
  }
  .appear-leave {
    &-active {
      transform: translateX(-20px);
      transition: all 2s ease;
      opacity: 0;
    }
  }

</style>
