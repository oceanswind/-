<template>
<div  class="box" >
<h1>有什么问题提议，欢迎反馈</h1>
<el-form ref="form" :model="form" label-width="120px"  class="form"  >
  <el-form-item label="标题">
    <el-input v-model="form.title"></el-input>
  </el-form-item>
    <el-form-item label="姓名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
<el-input
  type="textarea"
  :rows="8"
  placeholder="请输入内容"
  v-model="form.textarea">
</el-input>
  <el-form-item  class="btn" >
    <el-button type="primary" @click="enter()">提交</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script scoped>
export default {
    data(){
        return{
 form: {
         title:'',
         textarea:'',
         name:'',
        },
        }
    },

created(){
},
methods:{
async enter() {
      var title=this.form.title;
      var name=this.form.name;
      var textarea=this.form.textarea;
      const res = await this.$http.post(`http://localhost:3001/api/suggestion`,{title:title,name:name,textarea:textarea})
      console.log(res)
      if(res.data.success_code==200){
          alert('提交成功');
      }else{
          alert('失败')
      }
    },
}
}
</script>
<style scoped  >
.box-card{
    width: 600px;
    margin-top: 15px;
    margin-left: 200px;
}
.box{
    margin-top: 45px;
}
.btn{
    margin-top: 10px;
}
.form{
    margin-top: 100px;
    margin-left: -340px;
}


</style>