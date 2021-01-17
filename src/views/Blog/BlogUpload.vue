<template>
  <div class="wrap">
    <form action="post" @submit="onSubmit" class="uploadForm">
      <div class="title">
        <label for="title">文章标题</label>
        <input type="text" id="title" v-model:value="title">
      </div>
      <div class="author">
        <label for="author">文章作者</label>
        <input type="text" id="author" v-model:value="author">
      </div>
      <div class="upload">
        <label for="upload">上传文件</label>
        <input type="file" id="upload" @change="getInfo">
      </div>
      <!--      选择标签-->
      <div class="labels">
        <label>选择分类</label>
        <div class="select-labels">
          <el-tag :key="tag"
                  closable
                  v-for="tag in dynamicTags"
                  @close="handleClose(tag)"
                  type="info"
          >{{ tag }}
          </el-tag>
          <input class="label-input"
                 type="text"
                 v-if="inputVisible"
                 v-model="inputValue"
                 ref="saveTagInput"
                 @blur="handleInputConfirm"
                 @keyup="handleInputEnterConfirm"
                 @keydown="handleInputEnterConfirm">
          <el-button v-else class="button-new-tag" size="small" @click="showInput" type="info">+ New Tag</el-button>
        </div>
      </div>
      <button type="submit">上传博客</button>
    </form>
    <!--  放置弹窗-->
    <Dialog :isShow="isShow" :dialogTitle="dialogTitle" :code="code" class="dialog">
      <p>{{ dialogContent }}</p>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Dialog from '../../components/Dialog.vue';
import Label from '../../components/Label.vue';
import {mapActions, mapGetters} from 'vuex';

export default Vue.extend({
  name: 'BlogUpload',
  data() {
    return {
      title: '',
      author: 'violateer',
      dialogContent: '',
      code: -1,
      dynamicTags: ['vue', 'react', 'nodejs'],
      inputVisible: false,
      inputValue: ''
    };
  },
  methods: {
    // 封装弹窗控制
    showDialog(title, content) {
      this.dialogContent = content;
      this.setTitle(title);
      this.toggleShow(true);
    },
    // 提交事件
    async onSubmit(e) {
      e.preventDefault();
      // 判断是否存在要上传的文件
      if (!this.title) {
        this.showDialog('警告', '请输入文件名');
        return;
      }
      if (e.target[2].files.length === 0) {
        this.showDialog('警告', '请选择要上传的文件');
        return;
      }

      let formData = new FormData();
      let extraData = {
        title: this.title,
        author: this.author
      };
      formData.append('file', e.target[2].files[0]);
      formData.append('extraData', JSON.stringify(extraData));
      formData.append('labels', this.dynamicTags);
      const config = {
        headers: {'Content-Type': 'multipart/form-data'}
      };

      const {data, code} = await this.$api.uploadFile(formData, config);
      if (code === 201) {
        this.showDialog('消息', data.msg);
        this.code = code;
      } else {
        console.log(code);
      }
    },
    // 获取文件信息
    getInfo(e) {
      this.title = e.target.files[0].name.split('.')[0];
    },
    // 弹窗
    ...mapActions({
      toggleShow: 'dialog/actionGetIsShow',
      setTitle: 'dialog/actionGetTitle'
    }),
    // 标签
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.focus();
      });
    },
    handleInputEnterConfirm(e) {
      if (e.keyCode === 13) {
        this.handleInputConfirm();
      }
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
      return false;
    },
    // 阻止回车提交
    preventSubmit(e) {
      return false;
    }
  },
  computed: {
    ...mapGetters({
      dialogTitle: 'dialog/getTitle',
      isShow: 'dialog/getIsShow'
    })
  },
  components: {
    Dialog,
    Label
  }
});
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;

  .uploadForm {
    width: 100%;
    position: relative;

    > div {
      margin-left: 50%;
      transform: translateX(-35%);
      display: flex;
      margin-bottom: 50px;

      #upload {
        padding: 4px 10px;
        width: 180px;
        font-size: 16px;
      }

      .select-labels {
        padding: 4px 10px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        .el-tag {
          margin-right: 8px;
          cursor: pointer;
        }

        .label-input {
          width: 95px;
          height: 100%;
          border-radius: 5px;
          font-size: 16px;
        }
      }
    }

    label {
      display: inline-block;
      padding: 3px 6px;
      text-align: right;
      width: 100px;
      vertical-align: top;
      font-size: 20px;
      height: 30px;
      line-height: 30px;
    }


    > button {
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
    width: 200px;
    text-align: center;
    font-size: 20px;

  }
}

.dialog p {
  text-align: center;
  font-size: 18px;
}
</style>