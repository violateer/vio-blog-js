import Vue from 'vue';
import Vuex from 'vuex';
import dialog from '@/store/modules/dialog';
import articles from '@/store/modules/articles';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        dialog,
        articles
    }
});
