<template>
  <div>
    <article class="splashWrapper">
                <section id="mobileSplash" class="splashBox">
                    <div id="mobilePics"></div>
                </section>
                <section id="loginSplash" class="splashBox">
                    <div id="loginBox" class="borderedBox">
                        <!--<div id="instaLogo"><img src="../client/src/assets/img/instagram156x52.png"></div>-->
                        <form id="loginForm" action="feed.html" method="get">
                            <input type="text" class="loginInput" id="user" placeholder="Username">
                                <div style="position: relative">
                                    <input type="password" class="loginInput" id="password" placeholder="Password">
                                    <div id="pwLookup"><a href="#">Forgot?</a></div>
                                </div>
                            <div id="loginText"></div>
                            <button id="loginBtn" type="submit" class="btnLogin" @click="commitUsernameAndPassword">Log In</button>
                            <div class="divider">
                                <span class="miniHr"></span><span id="orText">OR</span><span class="miniHr"></span>
                            </div>
                                <button type="submit" id="fbLoginBtn" class="fbLogin">
                                    <!--<span id="fbLink"><img src="../client/src/assets/img/fbLink.png"></span>-->
                                    <span id="fbLinkText">Log in with Facebook</span>
                                </button>
                            <input type="text" id="username" name="username" style="display:none">
                        </form>
                        <div id="signUpBox" class="borderedBox">
                            <p>Don't have an account? <span><a href="#">Sign Up</a></span></p>
                        </div>
                        <div id="appBox">
                            <p>Get the app.</p>
                            <div id="appLinks">
                                <!--<div class="appLink"><a href="#"><img src="../client/src/assets/img/appStore.png"></a></div>
                                <div class="appLink"><a href="#"><img src="../client/src/assets/img/googelPlay.png"></a></div>-->
                            </div>
                        </div>
                    </div>
                </section>
            </article>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import { store } from './../store/store.js';


  export default {
    methods: {
      ...mapActions([
        'commitUsernameAndPassword',
      ]),
    }
  }
  
</script>

<style>
 
</style>

// setUsername() {
//         this.$store.state.username = document.getElementById('user').value;
//         console.log(this.$store.state.username);
//       }
