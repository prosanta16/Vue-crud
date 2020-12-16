<template>
  <div id="app">
    <div class="navbar navbar-expand-md navbar-primary  " role="navigation">
      <router-link class="logo navbar-brand" to="/">CRUD</router-link>

      <div class=" navbar-collapse " id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="my-link nav-link"
              data-toggle="modal"
              data-target="#modelId"
              to="/create"
              >Create New Post</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
html {
  margin: 0;
  padding: 0;
}

.navbar {
  background: #6e8ad3;
  font-weight: 700;
}
.logo {
  color: #F5C6D0;
}
.logo:hover {
  color: azure;
}
.nav-item {
  font-size: 20px;
}
.nav-item ul {
  width: 100%;
}
.nav-item:hover {
  background: #024bb8;
  border-radius: 5px;
}
.nav-link {
  color: #000;
}
.nav-link:hover {
  color: #fff;
}

.main-content {
  background: #ececec;
  width: 100%;
  min-height: 92vh;
  overflow: scroll;
}
@media screen and (max-width: 768px) {
  .nav-item {
    padding-left: 10px;
    margin-bottom: 5px;
    background: #92b2e6;
    border-radius: 5px;
  }
  html {
    font-size: 60%;
  }
}
</style>
