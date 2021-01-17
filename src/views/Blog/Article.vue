<template>
  <div class="article w">
    <div v-if="mdContent.length">
      <h1>{{ articleConf.title }}</h1>
      <div v-html="mdContent" v-highlight class="markdown-body"></div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import marked from 'marked';
import 'highlight.js/styles/atom-one-light.css';
// 引入markdown样式
import 'github-markdown-css';

export default Vue.extend({
  name: 'Article',
  data () {
    return {
      mdContent: '',
      articleConf: Object
    };
  },
  async created () {
    const id = this.$route.params.id;
    const { data } = await this.$api.getMd(`${id}`);
    const { mdContent, articleConf } = data;
    this.mdContent = marked(mdContent);
    this.articleConf = articleConf;
  }
});
</script>

<style lang="scss" scoped>
.article {
  padding: 20px 30px 50px 30px;
  width: 60%;
  background-color: #fff;
  box-shadow: 5px 5px 5px 5px #cacaca;

  h1 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 10px;
  }
}
</style>