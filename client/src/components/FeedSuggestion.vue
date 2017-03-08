<template>
    <article class="suggestionBox borderedBox">
        <div class="suggestionRow">
            <div class="suggestionHeader">SUGGESTIONS FOR YOU<a href="#">See All  <span style="color:#999">></span></a></div>
                <div class='suggestionContent' v-for="user in users">
                    <div class='suggestionPic'>
                         <a href='#'><img :src='profilePic'></a>
                    </div>
                    <div class='suggestionNameContainer'>
                        <div class='nameBox'>
                            <div class='suggestionName'>
                                <a href='#'> {{ user }} </a>
                            </div>
                        <div class='suggestionFullName'>
                            <a href='#'> {{ user.fullName }} </a></div>
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
                users: Object.keys(store.state.users).filter((user) => {
                    return user !== store.state.username;
                }),
            }
        },
        computed: {
         ...mapGetters([
            'getUsername',
            'getUserFullName',
            'getUsers',
            ]),
            profilePic: function() {
                return './client/src/assets/img/' +  + '.jpg';
            },
        },
      }
    
</script>
<style>
</style>