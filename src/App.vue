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
              <img src="https://github.com/masaya-i/test/blob/master/img/LOGO.jpg?raw=true" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <!-- <a class="navbar-item is-active" href="#top">
              TOP
            </a> -->
              <router-link class="navbar-item" to="/TOP">TOP</router-link>
              <router-link class="navbar-item" to="/MYSELF">MYSELF</router-link>
              <router-link class="navbar-item" to="/SKILL">SKILL</router-link>
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
    <!-- <div>
      <router-link to="/MUSIC">MUSIC</router-link>
      <router-link to="/SKILL">SKILL</router-link>
      <router-link to="/MYSELF">MYSELF</router-link>
    </div>
  <div>Back to
    <router-link to="/">TOP</router-link>
  </div> -->
    <!-- <div class="buttons">
      <a class="button is-primary">Primary</a>
      <a class="button is-link">Link</a>
    </div> -->
    <br>
    <br>
    <br>
  <router-view></router-view>

</div>

</template>

<script>
import 'bulma/css/bulma.css'; 
export default {
};
// export default {
//   name: 'app'
// }
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
/*
$(document).ready(function () {
    var burger = $('.burger');
    var menu = $('#' + burger.data('target'));
  var nav = $('.navbar-item');  
  Number 
    
  burger.on('click', function () {
    burger.toggleClass('is-active');
    menu.toggleClass('is-active');
  });

  $('.navbar-menu').on('click', function () {
    if ($('.burger').hasClass('is-active'))  {
      burger.removeClass('is-active');
      menu.removeClass('is-active');
  } else {      
    }
  });

  $('.main-wrapper').on('click', function () {
      if ($('.burger').hasClass('is-active'))  {
        burger.removeClass('is-active');
        menu.removeClass('is-active');
    } else {      
    }  
  });
});
*/

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



