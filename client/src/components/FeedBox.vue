<template>
    <div class='feedItem borderedBox'>
        <div class='feedHeader'>
            <div class='posterPic'>
                <a href='#'><img :src='posterImg'></a>
            </div>
            <div class='posterNameContainer'>
                <div class='posterName'>
                    <a href='#'>{{ posterName }}</a>
                </div>
            </div>
            <div class='postTimer'>
                {{ timer }}h
            </div>
        </div>
        <div class='feedImg'>
            <img :src='url'>
        </div>
        <div class='imgCommentBox'>
            <div class='likes'>
                <span class='likeCount'> {{ likes }}</span> likes
            </div>
            <div class='imgComments'>
              <ul v-for="comment in comments">
                <li class="imgComment"><span class='commenterName'>{{ getUsername }} </span>{{ comment }}</li>
              </ul>
            </div>
        </div>
        <div class='commentInputBox'>
            <div :id="_uid" class='likeThis notLiked' @click="likeHandler"></div>
            <input type='text' class='commentInput' id='newComment' maxlength='1000' @keyup.enter="setInput" placeholder='Add a comment...'>
            <a href='#'><span class='reportMenu'><img src="../assets/img/elipse.png"></span></a>
        </div>
    </div>
</template>


<script>

  import store from '../store/store';
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    props: {
      url: String,
    },
    computed: {
      ...mapGetters([
        'getFeedImg',
        'getFeedUrl',
        'getUsername',
      ]),
     posterImg: function() {
        return './client/src/assets/img/' + this.poster + '.jpg';
     },
     posterName: function() {
        return this.poster;
     }
    },
    data () {
      return {
        feedImg: '',
        likes: this.getRandom(1, 100),
        timer: this.getRandom(1,23),
        poster: this.getPoster(),
        comments: [],
      }
    },
    methods: {
      ...mapActions(['commitRandomPoster']),
      getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      likeHandler(e) {
        if( e.srcElement.classList.contains('liked')) {
          this.likes--;
        } else {
          this.likes++;
        }

        $('#' + e.target.id).toggleClass('liked');
      },
      getPoster() {
        console.log('getting poster');
        return [
          'sauron_trump2020',
          'Grey_Wanderer',
          'elfonashelf',
          'OneDoesNotSimply',
        ][Math.floor(Math.random() * 4)]
      },
      setInput(e) {
        console.log('val',e.srcElement.value);
        if(e.srcElement.value.length) {
          this.comments.push(e.srcElement.value);
          e.srcElement.value = '';
        }
      }
    },
  }

</script>

<style>
</style>
