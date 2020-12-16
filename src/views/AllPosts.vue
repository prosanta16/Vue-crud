<template>
  <div>
    <div class="alert alert-secondary m-4 h3" role="alert" v-if="!posts.length">
      <i class="text-danger"
        ><span>Ooops!! </span>
        Yout Have no post.
        <span class="text-info"
          >Click on
          <span class=" rounded text-success p-1 mt-2"
            >Create New Post</span
          ></span>
        on nav.
      </i>
    </div>
    <div class="card" v-for="(post, i) in posts" :id="i" :key="i" v-else>
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">
          {{ post.content.slice(1, 30) + "..." }}
        </p>
        <router-link class="btn btn-success ml-2" :to="'/' + post.id"
          >View Post</router-link
        >
        <router-link
          class="btn btn-warning ml-2"
          :to="'/posts/' + post.id + '/edit'"
          >Edit</router-link
        >
        <router-link
          class="btn btn-danger ml-2"
          to="/"
          @click.native="deletePost(post)"
          >Delete</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "allPost",
  data() {
    return {};
  },

  methods: {
    deletePost(post) {
      let posts = store.posts;
      posts.splice(posts.indexOf(post), 1);
      store.posts = posts;
      localStorage.setItem("posts", JSON.stringify(posts));
    },
  },
  computed: {
    posts() {
      return store.posts;
    },
  },
};
</script>

<style scoped>
.card {
  width: 90%;
  margin: 10px auto;
}

.card:hover {
  box-shadow: 2px 2px 3px rgb(46, 255, 81), -2px 2px 3px rgb(46, 255, 81),
    2px -2px 3px rgb(46, 255, 81), -2px -2px 3px rgb(46, 255, 81);
}
</style>
