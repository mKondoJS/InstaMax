<template>
    <header class="header">
            <div class="headerContainer">
                <div class="userInfo">
                    <img src="../assets/img/profile.png">
                    <span class="userName"> {{ getUsername }} </span>
                </div>
                <div id="instaLogo"><a href="index.html"><img src="../assets/img/Instamax235x52.png"></a></div>
                <div class="searchBox">
                    <input type="text" class="searchInput" id="search" name="search" placeholder="Search">
                    <div class="searchInputIcon"></div>
                </div>
                <nav class="navbar">
                    <a href="#"><img src="../assets/img/navigate30x30.png"></a>
                    <a href="#"><img src="../assets/img/activity30x30.png"></a>
                    <a href="#"><img src="../assets/img/profile30x30.png"></a>
                </nav>
            </div>
        </header>
</template>
<script>

import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'getUsername'
            ])
        }






    }
    
</script>
<style lang="">
    
</style>