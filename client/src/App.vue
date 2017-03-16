<template>
  <div class="flex-wrapper">
    <div class="container">
      <max-nav></max-nav>
      <main class="main">
        <max-Feed-Suggestion />
        <div class="feedBox" v-for="feedItem in feedItems">
          <max-Feed-Box :url='feedItem' />
        </div>
      </main>
      <max-Footer></max-Footer>
    </div>
  </div>
</template>

<script>
  // import components here
  import FeedBox        from './components/FeedBox.vue';
  import FeedSuggestion from './components/FeedSuggestion.vue';
  import Footer         from './components/Footer.vue';
  import Nav            from './components/Nav.vue';
  //import store          from './overvue/store';
  import { commitFeedUrls } from './overvue/actions';
  ///import { mapActions } from 'vuex';
  ///import { mapGetters } from 'vuex';


  export default {
    data() {
      return {
       feedItems: this.$store.state.feedItems,
      }
    },
    computed: {

    },
    methods: {

    },
    components: {
      maxFeedBox: FeedBox,
      maxFeedSuggestion: FeedSuggestion,
      maxFooter: Footer,
      maxNav: Nav
    },
    beforeCreate: function () {
      commitFeedUrls('https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json');
      /*$.get('https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json',
        function (data, status) {
          if (status === 'success') {
            commitFeedUrls(data);
          } else if (status === 'error') {
            $('#feedBox').append("<div class='feedItem borderedBox'>Cannot load feed</div>");
          }
        }.bind(this));*/
    },

  }
</script>

