<template>
  <div class="music">
    <audio controls height="100" width="100">
      <source src="horse.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Music'
});
</script>

<style lang="scss" scoped>

</style>