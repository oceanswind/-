<template>

<div  class="box" >
     <el-card class="card">
    <el-button type="primary" class="btn" @click="dialogFormVisible = true"  >我要发布</el-button>
 <el-table :data="list" border stripe>
        <el-table-column type="index" width="80px"></el-table-column>
        <el-table-column
          label="物品名"
          prop="name"
          width="260px"
        ></el-table-column>
        <el-table-column
          label="详细情况"
          prop="des"
          width="240px"
        ></el-table-column>
        <el-table-column
          label="丢失地点"
          prop="location"
          width="200px"
        ></el-table-column>
        <el-table-column
          label="大概丢失时间"
          prop="time"
          width="200px"
        ></el-table-column>
        <el-table-column label="QQ" prop="qq" width="220px">
        </el-table-column>
      </el-table>
        </el-card>
        <el-dialog title="报名" :visible.sync="dialogFormVisible">
  <el-form :model="form"    >
    <el-form-item label="物品名" style="width: 100%;" prop="name">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="详细情况" style="width: 100%;">
      <el-input v-model="form.des" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="丢失地点" style="width: 100%;">
      <el-input v-model="form.location" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="大概丢失时间" style="width: 100%;">
      <el-input v-model="form.time" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="QQ" style="width: 100%;">
      <el-input v-model="form.qq" autocomplete="off"></el-input>
    </el-form-item>
   
  
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="enroll()">确 定</el-button>
  </div>
</el-dialog>
</div>



</template>

<script scoped>

export default {
    data(){
        return{
            list:[],
            dialogFormVisible: false,
             form: {
          name: '',
          des:'',
          location:'',
          time:'',
          qq:''
        },

        }
    },

created(){
 this.getLost();
},
methods:{
async getLost() {
      const { data: res } = await this.$http.get(
        `http://127.0.0.1:3001/api/lost`
      );
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
      }
      console.log(res);
      this.list = res.message;
      console.log(this.list);
    },
  async enroll(){
      let name=this.form.name;
      let des=this.form.des;
      let location=this.form.location;
      let time=this.form.time;
      let qq=this.form.qq;
       const res = await this.$http.post(`http://localhost:3001/api/addLost`,
 {name:name,des:des,location:location,time:time,qq:qq})
      if(res.data.success_code==200){
          alert('成功添加');
           this.getLost();
      }else{
          alert('失败')
      }


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
.btn {
  margin-bottom: 30px;
}

</style>