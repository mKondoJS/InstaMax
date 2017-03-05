<template>
  <div class="flex-wrapper">
    <div class="container">
      <max-nav></max-nav>
      <main class="main">
        <max-Feed-Suggestion />
        <div class="feedBox" v-for="feedItem in getFeedUrls">
          <max-Feed-Box :url='feedItem' />
        </div>
      </main>
      <max-Footer></max-Footer>
    </div>
  </div>
</template>

<script>
  // import components here
  import FeedBox from './components/FeedBox.vue';
  import FeedSuggestion from './components/FeedSuggestion.vue';
  import Footer from './components/Footer.vue';
  import Nav from './components/Nav.vue';
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex';


  export default {
    data() {
      return {
        feedItems: null,
      }
    },
    computed: {
      ...mapGetters(['getFeedUrls', 'getRandomPoster']),
    },
    methods: {
      ...mapActions(['commitFeedUrls','commitRandomPoster']),
    },
    components: {
      maxFeedBox: FeedBox,
      maxFeedSuggestion: FeedSuggestion,
      maxFooter: Footer,
      maxNav: Nav
    },
    beforeCreate: function () {
      $.get('https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json',
        function (data, status) {
          if (status === 'success') {
            //this.feedItems = data;
            this.commitFeedUrls(data);
            //console.log(this.feedItems);
          } else if (status === 'error') {
            $('#feedBox').append("<div class='feedItem borderedBox'>Cannot load feed</div>");
          }
        }.bind(this));
    },

  }
</script>

