<template>
  <div class="user_profile">
    <h3>User Information:</h3>
    <slot name="main_hab"></slot>
    <slot name="sec_hab"></slot>
  </div>
</template>

<script>
  export default {
    name: "Habilites",
    data() {
      return {
        hab:['JS','CSS','HTML']
      }
    }
  }
</script>

