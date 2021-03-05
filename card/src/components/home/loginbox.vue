<template>
<div class="lbox" v-if="show" >
<div  class="login_box" >
请先登录
 <el-button type="primary" @click="login()">跳转到登录界面</el-button>
</div>
</div>
</template>
<script>
export default {
    data() {
        return {
            show:true
        }
    },
    mounted(){

    },
    methods:{
login(){
    this.$router.push(`/login`)
},
warning(){
var flag=sessionStorage.getItem('flag');
if (flag==1 || flag==0){
this.show=!this.show
}
}
    },
}
</script>
<style scoped>
    .lbox{
      position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    z-index: 999;
    
    }
 .login_box {
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 999;
}
</style>