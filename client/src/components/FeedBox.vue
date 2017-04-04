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
                <li class="imgComment"><span class='commenterName'>{{ username }} </span>{{ comment }}</li>
              </ul>
            </div>
        </div>
        <div class='commentInputBox'>
            <div :id="_uid" class='likeThis notLiked' @click="likeHandler"></div>
            <input type='text' class='commentInput' id='newComment' maxlength='1000' @keyup.enter="postComment" placeholder='Add a comment...'>
            <a href='#'><span class='reportMenu'><img src="/img/elipse.png"></span></a>
        </div>
    </div>
</template>


<script>

  $('.feedItem').on('click',(e) => { console.log('click',e) });

  export default {
    data() {
      return {
        feedImg: '',
        likes: this.getRandom(1, 100),
        timer: this.getRandom(1, 23),
        poster: this.getPoster(),
        comments: [],
      };
    },
    props: {
      url: String,
    },
    computed: {
      posterImg() {
        return '/img/' + this.poster + '.jpg';
      },
      posterName() {
        return this.poster;
      },
      username() {
        return this.$store.state.username;
      },
    },
    methods: {
      getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      likeHandler(e) {
        if ( e.srcElement.classList.contains('liked')) {
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
        ][Math.floor(Math.random() * 4)];
      },
      postComment(e) {
        console.log('val', e.srcElement.value);
        if (e.srcElement.value.length) {
          this.username = this.$store.state.username;
          this.comments.push(e.srcElement.value);
          e.srcElement.value = '';
        }
      },
    },
  };

</script>

<style>
</style>
