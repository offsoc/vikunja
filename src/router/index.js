import Vue from 'vue'
import Router from 'vue-router'

import HomeComponent from '@/components/Home'
// User Handling
import LoginComponent from '@/components/user/Login'
import RegisterComponent from '@/components/user/Register'
// List Handling
import ShowListComponent from '@/components/lists/ShowList'
import NewListComponent from '@/components/lists/NewList'
// Namespace Handling
import NewNamespaceComponent from '@/components/namespaces/NewNamespace'
import EditNamespaceComponent from '@/components/namespaces/EditNamespace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterComponent
    },
    {
      path: '/lists/:id',
      name: 'showList',
      component: ShowListComponent
    },
    {
      path: '/namespaces/:id/list',
      name: 'newList',
      component: NewListComponent
    },
    {
      path: '/namespaces/new',
      name: 'newNamespace',
      component: NewNamespaceComponent
    },
    {
      path: '/namespaces/:id/edit',
      name: 'editNamespace',
      component: EditNamespaceComponent
    }
  ]
})