<template>
    <div class="box" > 
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>个人资料</span>
     <el-button   @click="update()" >修改资料</el-button>
  </div>
  <div v-for="(item, index) in list" :key="index" class="text item">
     <span>您的读者账号:{{item.account}}</span><br>
     <span>您的姓名:{{item.name}}</span><br>
     <span>您的地址:{{item.address}}</span><br>
     <span>您的邮箱:{{item.email}}</span><br>
     <span>您的电话:{{item.phone}}</span><br>
     <span>性别:{{item.sex}}</span>
     <p>头像 <img :src="item.avatar" alt=""  class="img1" ></p> 
     <el-button type="primary" @click="go" >修改/上传头像</el-button>
  </div>
</el-card>
    </div>
</template>
<script>

export default {
    data(){
    return{
    list:{},
    };
},
  mounted() {
    this.getlogin();
  },
  methods: {
      async getlogin() {
      var index = sessionStorage.getItem("id");
      console.log(index);
      const res = await this.$http.post(`http://localhost:3001/api/profile`,{id:index})
      console.log(res)
      this.list=res.data.message
    },
  update(id){
     this.$router.push('/upUser')
  },
  go(){
this.$router.push('/avatar')
  }

  }

}
</script>
<style scoped>
  .box-card{
  width: 100%;
  height: 100%;
  
}
.img1{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>