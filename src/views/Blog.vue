<template>
  <div class="blog  init">
    <MultiCard class="multiCard" :cards="cards"/>
    <div class="cards">
      <Card v-for="(article,index) in getArticles"
            :title="article.title"
            :author="article.author"
            :content="article.content"
            :review-num="article.reviewNum"
            :page-views="article.pageViews"
            :date="article.createdAt"
            :key="index"
      />
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
      cards: ['vue', 'react', 'nodeJs', 'express']
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
  //overflow: hidden;
  padding-bottom: 40px;
  margin-left: 50px;
  position: relative;

  .multiCard {
    margin-top: 180px;
    margin-bottom: 30px;
    position: relative;
    left: 200px;
  }

  .cards {
    position: relative;
    top: -550px;
    left: 450px;
    margin-bottom: -550px;

    &::after {
      content: "";
      width: 3px;
      height: 100%;
      background-color: #000;
      position: absolute;
      top: 0px;
      left: -60px;
    }
  }
}
</style>