import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog/Blog.vue'),
        children: [
            {
                path: 'select',
                name: 'Select',
                component: () => import(/* webpackChunkName: "BlogSelect" */ '../views/Blog/BlogSelect.vue')
            },
            {
                path: 'upload',
                name: 'Upload',
                component: () => import(/* webpackChunkName: "BlogUpload" */ '../views/Blog/BlogUpload.vue')
            },
            {
                path: 'articles/:id',
                name: 'Article',
                component: () => import(/* webpackChunkName: "Article" */ '../views/Blog/Article.vue')
            }
        ]
    },
    {
        path: '/label',
        name: 'Label',
        component: () => import(/* webpackChunkName: "Label" */ '../views/Label.vue')
    },
    {
        path: '/classification',
        name: 'Classification',
        component: () => import(/* webpackChunkName: "Classification" */ '../views/Classification.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
