import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/views/layout/Layout'
/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used in sidebar (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
  }
**/

export const constantRouterMap = [
  {
    path: '',
    redirect: 'home/children-home',
    component: Layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home/index'),
        children: [
          {
            path: 'children-home',
            component: () => import('@/views/Home/index'),
            meta: { title: 'Only one children', icon: 'IconFirst' },
            name: 'One children'
          }
        ]
      },
      {
        path: 'home2',
        component: () => import('@/views/Home/index'),
        name: 'W/o children',
        meta: { title: 'Without children', icon: 'IconSecond' }
      },
      {
        path: 'home3',
        component: () => import('@/views/Home/index'),
        meta: { title: 'Parent have 2 children' },
        children: [
          {
            path: 'children-home3',
            component: () => import('@/views/Home/index'),
            name: 'Children3',
            meta: { title: 'First children' }
          },
          {
            path: 'children-home4',
            component: () => import('@/views/Home/index'),
            name: 'Children4',
            meta: { title: 'Second children' }
          }
        ]
      },
      {
        path: 'home4',
        component: () => import('@/views/Home/index'),
        meta: { title: 'Parent have 3 children' },
        children: [
          {
            path: 'children-home3',
            component: () => import('@/views/Home/index'),
            name: 'Children5',
            meta: { title: 'First children have 1 children' },
            children: [
              {
                path: 'children-home8',
                component: () => import('@/views/Home/index'),
                name: 'Children8',
                meta: { title: 'First children' }
              }
            ]
          },
          {
            path: 'children-home4',
            component: () => import('@/views/Home/index'),
            name: 'Children6',
            meta: { title: 'Second children' }
          },
          {
            path: 'children-home5',
            component: () => import('@/views/Home/index'),
            name: 'Children7',
            meta: { title: 'Third children' }
          }
        ]
      }
    ]
  },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
