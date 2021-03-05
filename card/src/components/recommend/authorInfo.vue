<template>
    <div class="box" >
<div class="info" v-for="(item, index) in list" :key="index"   >
<img :src="item.pic" alt="" style="width:450px;height:500px;box-shadow: 5px 5px 5px #f0eaea;">
<div  class="desc" >
<h1>{{item.name}}&nbsp;&nbsp;&nbsp;{{item.neenee}}</h1><br>
<span>出生日期：{{item.birthday}}</span><br>
<span>出生地:{{item.birthplace}}</span><br>
<span>简介:</span><br>
{{item.desc}}
</div>
</div>


    </div>
</template>
<script>

export default {
    data(){

    return{
        list:{},
    }

},

mounted(){
this.getInfo();
},
created(){
    this.getData();
},
methods:{
     async getInfo() {
   var id=  this.$route.query.id
     console.log(id);
      const { data: res } = await this.$http.post(
        `http://localhost:3001/api/authorInfo`,{id}
      );
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
      }
    //   console.log(res);
      this.list = res.message;
      console.log(this.list);
    },
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
<style scoped>
.desc{
    padding-top: 0px;
    width: 800px;
    position: absolute;
    top: 60px;
    left: 680px;
}
</style>