<template>
    <div class="box" >

 <el-col :span="8">
<el-card class="box-card" shadow="always" >
      <div slot="header" class="clearfix">
    <h1>借阅记录</h1>
  </div>
  <div  class="text item" v-for="(item, index) in list" :key="index" >
      <div class="border" >
    <p>书名:{{item.book_name}}</p>
    <p>借书日期{{item.borrow_date | formatDate }}  </p>
    <p>还书日期:{{item.back_date  | formatDate }} <el-button type="text"  class="btn" @click="keep(item.back_date,item.user_id,item.book_id )" >续借60天</el-button>  <el-button type="text"  class="btn" @click="keep1(item.back_date,item.user_id,item.book_id )" >续借30天</el-button> </p>
      </div>
  </div>
</el-card>
 </el-col>



    </div>
</template>
<script>
import dateFormat from '../../assets/filters'
export default {
    data(){

    return{
        list:[],
    }
},
mounted(){
this.borrow();
},
methods:{
async borrow() {
    var index = sessionStorage.getItem("id");
    // console.log(index);
       const res = await this.$http.post(`http://localhost:3001/api/borrow`,{id:index})
    //   console.log(res)
      this.list=res.data.message
    },
   async keep(back_date,user_id,book_id){
    console.log(user_id);
    console.log(book_id);
     var backdate=back_date
      alert('成功续借60天')
      var date1=new Date(backdate);
      var newdate= new Date(date1 - 1 + 1 + 60*24*60*60*1000);
      const res = await this.$http.post(`http://localhost:3001/api/keep`,{user_id:user_id,book_id:book_id,newdate:newdate})
      console.log(newdate);
      this.borrow();

    },
    async keep1(back_date,user_id,book_id){
    console.log(user_id);
    console.log(book_id);
     var backdate=back_date
      alert('成功续借30天')
      var date2=new Date(backdate);
      var newdate= new Date(date2 - 1 + 1 + 30*24*60*60*1000);
      const res = await this.$http.post(`http://localhost:3001/api/keep`,{user_id:user_id,book_id:book_id,newdate:newdate})
      console.log(newdate);
      this.borrow();

    }

},
filters: {
         formatDate(time) {
             let date = new Date(time);
             return dateFormat.formatDate(date, "yyyy.MM.dd");
         }
     },
}
</script>
<style scoped>
.box-card{
    width: 600px;
    margin-bottom: 100px;
}
.border{
    border-bottom: 1px solid black;
}
.btn{
margin-left: 40px;
}
</style>