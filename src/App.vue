<template>
  <div id="app">
    
    <div class="tar_2">
        <Menu></Menu>
      <RouterView/>
      <Footer></Footer>
      <meting-js server="tencent" type="playlist" id="8835278700" fixed="true" autoplay="true" loop="all" order="list"
        preload="auto" list-folded="true" list-max-height="500px" lrc-type="1">
      </meting-js>
    </div>
    
    <Back></Back>
    
  </div>
</template>
<script lang="ts" setup>
import Menu from "./tool/MenuView.vue"
import { RouterLink, RouterView } from 'vue-router'
import Back from "./tool/background.vue"
import Footer from "./tool/Footer/index.vue"
const autoplay = true
const a = ''
console.log(100)
</script>
<style></style>


<style scoped>
header {
  line-height: 2;
  max-height: 100vh;
}
.tar_2{
   display: flex;
  flex-direction: column;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;

}
body{
  width:auto;
  height: auto;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
