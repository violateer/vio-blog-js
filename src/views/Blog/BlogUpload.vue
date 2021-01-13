<template>
  <div class="wrap">
    <form action="post" @submit="onSubmit">
      <label for="title">文章标题</label>
      <input type="text" id="title">
      <label for="author">文章作者</label>
      <input type="text" id="author">
      <label for="upload">请选择md文件</label>
      <input type="file" value="" id="upload" @change="uploadConfig">
      <button type="submit">上传博客</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BlogUpload',
  methods: {
    // 提交事件
    onSubmit(e) {
      e.preventDefault();
      console.log(e);
    },
    // 上传文件配置
    uploadConfig(e) {
      let formData = new FormData();
      let data = JSON.stringify({
        user: 'username',
        env: 'dev'
      });
      formData.append('file', e.target.files[0]);
      formData.append('data', data);   // 上传文件的同时， 也可以上传其他数据
      let url = this.$store.state.path + 'api/tools/handle_upload_file';
      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      };
      this.$axios.post(url, formData, config).then(function (response) {
        console.log(response.data);

      });

    }
  }
});
</script>

<style lang="scss" scoped>

</style>