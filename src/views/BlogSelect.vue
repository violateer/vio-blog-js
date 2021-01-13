<template>
  <div class="selectBox">
    <div class="select selectOne">
      <a href="/blog/upload" class="btn leftBtn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        上传md文件
      </a>
    </div>
    <div class="select">
      <a href="/blog/edit" class="btn rightBtn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        在线编辑md
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BlogSelect'
});
</script>

<style lang="scss" scoped>
.selectBox {
  position: relative;
  min-height: 100%;
  width: 100%;
  display: flex;

  .select {
    display: inline-block;
    width: 50%;
    height: 80vh;

    &.selectOne {
      border-right: 3px solid black;
      margin-right: 40px;
      position: relative;
    }

    .btn {
      display: inline-block;
      padding: 25px 30px;
      color: black;
      font-size: 24px;
      text-decoration: none;
      letter-spacing: 4px;
      text-transform: uppercase;
      position: relative;
      overflow: hidden;
      transition: 0.5s;
      margin: 40px 0;
      -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);

      &:hover {
        background-color: gray;
        color: white;
        box-shadow: 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 200px white;
      }

      &:nth-of-type(1) {
        filter: hue-rotate(290deg);
      }

      /* 会影响包含块 */
      &:nth-of-type(3) {
        filter: hue-rotate(160deg);
      }

      span {
        position: absolute;

        &:nth-child(1) {
          width: 100%;
          height: 2px;
          top: 0;
          left: 0;
          background: linear-gradient(to right, transparent, black);
          animation: animate1 3s linear infinite;
          animation-delay: 0s;
          @keyframes animate1 {
            0% {
              left: -100%;
            }
            50%, 100% {
              left: 100%;
            }
          }
        }

        &:nth-child(2) {
          width: 2px;
          height: 100%;
          top: -100%;
          right: 0;
          background: linear-gradient(to bottom, transparent, black);
          animation: animate2 3s linear infinite;
          animation-delay: 0.75s;
          @keyframes animate2 {
            0% {
              top: -100%
            }
            50%, 100% {
              top: 100%;
            }
          }
        }

        &:nth-child(3) {
          width: 100%;
          height: 2px;
          bottom: 0;
          right: -100%;
          background: linear-gradient(to left, transparent, black);
          animation: animate3 3s linear infinite;
          animation-delay: 1.5s;
          @keyframes animate3 {
            0% {
              right: -100%
            }
            50%, 100% {
              right: 100%
            }
          }
        }

        &:nth-child(4) {
          width: 2px;
          height: 100%;
          bottom: -100%;
          left: 0;
          background: linear-gradient(to top, transparent, black);
          animation: animate4 3s linear infinite;
          animation-delay: 2.25s;
          @keyframes animate4 {
            0% {
              bottom: -100%
            }
            50%, 100% {
              bottom: 100%
            }
          }
        }
      }

      &.leftBtn {
        position: absolute;
        right: 40px;
        top: 30%;
      }

      &.rightBtn {
        position: absolute;
        top: 30%;
      }
    }
  }
}
</style>