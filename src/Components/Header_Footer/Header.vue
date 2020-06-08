<template>
  <header class="flex">
    <span>Hello</span>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li>
        <router-link to="/forms">Forms</router-link>
      </li>
      <li>
        <router-link to="/development">Directives</router-link
      </li>
      <li>
        <router-link to="/transition">Transitions</router-link>
      </li>
      <li>
        <router-link to="/technologies">Technologies</router-link>
      </li>
      <li>
        <router-link to="/requests">Requests</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      /*componentRender(element) {
        this.$emit('componentRender', element);
      }*/
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
        a {
          color:#fff;
          text-decoration: none;
          &:hover {
            cursor: pointer;
            color: #607d8b;
          }
        }

      }
    }
  }
</style>
