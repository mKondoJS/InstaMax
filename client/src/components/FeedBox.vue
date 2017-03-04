<template>
    <div class='feedItem borderedBox'>
        <div class='feedHeader'>
            <div class='posterPic'>
                <a href='#'><img :src='timer'></a>
            </div>
            <div class='posterNameContainer'>
                <div class='posterName'>
                    <a href='#'>Poster Name</a>
                </div>
            </div>
            <div class='postTimer'>
                {{ timer }}h
            </div>
        </div>
        <div class='feedImg'>
            FeedImg
        </div>
        <div class='imgCommentBox'>
            <div class='likes'>
                <span class='likeCount'> {{ likes }}</span> likes
            </div>
            <div class='imgComments'></div>
        </div>
        <div class='commentInputBox'>
            <div :id="_uid" class='likeThis notLiked' @click="likeHandler"></div>
            <input type='text' class='commentInput' id='newComment' maxlength='1000' placeholder='Add a comment...'>
            <a href='#'><span class='reportMenu'><img src="../assets/img/elipse.png"></span></a>
        </div>
    </div>
</template>


<script>

  import store from '../store/store';

  export default {
    data () {
      return {
        feedImg: '',
        likes: this.getRandom(1, 100),
        timer: this.getRandom(1,23),
      }
    },
    methods: {
      getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      likeHandler(e) {
        console.log('classes', e, 'id', e.target.id);

        if( e.srcElement.classList.contains('liked')) {
          this.likes--;
        } else {
          this.likes++;
        }

        $('#' + e.target.id).toggleClass('liked');
      },
    },
    computed: {
    },
    getters: {

    }
  }
</script>

<style>
</style>
