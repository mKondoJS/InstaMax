<template>
    <article class="suggestionBox borderedBox">
        <div class="suggestionRow">
            <div class="suggestionHeader">SUGGESTIONS FOR YOU<a href="#">See All  <span style="color:#999">></span></a></div>
                <div class='suggestionContent' v-for="user in userNames">
                    <div class='suggestionPic'>
                         <a href='#'><img :src='profilePic(user)'></a>
                    </div>
                    <div class='suggestionNameContainer'>
                        <div class='nameBox'>
                            <div class='suggestionName'>
                                <a href='#'> {{ user }} </a>
                            </div> 
                        <div class='suggestionFullName'>
                            <a href='#'> {{ userFullNames[user].fullName }} </a></div>
                        </div>
                    </div>
                    <button class='fBtn followButton'>Follow</button>
                </div>
        </div>
    </article>
</template>
<script>

    import { store } from './../store/store.js';
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                userNames: Object.keys(store.state.users).filter((user) => {
                    return user !== store.state.username;
                }),
                userFullNames: store.state.users,
            }
        },
        computed: {
         ...mapGetters([
            'getUsername',
            'getUserFullName',
            'getUsers',
          ]),
        },
        methods: {
          profilePic: function(user) {
            return './client/src/assets/img/' + user + '.jpg';
          },
        }
      }
    
</script>
<style>
</style>