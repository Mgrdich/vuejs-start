<template>
  <div class="container">

    <transition
      name="appear"
      mode="out-in"
      @before-enter="enter('before-enter')"
      @enter="enter('enter')"
          >
        <div class="bg-success" v-if="btn" :key="'ss'">Hello Biatch</div>
        <div class="bg-success" v-else :key="'ss1'" >Hello itaouch</div>
    </transition>
    <button class="btn" @click="btn=!btn">Toggle</button>
    <div class="m-t-30"></div>


    <input type="text" v-model.lazy="name">
    <button class="btn" @click="addOne()">Toggle Group</button>

    <ul>
      <transition-group name="appear">
      <li
        v-for="(item,$index) in list"
        :key="item"
        @click="removeOne($index)">
        {{item}}
      </li>
      </transition-group>
    </ul>

  </div>

</template>

<script>
    export default {
        name: "Transitions",
        data() {
          return {
            btn:false,
            list:['Francis','Ron','John'],
            name:''
          }
        },
      methods:{
          enter(arg){
            console.log(arg);
          },
          addOne(){
            if(this.name && !this.list.includes(this.name)){
                 this.list.unshift(this.name);
                 this.name = '';
            }
          },
          removeOne(index){
            this.list.splice(index,1)
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
    transform: translateX(5px);
    &-active {
        transition: all 1s ease;
    }
  }
  .appear-leave {
    &-active {
      transform: translateX(-5px);
      transition: all 1s ease;
      opacity: 0;
    }
  }
  .appear-move {
    transition:transform 1s;
  }
  ul {
    padding: 0;
    list-style: none;
    li {
      padding: 20px;
      background-color: beige;
      border: 1px solid black;
      border-radius: 4px;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

</style>
