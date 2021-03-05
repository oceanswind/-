<template>
  <div id="app">
    <top v-show="$route.meta.showTopBar"  ></top>
    <left   v-show="$route.meta.showLeftBar" ></left>
    <foot  v-show="$route.meta.showBottomBar" ></foot>
    <admin   v-show="$route.meta.showALeftBar" ></admin>
    <admintop   v-show="$route.meta.showAtop" ></admintop>
    <router-view  v-if="isRouterAlive" />
  </div>
</template>

<script>
import top from './components/home/top'
import left from './components/home/left'
import foot from './components/home/footer'
import admin from './components/home/adminLeft'
import admintop from './components/home/admintop'
export default {
  name: 'App',
   provide (){
     return {
       reload:this.reload
     }
  },
    data(){
    return {
       isRouterAlive:true
    }
  },
  methods:{
    reload (){
       this.isRouterAlive = false
       this.$nextTick(function(){
          this.isRouterAlive = true
       })
    }
  },
  components:{top,left,foot,admin,admintop}
}


</script>

<style>

</style>
