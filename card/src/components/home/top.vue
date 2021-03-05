<template>
  <div>
    <el-container>
      <el-header class="head">
        <span>读者之家</span>
        <img src="../../assets/img/logo.png" alt="图片" class="logo" />
       <span class="span" >{{message}}</span>
       
      </el-header>
    </el-container>
  </div>
</template>
<script>
export default {
  inject: ['reload'],
  data() {
    return {
      message: "",
      list:[],
    };
  },
  mounted() {

    this.welcome();
    
  },
  created(){
 
  },
Destroy(){
sessionStorage.clear()
},
  methods: {
    welcome() {
      var flag = sessionStorage.getItem("flag");
      var name = sessionStorage.getItem("name");
      // console.log(name);
      // console.log(flag);
      if ((flag == 0)) {
        this.message = "欢迎您的使用";
        //  this.$message(this.message)
      }
      if((flag==1)){

  this.$message("欢迎管理员"+name)
      }
    },
  },
};
</script>
<style scoped src="../../assets/css/home.css">