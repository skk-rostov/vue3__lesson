<template>
<div class="px-8">
<post-form @create="createPost" />
<post-list :posts="posts" @remove="removePost"/>
<!-- ////  -->
</div>

</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
export default {
  components: {
    PostForm, PostList
  },
  data(){
    return {
      posts:[
        {id:1, title:"JavaScript", body: 'Описание поста'},
        {id:2, title:"JavaScript 2", body: 'Описание поста 2'},
        {id:3, title:"JavaScript 3", body: 'Описание поста 3'},
      ],
    }
  },
  methods:{
    createPost(post){
      console.log(post)
      this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(p=> p.id !== post.id)
    }

  },
  computed:{
   
  }
}
</script>

<style>

</style>