<template>
<div  class="box" >
 <el-table :data="list" border stripe>
        <el-table-column type="index" width="80px"></el-table-column>
        <el-table-column
          label="id"
          prop="id"
          width="150px"
        ></el-table-column>
        <el-table-column
          label="密码"
          prop="pwd"
          width="240px"
        ></el-table-column>
        <el-table-column
          label="手机号"
          prop="phone"
          width="200px"
        ></el-table-column>
        <el-table-column label="操作" width="220px">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="activate(scope.row.id,scope.row.pwd,scope.row.phone)"
            >激活</el-button>
            <el-button type="primary" size="mini" @click="dialogVisible = true" >分配账号</el-button>
          </template>
        </el-table-column>
      </el-table>
                <el-dialog title="分配账号" :visible.sync="dialogVisible">
<el-input v-model="input" placeholder="输入账号"   ></el-input>
<div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>
<script scoped>
export default {
    data(){
        return{
            list:[],
             dialogVisible: false,
             input:''

        }
    },
created(){
this.getInfo();
},
methods:{
async getInfo(){
     const { data: res } = await this.$http.get(
        `http://127.0.0.1:3001/api/activate`
      );
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
      }
      console.log(res.message);
      this.list=res.message;
      console.log(this.list);
},
 async activate(id,pwd,phone){
  console.log(id);
  console.log(pwd);
  console.log(phone);
  // console.log(this.input);
  var account=this.input;
  console.log(account);
  const res = await this.$http.post(`http://localhost:3001/api/addUser`,{id:id,pwd:pwd,phone:phone,account:account})
  console.log(res);
    if(res.data.success_code==200){
          alert('激活成功');
      }else{
          alert('失败')
      }
}
}
}
</script>
<style scoped  >




</style>