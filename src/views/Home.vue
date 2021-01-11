<template>
  <div class="home w">
    <Card v-for="(article,index) in getArticles"
          :title="article.title"
          :author="article.author"
          :content="article.content"
          :review-num="article.reviewNum"
          :page-views="article.pageViews"
          :date="article.createdAt"
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
  data () {
    return {
      articles: []
    };
  },
  async created () {
    // 获取所有文章
    await this.$store.dispatch('articles/actionRequestArticles');
  },
  computed: {
    ...mapGetters({ getArticles: 'articles/watchArticles' })
  },
  components: {
    Card,
    Calender
  }
});
</script>

<style lang="scss" scoped>
.home {
  margin-top: 60px;
  position: relative;

  .calender {
    position: absolute;
    top: 0;
    right: 200px;
    margin-top: 50px;
  }
}
</style>

