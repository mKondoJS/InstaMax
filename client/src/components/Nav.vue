<template>
    <header class="header">
        <div class="headerContainer">
            <div class="userInfo">
                <img :src='userImg'>
                <span class="userName"> {{ username }} </span>
            </div>
            <div id="instaLogo"><a href="index.html"><img src="/img/Instamax235x52.png"></a></div>
            <div class="searchBox">
                <input type="text" class="searchInput" id="search" name="search" placeholder="Search">
                <div class="searchInputIcon"></div>
            </div>
            <nav class="navbar">
                <a href="#"><img src="/img/navigate30x30.png"></a>
                <a href="#"><img src="/img/activity30x30.png"></a>
                <a href="#"><img src="/img/profile30x30.png"></a>
            </nav>
        </div>
    </header>
</template>
<script>

  //import store from '../overvue/store';

  export default {
    data() {
      return {
        username:this.$store.state.username,
      }
    },
    computed: {
      username: function() {
        return this.$store.state.username;
      },
      userImg: function() {
        if(this.username) {
          return '/img/' + this.$store.state.username + '.jpg';
        } else {
          return '/img/profile.png';
        }
      },
    }






  }

</script>
<style lang="">

</style>