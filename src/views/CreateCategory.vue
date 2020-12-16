<template>
  <div id="wrapper" class="container">
    <Modal v-if="showModal">
      <h3 slot="header" class="modal-title">
        Create Category
      </h3>

      <div slot="body">
        <div class="form-group">
          <label for="title">Category</label>
          <input
            type="text"
            name="title"
            id="title"
            class="form-control"
            placeholder=""
            aria-describedby="helpId"
            required
            v-model="cats"
          />
        </div>
      </div>
      <div slot="footer">
        <button
          type="button"
          class="btn btn-outline-info"
          @click="closeModal()"
        >
          Close
        </button>

        <button class="btn btn-primary ml-2" @click="createCategory()">
          Create
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import store from "@/store.js";

//import Category from "@/components/Category";
export default {
  name: "create-category",
  components: {
    Modal,
  },
  data() {
    return {
      cats: "",
      showModal: true,
    };
  },

  methods: {
    openModal() {
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
      store.createCat = false;
    },
    createCategory() {
      let options = store.options;
      options.unshift(this.cats);
      store.options = options;
      this.$emit("createdCat", this.cats);
      this.showModal = false;
      store.createCat = false;
    },
  },
  computed: {},
};
</script>

<style></style>
