<template>
    <form @submit.prevent>
    <h3 class="py-2 uppercase font-bold">Создание поста</h3>
    <my-input 
    v-model="post.title"
    placeholder="Название" 
    />
    <my-input 
    v-model="post.body"
    placeholder="Описание"
    />
    <my-button class="self-end flex bg-indigo-500 hover:bg-indigo-700" @click="CreatePost">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      </my-button>
  </form>
</template>

<script>
export default {
    data() {
        return{
            post:{
                title: '',
                body: ''
            }
        }
    },
    methods:{
        CreatePost(){
      this.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
          title: '',
          body: '',
      }
    }
    }
}
</script>

<style scoped>




form {
  @apply flex flex-col mt-4
}
</style>