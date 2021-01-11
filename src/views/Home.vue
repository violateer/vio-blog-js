<template>
  <div class="home w">
    <Card v-for="article in getArticles"
          :title="article.title"
          :author="article.author"
          :content="article.content"
          :review-num="article.reviewNum"
          :page-views="article.pageViews"
          :date="article.createdAt"
    />
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import Card from '@/components/Card.vue';
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
    // getArticles () {
    //   console.log(this.$store.getters['articles/watchArticles']);
    // }
    ...mapGetters({ getArticles: 'articles/watchArticles' })
  },
  components: {
    Card
  }
});
</script>

<style lang="scss" scoped>
.home {
  margin-top: 60px;
}
</style>

