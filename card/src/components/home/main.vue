<template>

<div  class="box" >
<el-container>
  <el-main   >
  </el-main>
</el-container>
</div>



</template>

<script scoped>

export default {
    data(){
        return{
    loading: true

        }
    },

created(){
    this.getData();
},
methods:{
getData(){
    const loading = this.$loading({
            lock: true,//lock的修改符--默认是false
            text: '加载中',//显示在加载图标下方的加载文案
            spinner: 'el-icon-loading',//自定义加载图标类名
            background: 'rgba(0, 0, 0, 0.7)',//遮罩层颜色
            target: document.querySelector('#el-main')//loadin覆盖的dom元素节点
    });
    //成功回调函数停止加载
    loading.close()
}
}
}
</script>
<style scoped  >


  .box{
      width: 100%;
      height: 100%;
      display: flex;
      position: absolute;
      left: 180px;
      top: 50px;
  }


</style>