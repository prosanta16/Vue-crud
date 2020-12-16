<template>
  <div>
    <div>
      <div class="selected-cat-list border rounded mb-2 pt-3 pb-3">
        Categories:
        <span
          class="badge badge-primary ml-2"
          v-for="(value, i) in values"
          :key="i"
          >{{ value }}</span
        >
      </div>
    </div>

    <!-- Selected -->
    <div>
      <div class="selected-cat-list border rounded mb-2 pt-3 pb-3">
        Categories:
        <span
          class="badge badge-primary ml-2"
          v-for="(value, i) in values"
          :key="i"
          >{{ value }}</span
        >
      </div>
    </div>
    <!-- dropdown -->

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
        <button id="create-cat" class="dropdown-item" @click="createCategory()">
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
                v-model="values"
              />
              {{ option }}
            </label>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  components: {},
  data() {
    return {
      values: [],
    };
  },
  updated() {
    this.$emit("clicked", this.values);
  },
  methods: {
    stopClose(e) {
      e.stopPropagation();
    },
  },
  computed: {
    options() {
      return store.options;
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
