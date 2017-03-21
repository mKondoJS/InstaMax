<template>
    <header class="header">
        <div class="headerContainer">
            <div class="userInfo">
                <img :src='userImg'>
                <span class="userName"> {{ username }} </span>
            </div>
            <div id="instaLogo"><a href="/"><img src="/img/Instamax235x52.png"></a></div>
            <div class="searchBox">
                <input type="text" class="searchInput" id="search" name="search" placeholder="Search" v-model="search" v-if="results">
                <div class="searchInputIcon"></div>
                   <!--<div v-if="results">-->
                      <!--<h1>{{ results.term }}</h1>-->
                      <!--<ul v-if="results.matches.length">-->
                          <!--<li v-for="match in results.matches">
                              <a :href="match.url">{{ match.title }}</a>
                              <p>{{ match.description }}</p>
                          </li>-->
                      <!--</ul>-->
                      <!--<p v-else>
                          No matches found.
                      </p>-->
                  <!--</div>-->
                <datalist id="matches" v-if="results.matches.length">

                  <option value="" v-for="match in results.matches">{{ match.title }}</option>
                </datalist>
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

  // import store from '../overvue/store';
import Vue from 'vue';
import Rx from 'rxjs/Rx';
import VueRx from 'vue-rx';

// import vmApp from '../main';
Vue.use(VueRx, Rx);

function fetchTerm(term) {
    return Rx.Observable.fromPromise($.ajax({
      url: 'http://en.wikipedia.org/w/api.php',
      dataType: 'jsonp',
      data: {
        action: 'opensearch',
        format: 'json',
        search: term,
      },
    }).promise());
}
function formatResult(res) {
    return {
    // term: res[0],
      matches: res.map((description, i) => {
        console.log('db description', description);
        return description;
      // description: res[2][i],
      // url: res[3][i],
      }),
    };
}


  export default {
    data() {
      return {
        username: this.$store.state.username,
        search: '',
      };
    },
    subscriptions() {
      return {
      // this is the example in RxJS's readme.
        results: this.$watchAsObservable('search')
        .pluck('newValue')
        .filter(text => text.length > 2)
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap(fetchTerm)
        .map(formatResult),
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
  };

</script>
<style lang="">

</style>
