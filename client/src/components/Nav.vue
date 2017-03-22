<template>
    <header class="header">
        <div class="headerContainer">
            <div class="userInfo">
                <img :src='userImg'>
                <span class="userName"> {{ username }} </span>
            </div>
            <div id="instaLogo"><a href="/"><img src="/img/Instamax235x52.png"></a></div>
            <div class="searchBox">
                <input @change="filterFeed" @keyup.enter="filterFeed" type="text" list="lotr" class="searchInput" id="search" name="search" placeholder="Search" v-model="searchField">
                <datalist id="lotr" v-if="results">
                  <option v-for="match in results.matches">{{ match.description }}</option>
                </datalist>
                <div class="searchInputIcon"></div>
            </div>
            <nav class="navbar">
                <a href="#"><img src="/img/navigate30x30.png"></a>
                <a href="#"><img src="/img/activity30x30.png"></a>
                <a href="#"><img src="/img/profile30x30.png"></a>
            </nav>
        </div>
    </header>
</template>
<script>

  import Vue from 'vue';
  import Rx from 'rxjs/Rx';
  import VueRx from 'vue-rx';
  import { commitFeedUrls } from '../overvue/actions';

  Vue.use(VueRx, Rx);

  function queryDatabase(char) {
    return Rx.Observable.fromPromise($.ajax({
      method: 'POST',
      url: 'http://localhost:8080/description',
      dataType: 'json',
      data: {
        action: 'opensearch',
        format: 'json',
        search: char,
      },
    }).promise());
  }
  function displayOptions(res) {
    return {
      matches: res.map(description => ({
        description,
      })),
    };
  }


  export default {
    data() {
      return {
        username: this.$store.state.username,
        searchField: '',
      };
    },
    subscriptions() {
      return {
      // this is the example in RxJS's readme.
        results: this.$watchAsObservable('searchField')
        .pluck('newValue')
        .filter(text => text.length > 1)
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap(queryDatabase)
        .map(displayOptions),
      };
    },
    computed: {
      username() {
        return this.$store.state.username;
      },
      userImg() {
        if (this.username) {
          return '/img/' + this.$store.state.username + '.jpg';
        }
        return '/img/profile.png';
      },
    },
    methods: {
      filterFeed(e) {
        console.log('FIRE NOW', e);
        commitFeedUrls('http://localhost:8080/InstaData/' + e.srcElement.value);
      },
    },
  };

</script>
<style lang="">

</style>
