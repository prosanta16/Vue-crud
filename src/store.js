import Vue from "vue";

export default Vue.observable({
  posts: JSON.parse(localStorage.getItem("posts")) || [],
  options: JSON.parse(localStorage.getItem("options")) || [
    "News",
    "Game",
    "Sports",
  ],
  selected: [],
  createCat: false,

  /*
  * Getters
  * allpost, allCategory

*/
  get allPosts() {
    return this.posts;
  },
});
