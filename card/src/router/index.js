import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home/home'
import join from '@/components/join/join'
import known from '@/components/known/known'
import books from '@/components/books/books'
import guide from '@/components/guide/guide'
import history from '@/components/history/history'
import recommend from '@/components/recommend/recommend'
import reserve from '@/components/reserve/reserve'
import search from '@/components/search/search'
import profile from '@/components/profile/profile'
import guideMore from '@/components/guide/guideMore'
import bookInfo from '@/components/recommend/bookInfo'
import authorInfo from '@/components/recommend/authorInfo'
import upUser from '@/components/profile/upUser'
import joined from '@/components/myjoin/myjoin'
import admin from '@/components/home/admin'
import bookAdmin from '@/components/books/bookAdmin'
import edit from '@/components/books/edit'
import add from '@/components/books/add'
import suggestion from '@/components/suggestion/suggestion'
import activate from '@/components/books/activate'
import returnBook from '@/components/books/returnBook'
import lost from '@/components/lost/lost'
import reply from '@/components/suggestion/reply'
import Avatar from '@/components/profile/changeAvatar'
import addpic from '@/components/books/addpic'


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login,
      meta: { showLeftBar: false,showTopBar:false,showBottomBar:false,showALeftBar:false,showAtop:false}
    },
    {
      path: '/home',
      component: home,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/join',
      component:join,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/known',
      component:known,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/books',
      component:books,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/guide',
      component:guide,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/history',
      component:history,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/recommend',
      component:recommend,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/reserve',
      component:reserve,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/search',
      component:search,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/profile',
      component:profile,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/guideMore',
      component:guideMore,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/bookInfo',
      component:bookInfo,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/authorInfo',
      component:authorInfo,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/upUser',
      component:upUser,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/joined',
      component:joined,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/admin',
      component:admin,
      meta: { showLeftBar: false,showTopBar:true,showBottomBar:true,showALeftBar:true,showAtop:true}
    },
    {
      path:'/bookAdmin',
      component:bookAdmin,
      meta: { showLeftBar: false,showTopBar:true,showBottomBar:true,showALeftBar:true,showAtop:true}
    },
    {
      path:'/edit',
      component:edit,
      meta: { showLeftBar: false,showTopBar:false,showBottomBar:true,showALeftBar:true,showAtop:true}
    },
    {
      path:'/add',
      component:add,
      meta: { showLeftBar: false,showTopBar:false,showBottomBar:true,showALeftBar:true,showAtop:true}
    },
        {
      path:'/suggestion',
      component:suggestion,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/activate',
      component:activate,
      meta: { showLeftBar: false,showTopBar:false,showBottomBar:true,showALeftBar:true,showAtop:true}
    },
    {
      path:'/returnBook',
      component:returnBook,
      meta: { showLeftBar: false,showTopBar:false,showBottomBar:true,showALeftBar:true,showAtop:true}
    },
       {
      path:'/lost',
      component:lost,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/reply',
      component:reply,
      meta: { showLeftBar: false,showTopBar:false,showBottomBar:true,showALeftBar:true,showAtop:true}
    },
    {
      path:'/avatar',
      component:Avatar,
      meta: { showLeftBar: true,showTopBar:true,showBottomBar:true,showALeftBar:false,showAtop:false}
    },
    {
      path:'/addpic',
      component:addpic,
      meta: { showLeftBar: false,showTopBar:false,showBottomBar:true,showALeftBar:true,showAtop:true}
    },
  ]
})
