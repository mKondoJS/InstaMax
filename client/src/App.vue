<template>
  <div class="flex-wrapper">
    <div class="container">
      <max-nav></max-nav>
      <main class="main">
        <max-Feed-Suggestion />
        <div class="feedBox" v-for="feedItem in feed">
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
  import { commitFeedUrls } from './overvue/actions';

  export default {
    data() {
      return {
        store: this.$store.state,
      };
    },
    computed: {
      feed() {
        console.log('computed feedItems');
        return this.shuffle(this.$store.state.feedItems);
      },
    },
    methods: {
      getFeed() {
        console.log('getFeed', this.$store.state.feedItems);
        return this.$store.state.feedItems;
      },
      shuffle(array) {
        if (!array) return [];
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      },
    },
    components: {
      maxFeedBox: FeedBox,
      maxFeedSuggestion: FeedSuggestion,
      maxFooter: Footer,
      maxNav: Nav,
    },
    beforeCreate() {
      // commitFeedUrls('http://localhost:8080/InstaData');
    },
    mounted() {
      commitFeedUrls('http://localhost:8080/InstaData');
    },
  };
</script>
