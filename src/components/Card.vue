<template>
  <div class="card">
    <div class="title">
      <a href="#">{{ title }}</a>
      <div class="description">
        <a href="#" class="date">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili"></use>
          </svg>
          {{ date }}</a>
        <a href="#" class="author">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ren"></use>
          </svg>
          {{ author }}</a>
        <a href="#" class="reviewNum">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun"></use>
          </svg>
          {{ reviewNum }}</a>
        <a href="#" class="pageViews">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yanjing"></use>
          </svg>
          {{ pageViews }}</a>
      </div>
    </div>
    <div class="content">
      <p>{{ content }}</p>
    </div>
    <button class="btn">Read More</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Card',
  props: {
    title: {
      type: String
    },
    date: {
      type: String
    },
    author: {
      type: String
    },
    reviewNum: {
      type: Number
    },
    pageViews: {
      type: Number
    },
    content: {
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {}
});
</script>

<style lang="scss" scoped>
.card {
  width: 800px;
  height: 350px;
  //background-color: green;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 50px;
  overflow: hidden;
  box-shadow: 5px 5px 5px 5px #cacaca;

  .title {
    font-size: 32px;
    letter-spacing: 2px;
    position: absolute;
    top: 40px;
    margin-bottom: 10px;
    text-align: center;

    .description a {
      font-size: 16px;
      margin-right: 10px;
    }
  }

  .content {
    margin-top: 20px;
    padding-top: 20px;

    p {
      display: -webkit-box;
      width: 770px;
      height: 130px;
      //background-color: green;
      font-size: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }

  .btn {
    position: absolute;
    bottom: 50px;
    width: 100px;
    height: 40px;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    cursor: pointer;
    transition: all 250ms;

    &:hover {
      background-color: #888888;
      color: white;
    }
  }
}

.icon {
  color: black;
}

</style>