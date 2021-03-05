<template>
  <div class="box">
    <el-table :data="list" class="table">
      <el-table-column prop="phone" label="电话号码" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column prop="h_name" label="活动名称"> </el-table-column>
    </el-table>
    <div  class="tip" >
 <h1>须知:</h1>
<span>请留意活动举办时间</span>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      var index = sessionStorage.getItem("id");
      const res = await this.$http.post(`http://localhost:3001/api/joined`,{id:index})
      console.log(res);
      
      if(res.data.success_code==200){
          this.list=res.data.message
      }else{
         
      }
    },
  },
};
</script>
<style scoped>
.box-card {
  width: 100%;
}
.box {
  margin-bottom: 400px;
}
.table{
    width: 70%;
    height: 80%;
    position: absolute;
    margin-top: 150px;
}
.tip{
    position: absolute;
}
</style>