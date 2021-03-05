<template>
    <div class="box" >
<div  class="search"    @keyup.enter="search" >
 <el-input placeholder="书名、作者" v-model="input"  >
    <i slot="prefix" class="el-input__icon el-icon-search" @click="search" ></i>
  </el-input>
  <el-card class="box-card" v-if="flag"  >
  <div slot="header" class="clearfix">
    <span>结果</span>
  </div>
  <div  v-for="(item, index) in list" :key="index" class="point" >
      <span @click="gobookinfo(item.id)" >书名:{{item.name}}</span><br>
      <span>作者:{{item.author}}</span><br>
  </div>
</el-card>
</div>
    </div>
</template>
<script>

export default {
    data(){

    return{
input:'',
list:{},
flag:true
    }
},
created(){
this.search();
},
methods: {
    async search(){
    var key = this.input;
    var key1 = this.input;
   console.log(key);
      const res = await this.$http.post(`http://localhost:3001/api/search`,{key:key,key1:key1})
      if(res.data.success_code==200){
          this.list=res.data.message
          console.log(this.list);
          this.flag = !this.flag
        
      }else{
          alert('error搜索出错，请输入正确的书名，作者名')
      }
    },
   async gobookinfo(id){
        var index = id;
      this.$router.push(`/bookInfo?id=${id}`);
      console.log(id)
      const res = await this.$http.post(`http://localhost:3001/api/bookInfo`,{id:index})
    }
    }
}

</script>
<style scoped>
    .search{
        padding-top: 30px;
        width: 600px;
        margin: 0 auto;;
    }
    .box-card{
        margin-top: 20px;
         animation: fade-in;
    animation-duration: 2s;/*时间*/  
    -webkit-animation:fade-in 2s;
    }
    .box{
        margin-bottom: 300px;

    }
    .point{
        cursor: pointer;
        border-bottom: 1px solid black;
        margin-bottom: 10px;
       
    }
    @keyframes fade-in {  
    0% {opacity: 0;}/*初始状态 透明度为0*/  
    40% {opacity: 0.4;}/*过渡状态 透明度为0*/  
    100% {opacity: 1;}/*结束状态 透明度为1*/  
}  
</style>