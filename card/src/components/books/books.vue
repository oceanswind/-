<template>
    <div class="box" >
        <el-col :span="55" >
  <el-card :body-style="{ padding: '0px' }" v-for="(item, index) in list" :key="index"  class="books"   >
      <img :src="item.pic" class="bookimg" :alt="item.name" />
      <div style="padding: 14px;">
        <span>书名：{{item.name}}</span><br>
        <span>作者：{{item.author}}</span><br>
         <span>出版社：{{item.press}}</span><br>
          <span>ISBN：{{item.ISBN}}</span>
      </div>
      <div class="bottom clearfix">
          <el-button type="text" class="button" @click="goinfo(item.id)" >更多详情</el-button>
        </div>
    </el-card>
    </el-col>
            <el-col :span="55" >
  <el-card :body-style="{ padding: '0px' }" v-for="(item, index) in list1" :key="index"  class="books"   >
      <img :src="item.pic" class="bookimg" :alt="item.name" />
      <div style="padding: 14px;">
        <span>书名：{{item.name}}</span><br>
        <span>作者：{{item.author}}</span><br>
         <span>出版社：{{item.press}}</span><br>
          <span>ISBN：{{item.ISBN}}</span>
      </div>
      <div class="bottom clearfix">
          <el-button type="text" class="button" @click="goinfo(item.id)" >更多详情</el-button>
        </div>
    </el-card>
    </el-col>
            <el-col :span="55" >
  <el-card :body-style="{ padding: '0px' }" v-for="(item, index) in list2" :key="index"  class="books"   >
      <img :src="item.pic" class="bookimg" :alt="item.name" />
      <div style="padding: 14px;">
        <span>书名：{{item.name}}</span><br>
        <span>作者：{{item.author}}</span><br>
         <span>出版社：{{item.press}}</span><br>
          <span>ISBN：{{item.ISBN}}</span>
      </div>
      <div class="bottom clearfix">
          <el-button type="text" class="button" @click="goinfo(item.id)" >更多详情</el-button>
        </div>
    </el-card>
    </el-col>
            <el-col :span="55" >
  <el-card :body-style="{ padding: '0px' }" v-for="(item, index) in list3" :key="index"  class="books"   >
      <img :src="item.pic" class="bookimg" :alt="item.name" />
      <div style="padding: 14px;">
        <span>书名：{{item.name}}</span><br>
        <span>作者：{{item.author}}</span><br>
         <span>出版社：{{item.press}}</span><br>
          <span>ISBN：{{item.ISBN}}</span>
      </div>
      <div class="bottom clearfix">
          <el-button type="text" class="button" @click="goinfo(item.id)" >更多详情</el-button>
        </div>
    </el-card>
    </el-col>
    </div>
</template>
<script>

export default {
    data(){

    return{
        list:[],
        list1:[],
        list2:[],
        list3:[]
        
    }
},
mounted(){
this.getbooks();
},
methods:{
 async getbooks() {
     const { data: res } = await this.$http.get(
        `http://127.0.0.1:3001/api/books`
      );
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
      }
    //   console.log(res);
       for (var i = 0; i < 54; i++) {
        this.list.push(res.message[i]);
      }
       for (var i = 55; i < 110; i++) {
        this.list1.push(res.message[i]);
      }
       for (var i = 111; i <166; i++) {
        this.list2.push(res.message[i]);
      }
      for (var i = 166; i <220; i++) {
        this.list3.push(res.message[i]);
      }
    },
    async goinfo(id){
      var index = id;
      this.$router.push(`/bookInfo?id=${id}`);
      console.log(id)
      const res = await this.$http.post(`http://localhost:3001/api/bookInfo`,{id:index})
      // console.log(res)
  },
},
}
</script>
<style scoped>
.bookimg {
  height:320px ;
  width: 280px;
}
.box{
    margin-bottom: 200px;

}
.el-col{
    margin-right: 150px;
     animation: fade-in;
    animation-duration: 2s;/*时间*/  
    -webkit-animation:fade-in 2s;
}
.button{
  padding-left: 10px;
  margin-top: -20px;
}
@keyframes fade-in {  
    0% {opacity: 0;}/*初始状态 透明度为0*/  
    22% {opacity: 0.2;}/*过渡状态 透明度为0*/  
    42% {opacity: 0.4;}/*过渡状态 透明度为0*/ 
    100% {opacity: 1;}/*结束状态 透明度为1*/  
}  

</style>