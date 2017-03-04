<template>
  <div class="flex-wrapper">
    <div class="container">
      <main class="main">
        <!--<max-Login-Box></max-Login-Box>-->
        <max-Footer></max-Footer>
      </main>
    </div>
  </div>
</template>

<script>
  // import components here

  import Footer from './components/Footer.vue';
//   import LoginBox from './components/LoginBox.vue'


  export default {
    computed: {

    },
    methods: {

    },
    components: {
      maxFooter: Footer,
    //   maxLoginBox: LoginBox
    }
  }
</script>

