<template>
  <div>
    <article class="splashWrapper">
      <section id="mobileSplash" class="splashBox">
        <div id="mobilePics"></div>
      </section>
      <section id="loginSplash" class="splashBox">
        <div id="loginBox" class="borderedBox">
          <div id="instaLogo"><img src="/img/Instamax235x52.png"></div>
          <form id="loginForm" action="feed.html" method="post">
            <input type="text" class="loginInput" id="user" v-on:focus="slideWarningUp" placeholder="Username">
            <div style="position: relative">
              <input type="password" class="loginInput" v-on:focus="slideWarningUp" id="password" placeholder="Password">
              <div id="pwLookup"><a href="#">Forgot?</a></div>
            </div>
            <div id="loginText"></div>
            <button id="loginBtn" type="submit" class="btnLogin" @click="validateUser">Log In</button>
            <div class="divider">
              <span class="miniHr"></span><span id="orText">OR</span><span class="miniHr"></span>
            </div>
            <button type="submit" id="fbLoginBtn" class="fbLogin">
              <span id="fbLink"><img src="/img/fbLink.png"></span>
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
              <div class="appLink"><a href="#"><img src="/img/appStore.png"></a></div>
              <div class="appLink"><a href="#"><img src="/img/googelPlay.png"></a></div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>

  import { commitUsernameAndPassword } from '../overvue/actions';

  export default {
    data() {
      return {
        loopMobileImg: this.mobileImageCreator(),
      };
    },
    methods: {
      startMobileImgLoop() {
        console.log('in startMobileImgLoop');
        // loop through images on mobile splash
        const mIntervId = setInterval(this.loopMobileImg, 2000);
      },
      mobileImageCreator() {
        // Use closure to track image index through multiple calls
        let index = 1;
        console.log('in mobileImageCreator index:', index);
        return function () {
          index = index < 5 ? index + 1 : 1;
          const img = '/img/mScreen' + index + '.png';
          $("#mobilePics").css('background-image', 'url(' + img + ')');
        };
      },
      slideWarningUp() {
        $('#loginText').slideUp();
      },
      validateUser(event) {
        event.preventDefault();
        const username = $('#user').val();
        const password = $('#password').val();
        console.log('VUE', this);
        if (this.$store.state.users.hasOwnProperty(username) && this.$store.state.users[username].password === password) {
          commitUsernameAndPassword({ username, password });
          console.log('pushing to feed');
          this.$router.push('feed');
          //$('#loginForm').submit();
        } else {
          $('#loginText')[0].innerHTML = 'That username/password combination is not valid.  Please try again.';
          $('#loginText').slideDown();
        }
      },
    },
    computed: {
    },
    mounted() {
      console.log('In mounted');
      this.startMobileImgLoop();
    },
  };
</script>

<style>
</style>
