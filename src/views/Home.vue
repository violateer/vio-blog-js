<template>
  <div class="home w init">
    <Card v-for="(article,index) in articles"
          :title="article.title"
          :author="article.author"
          :content="article.content"
          :review-num="article.reviewNum"
          :page-views="article.pageViews"
          :date="article.createdAt"
          :path="article.md"
          :id="article._id"
          :key="index"
    />
    <Calender class="calender"/>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import Card from '@/components/Card.vue';
import Calender from '@/components/Calender.vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Home',
  computed: {
    ...mapGetters({
      articles: 'articles/watchArticles'
    })
  },
  components: {
    Card,
    Calender
  }
});
</script>

<style lang="scss" scoped>
.home {
  .calender {
    position: fixed;
    top: 100px;
    right: 140px;
    margin-top: 50px;
  }

  .create {
    position: fixed;
    bottom: 100px;
    right: 0px;
  }
}
</style>

