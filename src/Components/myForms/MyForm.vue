<template>
  <form action="" class="group_form" @submit="formSubmit">
    <label for="name" class="input-label">
      <span>Name</span>
      <input type="text" id="name" name="name" v-model.lazy="formData.name">
    </label>
    <label for="last-name" class="input-label">
      <span>last Name</span>
      <input type="text" id="last-name" name="last-name"  v-model.lazy="formData.lastName">
    </label>
    <label for="message" class="input-label">
      <span>Message</span>
      <textarea v-model.lazy="formData.message" name="message" id="message" cols="30" rows="10">
      </textarea>
    </label>
    <label for="newsletter">
      <span>Newsletter</span>
      <input type="checkbox" name="newsletter" id="newsletter" value="newsletter" v-model.lazy="formData.newsletter">
    </label>
    <button type="submit" class="btn">Submit</button>
  </form>
</template>

<script>
    export default {
        name: "MyForm",
        data() {
          return {
            formData:{
              name:'',
              lastName:'',
              message:'',
              newsletter:'',
              checkbox:false,
              radio:''
            }
          }
        },
      methods:{
        formSubmit(event){
          console.log(event);
        }
      }
    }
</script>

<style  lang="scss" scoped>
  .input-label {
    width: 100%;
    display: block;
    input,textarea {
      display: block;
      width: 100%;
    }
  }
  .group_form {
    .input-label {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
  .btn {
    float: right;
    background-color:#2196F3;
    color: #fff;
  }
</style>
