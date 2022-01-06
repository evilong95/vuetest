<template>

<hero-img></hero-img>

<nav-bar></nav-bar>

<section>
    <div class="routerview">
        <router-view></router-view>
    </div>

    <div class="sidebar">
        <side-bar></side-bar>
    </div>
</section>

<footer>
    <Footer></Footer>
</footer>

</template>

<script>
import NavBar from './views/NavBar.vue'
import HeroImg from './views/HeroImg.vue'
import SideBar from './views/SideBar.vue'
import Footer from './views/Footer.vue'

export default {
 
  name: "App",

  components: {
    NavBar,
    HeroImg,
    SideBar,
    Footer

  },

}
</script>

<style>

* {
  box-sizing: border-box;
}

body, html, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.routerview {
  float: left;
  display: block;
  padding: 10px;
  width: 90%;
  height: 200px;
  background-color: lightgreen;
}

.sidebar {
  text-align: center;
  float: left;
  width: 10%;
  height: 200px;
  padding: 10px;
  background-color: lightskyblue;
}

section::after {
  content:"";
  display: table;
  clear: both;
}

footer {
  padding: 10px;
  height: 100px;
  background-color:lightsalmon;
}

</style>