import api from '../../request/api';

// 设置state对象的初始值
const state = {
    articles: []
};

// 实时监听state值的变化
const getters = {
    // 方法名随意，主要用来承载变化的test值
    watchArticles (state) {
        return state.articles;
    }
};

// 改变state值的
const mutations = {
    // 除了传state，还可以传额外的参数
    async requestArticles (state) {
        const { data } = await api.getArticles();
        state.articles = [...state.articles, ...data.articles];
    }
};

// 自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
const actions = {
    actionRequestArticles (context) {
        context.commit('requestArticles');
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};