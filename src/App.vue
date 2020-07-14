<template>
<div id="app">
  <!-- <img src="./assets/logo.png">
  <h1>{{ msg }}</h1>
  <hr> -->
  <div class="hero-head">
    <header class="navbar is-primary is-fixed-top">
      <div class="container">
        <div class="navbar-brand"> 
          <a class="navbar-item">
              <img src="./assets/LOGO.jpg" alt="Logo">
          </a>
          <!-- <span class="navbar-burger burger"  data-target="navbarMenuHeroC"> -->
          <span class="navbar-burger burger" v-bind:class="{ 'is-active': menuActive }" @click="menuToggle()"  data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu" v-bind:class="{ 'is-active': menuActive }">
          <div class="navbar-end" @click="menuClose(),topClose()">
            <!-- <a class="navbar-item is-active" href="#top">
              TOP
            </a> -->
              <router-link class="navbar-item" to="/TOP">TOP</router-link>
              <router-link class="navbar-item" to="/MYSELF">MYSELF</router-link>
              <router-link class="navbar-item" to="/SKILL">SKILL</router-link>
              <!-- <router-link class="navbar-item" to="/TOP" @click="show = !show">TOP</router-link>
              <router-link class="navbar-item" to="/MYSELF" @click="show = !show">MYSELF</router-link>
              <router-link class="navbar-item" to="/SKILL"  @click="show = !show">SKILL</router-link> -->
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="https://masaya-i.github.io/test/">FAVORITE</a>
              <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/MUSIC">MUSIC</router-link>
                  <hr class="navbar-divider">
              <router-link class="navbar-item" to="/GAME">GAME</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  <div @click="menuClose()">
    <br>
    <br>
    <br>
    <TOP v-show="show"></TOP>
           <!-- <button @click="topClose()">ボタン</button> -->
             <!-- <div v-show="show">表示されています</div> -->
  <!-- <button @click="show = !show">ボタン</button> -->
    <!-- <button @click=test()>ボタン</button>
    <button v-on:click="test()">ボタン2</button> -->
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import 'bulma/css/bulma.css'; 
import TOP from "./components/TOP.vue"

export default {
    // name: 'aaa',
  components: {
    TOP
  },
  data() {
    return {
      show: true,
      menuActive:false
    }
  },
  methods: {
    menuToggle(){
        this.menuActive = !this.menuActive;
    },
    menuClose(){
      if(this.menuActive){
        // alert('持っている');
        this.menuToggle();
      }else{
        // alert('持っていない');
      }
    },
    topClose(){
      this.show = false;
    }
  }
}

// 複数のコンポーネントを入れることが出来た。
// import Header from "./components/Header.vue"
// import HelloWorld from './components/HelloWorld.vue'
// import Form from "./components/Form.vue"

// export default {
//   name: 'App',
//   components: {
//     HelloWorld,
//     Header,
//     Form
//   }
// }

</script>

<style>
@import "../node_modules/bulma/bulma.sass";

h1{
  /* font-size: 20px; */
  /* margin-bottom: 15px; */
  /* text-align: left; */
  border-bottom: solid 6px ;
  /* margin-left: 20px; */
  }
</style>



