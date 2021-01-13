<template>
  <div id="app">
    <TopBar/>
    <router-view></router-view>
    <Footer class="footer"/>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import TopBar from '@/components/TopBar.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'App',
  async created () {
    // 获取所有文章
    await this.$store.dispatch('articles/actionRequestArticles');
  },
  components: {
    TopBar, Footer
  }
});
</script>

<style lang="scss"></style>
