<template>
  <div class="flex-wrapper">
    <div class="container">
      <max-nav></max-nav>
      <main class="main">
        <max-Feed-Suggestion></max-Feed-Suggestion>
        <max-Feed-Box></max-Feed-Box>
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


  export default {
    computed: {

    },
    methods: {

    },
    components: {
      maxFeedBox: FeedBox,
      maxFeedSuggestion: FeedSuggestion,
      maxFooter: Footer,
      maxNav: Nav
    }

  }
</script>

