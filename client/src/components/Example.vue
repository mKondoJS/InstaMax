<template>
  <div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    methods: {
      ...mapActions({
        // implied key value pairs (es6 destructured)
        // i.e.
        // asyncDecrement,
        // asyncIncrement,
      })
    }
  }
</script>

