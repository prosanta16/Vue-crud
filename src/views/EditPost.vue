<template>
  <div id="wrapper" class="container">
    here
    <Modal v-if="showModal">
      <!-- Header -->
      <h3 slot="header" class="modal-title">
        Edit Post
      </h3>

      <!-- modalbody -->
      <div slot="body">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            class="form-control"
            placeholder="Enter Post Title"
            aria-describedby="helpId"
            required
            v-model="post.title"
          />
        </div>

        <div class="form-group">
          <label for="content">Content</label>
          <textarea
            class="form-control"
            name="content"
            id="content"
            rows="3"
            required
            v-model="post.content"
          ></textarea>
        </div>

        <!-- selected -->
        <div>
          <div class="selected-cat-list border rounded mb-2 pt-3 pb-3">
            Categories:
            <span
              class="badge badge-primary ml-2"
              v-for="(value, i) in post.categories"
              :key="i"
              >{{ value }}</span
            >
          </div>
        </div>

        <!-- category part -->
        <div class="dropdown">
          <button
            class="btn btn-info dropdown-toggle"
            type="button"
            id="sampleDropdownMenu"
            data-toggle="dropdown"
            data-flip="false"
          >
            Select Categories
          </button>
          <div class="dropdown-menu" @click="stopClose">
            <button id="create-cat" class="dropdown-item" @click="showInside()">
              Create New Category
            </button>
            <button
              class="dropdown-item"
              type="button"
              v-for="(option, i) in options"
              :key="i"
            >
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    :value="option"
                    v-model="post.categories"
                  />
                  {{ option }}
                </label>
              </div>
            </button>
          </div>
        </div>
        <!-- category end -->
      </div>
      <div slot="addModal">
        <CreateCategory
          v-if="showInsideModal"
          @createdCat="getNewCat"
        ></CreateCategory>
      </div>

      <div slot="footer">
        <button
          type="button"
          class="btn btn-outline-info"
          @click="closeModal()"
        >
          Close
        </button>

        <button
          type="button"
          class="btn btn-primary ml-2"
          data-dismiss="modal"
          @click="savePost()"
        >
          Save
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
// import OptionDropdown from "@/components/OptionDropdown";
import store from "@/store.js";
import CreateCategory from "@/views/CreateCategory";
export default {
  components: {
    Modal,
    CreateCategory,
  },
  data() {
    return {
      showModal: true,

      values: [],
      editedPost: { title: "", content: "", categories: [] },
    };
  },
  methods: {
    stopClose(e) {
      e.stopPropagation();
    },
    showInside() {
      store.createCat = !store.createCat;
    },
    getNewCat(val) {
      this.post.categories.unshift(val);
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      store.createCat = false;
      let path = "/" + this.$route.params.id;

      this.$router.push(path);
    },
    getSelected(options) {
      console.log(options[0]);
      this.newPost.categories = options;
    },
    savePost() {
      this.showModal = false;
      store.createCat = false;

      let posts = store.posts;
      localStorage.setItem("posts", JSON.stringify(posts));

      let path = "/" + this.$route.params.id;
      this.$router.push(path);
    },
  },
  computed: {
    options() {
      return store.options;
    },
    showInsideModal() {
      return store.createCat;
    },
    post() {
      let post = store.posts.filter((post) => {
        return post.id == this.$route.params.id;
      });
      return post[0];
    },
  },
};
</script>

<style scoped>
.category-box {
  width: 100%;
  outline: 0;
}
.category {
  padding: 3px 0px;
  height: fit-content;
  outline: 0;
  position: relative;
}
.multi-options {
  width: 100%;
  outline: 0;
  position: absolute;
  top: 40px;
}
button {
  outline: 0;
}
#create-cat {
  background: #aaa;
}
</style>
