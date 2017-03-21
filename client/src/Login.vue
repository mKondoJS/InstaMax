<template>
  <div class="container">
    <main>
      <max-Login-Box></max-Login-Box>
      <max-Footer></max-Footer>
    </main>
  </div>
</template>

<script>
  // import components here

  import Footer from './components/Footer.vue';
  import LoginBox from './components/LoginBox.vue';

  export default {
    computed: {

    },
    methods: {

    },
    components: {
      maxFooter: Footer,
      maxLoginBox: LoginBox
    }
  }
</script>

