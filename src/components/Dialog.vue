<template>
  <transition name="fade">
    <div class="dialog-bg" v-show="isShow">
      <div class="dialog-container">
        <div class="dialog-header">
          {{ dialogTitle }}
        </div>
        <div class="dialog-main">
          <slot></slot>
        </div>
        <div class="dialog-footer">
          <!--        <button class="btn-cancel" @click="hideDialog">取消</button>-->
          <button class="btn-confirm" @click="confirmHandler">确认</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="js">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Dialog',
  props: {
    code: Number
  },
  methods: {
    ...mapActions({
      toggleShow: 'dialog/actionGetIsShow',
      refreshArticles: 'articles/actionRequestArticles'
    }),
    confirmHandler () {
      this.toggleShow(false);
      if (this.code >= 200 && this.code < 300) {
        this.refreshArticles('refresh');
        this.$router.push('/');
      }
    }
  },
  computed: {
    ...mapGetters({
      dialogTitle: 'dialog/getTitle',
      isShow: 'dialog/getIsShow'
    })

  }
});
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.dialog-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  z-index: 10;
  transition: opacity .5s;

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