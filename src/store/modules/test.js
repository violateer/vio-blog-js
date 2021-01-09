// 设置state对象的初始值
const state = {
    article: {
        title: '我是标题我是标题'
    }
};

// 实时监听state值的变化
const getters = {
    // 方法名随意，主要用来承载变化的test值
    getTest (state) {
        return state.article;
    }
};

// 改变state值的方法
const mutations = {
    // 除了传state，还可以传额外的参数
    changeTest (state, msg) {
        state.article.title = msg;
    }
};

// 自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
const actions = {
    getChangeTest (context, msg) {
        context.commit('changeTest', msg);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};