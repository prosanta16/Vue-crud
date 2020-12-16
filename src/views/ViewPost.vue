<template>
  <div class="container bg-light rounded mt-4">
    <h1 class="text-primary pt-2">{{ post[0].title }}</h1>
    <p class="p-2 ">{{ post[0].content }}</p>
    <div>
      <span class="text-info h6 p-1 ml-2 rounded">Categories:</span>
      <span
        class="badge badge-pill badge-primary mb-3 ml-2 bg-info"
        v-for="(cat, i) in post[0].categories"
        :key="i"
        >{{ cat }}</span
      >
    </div>
    <router-link
      type="button"
      class="btn btn-warning mb-2"
      :to="'/' + post[0].id + '/edit'"
      >Edit</router-link
    >
    <button
      type="button"
      class="btn btn-danger ml-2 mb-2"
      @click="deletePost(post[0])"
    >
      Delete
    </button>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {};
  },

  methods: {
    deletePost(post) {
      let posts = store.posts;

      posts.splice(posts.indexOf(post), 1);
      store.posts = posts || [];
      console.log(store.posts);
      localStorage.setItem("posts", JSON.stringify(store.posts));
      this.$router.push("/");
    },
  },
  computed: {
    post() {
      return store.posts.filter((post) => {
        return post.id == this.$route.params.id;
      });
    },
  },
};
</script>

<style></style>
