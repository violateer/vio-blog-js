<template>
  <div class="wrap">
    <form action="post" @submit="onSubmit" autocomplete=“off” class="uploadForm">
      <div class="title">
        <label for="title">文章标题</label>
        <input type="text" id="title">
      </div>
      <div class="author">
        <label for="author">文章作者</label>
        <input type="text" id="author">
      </div>
      <div class="upload">
        <label for="upload">上传文件</label>
        <input type="file" value="" id="upload" @change="uploadConfig">
      </div>
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
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 150px 0;

  .uploadForm {
    width: 800px;
    position: relative;

    div {
      margin-left: 50%;
      transform: translateX(-50%);
      display: flex;
      margin-bottom: 50px;

      #upload {
        padding-top: 4px;
        padding-left: 10px;
        width: 180px;
      }
    }

    label {
      display: inline-block;
      padding: 3px 6px;
      text-align: right;
      width: 100px;
      vertical-align: top;
      font-size: 20px;
    }


    button {
      position: absolute;
      left: 50%;
      transform: translateX(-80%);
      width: 100px;
      height: 35px;
      cursor: pointer;
    }
  }

  input {
    outline: none;
    background-color: #eee;
    border-color: #eee;
    width: 185px;
  }
}
</style>