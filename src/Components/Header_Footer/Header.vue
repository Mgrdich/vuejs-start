<template>
  <header class="flex">
    <span>Hello</span>
    <ul>
      <li @click="componentRender('Home')">Home</li>
      <li @click="componentRender('Forms')">Forms</li>
      <li @click="componentRender('Directives')">Directives</li>
      <li @click="componentRender('Transitions')">Transitions</li>
      <li @click="componentRender('Technologies')">Technologies</li>
      <li @click="componentRender('Requests')">Requests</li>
    </ul>
  </header>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      componentRender(element) {
        this.$emit('componentRender', element);
      }
    }
  }
</script>

<style scoped lang="scss">
  header {
    background: #2196F3;
    border-bottom: 4px solid #607d8b;
    box-sizing: border-box;
    padding: 30px;

    > span {
      font-weight: 600;
      font-size: 30px;
      color: #fff;
      margin: 16px;
      line-height: 1;
    }

    ul {
      list-style: none;

      li {
        font-size: 25px;
        color: #fff;
        padding: 0 10px;
        display: inline-block;
        line-height: 1;

        &:hover {
          cursor: pointer;
          color: #607d8b;
        }
      }
    }
  }
</style>
