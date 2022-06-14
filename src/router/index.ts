import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
     {
        path: '/layout',
        name: 'layout',
        component: () => import('../layouts/Layout.vue'),
        children: [


            {
                path: '/',
                name: 'main',
                component: () => import('../views/main.vue'),
            }, {
                path: '/',
                name: 'Page1',
                component: () => import('../views/page1.vue'),
            },
            {
                path: '/page2',
                name: 'page2',
                  props: true,
             

                component: () => import('../views/page2.vue'),
            },
         
            {
                path: '/page3',
                name: 'page3',
                component: () => import('../views/page3.vue'),
            },
            {
                path: '/page4',
                name: 'page4',
                component: () => import('../views/page4.vue'),
            }
       

        ]

    }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
