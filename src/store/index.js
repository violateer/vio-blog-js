import Vue from 'vue';
import Vuex from 'vuex';
import test from '@/store/modules/test';
import articles from '@/store/modules/articles';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        test,
        articles
    }
});
