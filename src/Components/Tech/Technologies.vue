<template>
  <div class="container">
    <div>
      <span v-for="(item,key) in limit(list,30)" :key="item">
      {{item | multBy}}
    </span>
    </div>
    <span>{{name}} </span>
  </div>
</template>

<script>
  import {TechnologyMixin} from "../../Mixins/mixins";

  export default {
    name: "Technologies",
    mixins: [TechnologyMixin],
    data(){
      return {
        name:'sss'
      }
    },
    mounted() {
      setTimeout(() => {
        let arr = [];
        for (let i = 4; i < 1000; i++) {
          arr.push(i)
        }
        this.list = this.list.concat(arr);
      }, 3000);
    },
    methods: {
      limit(arr, limit, skip) {
        let s = (skip) ? skip : 0;
        return arr.slice(s, s + limit);
      }
    },
    filters: {
      multBy(v) {
        return v * 3;
      }
    }
  }
</script>

<style scoped>
  span {
    font-size: 30px;
    color: #2196F3;
  }
</style>
