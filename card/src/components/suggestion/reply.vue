<template>

<div  class="box" >
    <p>
 <el-collapse v-for="(item, index) in list" :key="index"  >
  <el-collapse-item :title=item.title >
    <div>{{item.more}}</div>
    <div>提问人:{{item.name}}</div>
  </el-collapse-item>
</el-collapse>
    </p>

</div>
</template>
<script >
export default {
    data(){
        return{
            list:[],
             dialogFormVisible: false,
             form: {
          text: '',
        },

        }
    },

created(){
this.reply();
},
methods:{
async reply(){
    const { data: res } = await this.$http.get(
        `http://127.0.0.1:3001/api/reply`
      );
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
      }
      console.log(res.message);
      this.list=res.message;
      console.log(this.list);
},
 async replyuser(id){
     const text=this.form.text
     console.log(id);
        const res = await this.$http.post(`http://localhost:3001/api/replys`,{text:text})
      console.log(res)
    //   if(res.data.success_code==200){
    //       alert('提交成功');
    //   }else{
    //       alert('失败')
    //   }
 }


}
}
</script>

<style scoped  >




</style>