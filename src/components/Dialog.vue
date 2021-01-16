<template>
  <div class="dialog-bg" v-show="isShow">
    <div class="dialog-container">
      <div class="dialog-header">
        {{ title }}
      </div>
      <div class="dialog-main">
        <slot></slot>
      </div>
      <div class="dialog-footer">
        <button class="btn-cancel" @click="hideDialog">取消</button>
        <button class="btn-confirm" @click="submit">确认</button>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'Dialog',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    hideDialog () {
      this.$emit('hideDialog');
    },
    submit () {
      this.$emit('submit');
    }
  }
});
</script>

<style lang="scss" scoped>
.dialog-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  z-index: 10;

  .dialog-container {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    position: fixed;
    width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .dialog-header {
      height: 56px;
      font-size: 24px;
      background: black;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
    }

    .dialog-main {
      padding: 15px 40px;
    }

    .dialog-footer {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 57px;
      border-top: 1px solid #ddd;
      padding: 0 30px;

      button {
        width: 80px;
        height: 30px;
        background-color: #000;
        color: white;
        border: none;

        &.btn-cancel {
          background-color: #fff;
          color: black;
          border: 1px solid #999;
          transition: background-color 250ms linear;

          &:hover {
            background-color: #eee;
          }
        }
      }
    }
  }
}
</style>