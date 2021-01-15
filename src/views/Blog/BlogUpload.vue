<template>
  <div class="wrap">
    <form action="post" @submit="onSubmit" class="uploadForm">
      <div class="title">
        <label for="title">文章标题</label>
        <input type="text" id="title" :value="title">
      </div>
      <div class="author">
        <label for="author">文章作者</label>
        <input type="text" id="author" :value="author">
      </div>
      <div class="upload">
        <label for="upload">上传文件</label>
        <input type="file" value="" id="upload" @change="getInfo">
      </div>
      <button type="submit">上传博客</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BlogUpload',
  data() {
    return {
      title: '',
      author: 'violateer'
    };
  },
  methods: {
    // 提交事件
    async onSubmit(e) {
      e.preventDefault();
      let formData = new FormData();
      let extraData = {
        title: this.title,
        author: this.author
      };
      formData.append('file', e.target[2].files[0]);
      formData.append('extraData', JSON.stringify(extraData));
      const config = {
        headers: {'Content-Type': 'multipart/form-data'}
      };
      const {data, code} = await this.$api.uploadFile(formData, config);
      if (code === 201) {
        alert(`${data.msg}`);
        this.$router.go(0);
      }
    },
    // 获取文件信息
    getInfo(e) {
      this.title = e.target.files[0].name.split('.')[0];
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
        font-size: 16px;
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
    background-color: #fff;
    border: 1px solid #eee;
    width: 185px;
    text-align: center;
    font-size: 20px;

  }
}
</style>