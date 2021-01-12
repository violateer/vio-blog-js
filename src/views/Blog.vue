<template>
  <div class="blog w init">
    <MultiCard class="multiCard" :cards="['vue','react','nodeJs']"/>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import MultiCard from '@/components/MultiCard.vue';

export default Vue.extend({
  name: 'Blog',
  components: {
    MultiCard
  }
});
</script>

<style lang="scss" scoped>
.blog {
  .multiCard {
    margin-top: 80px;
    margin-bottom: 30px;
  }
}
</style>