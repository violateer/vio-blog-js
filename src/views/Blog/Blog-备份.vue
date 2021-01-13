<template>
  <div class="blog  init">
    <MultiCard class="multiCard" :cards="cards"/>
    <div class="timestamp">

    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import MultiCard from '@/components/MultiCard.vue';
import Card from '@/components/Card.vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Blog',
  data () {
    return {
      cards: ['vue', 'react', 'nodeJs', 'express', 'koa']
    };
  },
  computed: {
    ...mapGetters({ getArticles: 'articles/watchArticles' })
  },
  components: {
    MultiCard,
    Card
  }
});
</script>

<style lang="scss" scoped>
.blog {
  margin-left: 50px;

  .multiCard {
    display: inline-block;
    margin-top: 150px;
    margin-bottom: 30px;
    position: relative;
    left: 200px;
  }

  .timestamp {
    position: relative;
    display: inline-block;
    width: 500px;
    height: 600px;

    top: -50px;
    left: 230px;
    border-left: 3px solid black;
  }
}
</style>