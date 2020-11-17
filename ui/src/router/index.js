import Vue from "vue";
import VueRouter from "vue-router";

import MainLayout from "../layout/MainLayout";
import ColLayout from "../layout/ColLayout";
import BlankLayout from "../layout/BlankLayout";

Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        name: "",
        component: MainLayout,
        redirect: '/data/mine/index',
        children: [
            {
                path:"data",
                name: "data",
                component: ColLayout,
                redirect: '/data/mine/index',
                children: [
                    {
                        path: 'mine',
                        name: 'mine',
                        component: BlankLayout,
                        redirect: '/data/mine/index',
                        children: [
                            {
                                path: 'mine-list',
                                alias: "index",
                                name: 'list',
                                component: () => import('../views/data/mine/List')
                            },
                            {
                                path: 'edit/:id',
                                name: 'mine-edit',
                                component: () => import('../views/data/mine/Edit')
                            },
                        ],
                    },
                    {
                        path: 'buildin',
                        name: 'buildin',
                        component: BlankLayout,
                        children: [
                            {
                                path: 'ranges',
                                name: 'ranges',
                                component: BlankLayout,
                                children: [
                                    {
                                        path: 'list',
                                        name: 'ranges-list',
                                        component: () => import('../views/data/buildin/ranges/List')
                                    },
                                    {
                                        path: 'edit/:id',
                                        name: 'ranges-edit',
                                        component: () => import('../views/data/buildin/ranges/Edit')
                                    },
                                ],
                            },
/*                            {
                                path: 'instances',
                                name: 'instances',
                                component: BlankLayout,
                                children: [
                                    {
                                        path: 'list',
                                        name: 'instances-list',
                                        component: () => import('../views/data/buildin/instances/List')
                                    },
                                    {
                                        path: 'edit',
                                        name: 'instances-edit',
                                        component: () => import('../views/data/buildin/instances/Edit')
                                    },
                                ],
                            },
                            {
                                path: 'config',
                                name: 'config',
                                component: BlankLayout,
                                children: [
                                    {
                                        path: 'list',
                                        name: 'config-list',
                                        component: () => import('../views/data/buildin/config/List')
                                    },
                                    {
                                        path: 'edit',
                                        name: 'config-edit',
                                        component: () => import('../views/data/buildin/config/Edit')
                                    },
                                ],
                            },
                            {
                                path: 'text',
                                name: 'text',
                                component: BlankLayout,
                                children: [
                                    {
                                        path: 'list',
                                        name: 'text-list',
                                        component: () => import('../views/data/buildin/text/List')
                                    },
                                    {
                                        path: 'edit',
                                        name: 'text-edit',
                                        component: () => import('../views/data/buildin/text/Edit')
                                    },
                                ],
                            },
                            {
                                path: 'excel',
                                name: 'excel',
                                component: BlankLayout,
                                children: [
                                    {
                                        path: 'list',
                                        alias: "index",
                                        name: 'excel-list',
                                        component: () => import('../views/data/buildin/excel/List')
                                    },
                                ],
                            },*/
                        ],
                    }
                ]
            }
        ]
    },
]

const router =  new VueRouter({
    routes
})
export default router;
