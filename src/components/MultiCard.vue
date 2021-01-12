<template>
  <div class="levels">
    <div class="level levelChild" v-if="cards" v-for="(card,index) in cards" :key="index">
      <div class="title">{{ card }}</div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'MultiCard',
  props: {
    cards: Array
  }
});
</script>

<style lang="scss" scoped>
$bgc: black;
$font-color: white;

.levels {
  position: relative;
  top: 50%;
  left: 50%;
  margin-left: -140px;
  margin-top: -180px;
  transform-style: preserve-3d;
  user-select: none;

  .level {
    position: relative;
    width: 280px;
    height: 140px;
    border-radius: 12px;
    color: $font-color;
    cursor: pointer;
    transition: all 0.4s ease;
    transform: rotateX(45deg) rotateY(-15deg) rotate(45deg);

    &.levelChild {
      margin-top: -35px;
      background-color: $bgc;
      background-image: linear-gradient(135deg, $bgc, $bgc);
      box-shadow: 20px 20px 60px rgba(34, 50, 84, 0.5), 1px 1px 0px 1px $bgc;
      z-index: 4;
      opacity: 0.7;
    }

    .title {
      position: absolute;
      top: 45px;
      left: 15px;
      font-size: 26px;
      font-weight: bold;
    }

    //.content {
    //  position: absolute;
    //  font-weight: 700;
    //  bottom: 15px;
    //  left: 15px;
    //  font-size: 16px;
    //}

    &:hover {
      transform: rotateX(30deg) rotateY(-15deg) rotate(30deg) translate(-25px, 50px);
      opacity: 0.6;

      &::after {
        transform: translateX(100%);
        transition: all 1.2s ease-in-out;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      background-image: linear-gradient(60deg, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 80%);
    }
  }
}
</style>