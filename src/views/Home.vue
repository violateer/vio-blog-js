<template>
  <div class="home w init">
    <Card v-for="(article,index) in getArticles"
          :title="article.title"
          :author="article.author"
          :content="article.content"
          :review-num="article.reviewNum"
          :page-views="article.pageViews"
          :date="article.createdAt"
          :path="article.md"
          :key="index"
    />
    <Calender class="calender"/>
    <!--  放置弹窗-->
    <Dialog :isShow="isShow" :title="dialogTitle" @hideDialog="hideDialog" @submit="submit">
      <p>这里放弹窗的内容</p>
    </Dialog>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import Card from '@/components/Card.vue';
import Calender from '@/components/Calender.vue';
import Dialog from '@/components/Dialog';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Home',
  data () {
    return {
      // 弹窗
      dialogTitle: '标题',
      isShow: true
    };
  },
  computed: {
    ...mapGetters({ getArticles: 'articles/watchArticles' })
  },
  methods: {
    // 弹窗事件
    hideDialog () {
      // 取消弹窗回调
      this.isShow = false;
    },
    submit () {
      // 确认弹窗回调
      this.isShow = false;
    }
  },
  components: {
    Card,
    Calender,
    Dialog
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

