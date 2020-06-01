<template>
  <div class="container">
    <comp-profile
      :name="name"
      :info="info"
      @UpdateName="updateName"
      :updateMyName="updateName"
    />
    <comp-friends/>
    <comp-habilites>
      <ul slot="main_hab">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
      </ul>
      <ul slot="sec_hab">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
      </ul>
    </comp-habilites>
  </div>
</template>

<script>
  import Friends from "../User/Friends";
  import Profile from "../User/Friends";
  import Habilities from "../User/Friends";

    export default {
        name: "Home",
      components:{
        'comp-profile': Profile,
        'comp-friends': Friends,
        'comp-habilites': Habilities,
      },
      data(){
          return {
            name: 'Francis',
            toggle: false,
            info: {
              mother: "Sevan",
              father: "Hakop"
          }
        }
      }
    }
</script>

