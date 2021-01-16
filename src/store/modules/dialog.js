// 设置state对象的初始值
const state = {
    dialogTitle: '标题',
    isShow: false
};

// 实时监听state值的变化
const getters = {
    // 方法名随意，主要用来承载变化的test值
    getTitle (state) {
        return state.dialogTitle;
    },
    getIsShow (state) {
        return state.isShow;
    }
};

// 改变state值的方法
const mutations = {
    // 除了传state，还可以传额外的参数
    setTitle (state, title) {
        state.dialogTitle = title;
    },
    setIsShow (state, isShow) {
        state.isShow = isShow;
    }
};

// 自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
const actions = {
    actionGetTitle (context, title) {
        context.commit('setTitle', title);
    },
    actionGetIsShow (context, isShow) {
        context.commit('setIsShow', isShow);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};