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
              <a class="navbar-link">FAVORITE</a>
              <!-- <a class="navbar-link" href="https://masaya-i.github.io/test/">FAVORITE</a> -->
              <div class="navbar-dropdown">
              <!-- <div class="navbar-dropdown" v-bind:class="{ 'is-active': menuActive }"> -->
              <router-link class="navbar-item" to="/MUSIC"  @click.native="hideMenu">MUSIC</router-link>
                  <hr class="navbar-divider">
              <router-link class="navbar-item" to="/GAME" @click.native="hideMenu">GAME</router-link>
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
    },
    hideMenu(e) {
      e.target.blur()
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

  h2{
    /* border-bottom: solid 4px ; */
      text-align: center;
      background-color:cadetblue;
      color: white;
  }
    
.columns{
  /* padding: 15px; */
  /* margin-left: 15px;
  margin-right: 15px; */
  text-align: center;
  /* background-color: #2793b5; */
}


.moji{
  /* font-size: 38px; */
  text-align: left;
  margin-left: 15px;
  margin-right: 15px;
  /* float: left; */
  /* text-align: right; */
  /* display: block; */
}

.write{
  margin-left: 15px;
  margin-right: 15px;
}

/* 自動で画像の大きさをそろえてくれる */
/* 画面サイズに合わせつつ、最大最小を設定した記述 */
.gif{
max-width: 1000px;
width: 100%;
text-align: center;
padding-left: 15px;
padding-right: 15px;

}

/* PC用のCSS */
@media screen and (min-width: 767px) { /*ウィンドウ幅が767px以上の場合に適用*/
  h1{
    border-bottom-color: #00FFFF; /*青色*/
  }
}
/* タブレット用のCSS */
@media screen and (max-width: 767px) { /*ウィンドウ幅が最大767pxまでの場合に適用*/
      h1{
        border-bottom-color: #FF0000; /*赤色*/
      }
}

/* スマホ用のCSS */
@media screen and (max-width: 479px) { /*ウィンドウ幅が最大479pxまでの場合に適用*/
      h1{
        border-bottom-color: #00FF00; /*緑色*/
      }
}
</style>



