<template>
  <div class="calender" @click="writeArticle">
    <p id="monthName">{{ monthName }}</p>
    <p id="dayName">{{ dayName }}</p>
    <p id="dayNumber">{{ dayNumber }}</p>
    <p id="year">{{ year }}</p>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'Calender',
  data () {
    return {
      dayNumber: Number,
      month: Number,
      dayName: String,
      monthName: String,
      year: Number
    };
  },
  created () {
    this.setCalenderDate();
  },
  methods: {
    setCalenderDate () {
      const lang = navigator.language;
      const date = new Date();

      this.dayNumber = date.getDate();
      this.month = date.getMonth();
      this.dayName = date.toLocaleString(lang, { weekday: 'long' });
      this.monthName = date.toLocaleString(lang, { month: 'long' });
      this.year = date.getFullYear();
    },
    writeArticle () {
      this.$router.push('/blog/select');
    }
  }
});
</script>

<style lang="scss" scoped>
.calender {
  position: relative;
  width: 200px;
  background-color: white;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  border-bottom: 1px solid black;
  -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #0004);
  // 禁止选中文本
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;

  #monthName {
    position: relative;
    padding: 5px 10px;
    background-color: black;
    color: white;
    font-size: 30px;
    font-weight: 600;
  }

  #dayName {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 300;
    color: black;
  }

  #dayNumber {
    margin-top: 0;
    font-size: 80px;
    font-weight: 700;
    line-height: 1em;
    color: black;
  }

  #year {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
    color: black;
  }
}
</style>