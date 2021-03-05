<template>

<div  class="box" >
 <el-form
      ref="form"
      :model="form"
      label-width="80px"
      
    >
      <el-form-item label="书名">
        <el-input v-model="form.name" ></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author" ></el-input>
      </el-form-item>
      <el-form-item label="出版社">
        <el-input v-model="form.press"></el-input>
      </el-form-item>
      <el-form-item label="出版时间">
        <el-input
          v-model="form.pressTime"
         
        ></el-input>
      </el-form-item>
      <el-form-item label="ISBN">
        <el-input v-model="form.ISBN"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="add()">添加图书</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
</div>



</template>

<script scoped>

export default {
    data(){
        return{
     form: {
        name: "",
        author: "",
        press: "",
        pressTime: "",
        ISBN: "",
        // resource: "",
        // desc: "",
      },

        }
    },

created(){
},
methods:{
    async add() {
      var name = this.form.name;
      var author = this.form.author;
      var press = this.form.press;
      var pressTime = this.form.pressTime;
      var ISBN = this.form.ISBN;
      console.log(name);
      const { data: res } = await this.$http.post(
        `http://localhost:3001/api/addBooks`,
        {
          name: name,
          author: author,
          press: press,
          pressTime: pressTime,
          ISBN: ISBN,
        }
      );
         console.log(res);
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
      }else{
          alert('成功添加')
      }

    },
}
}
</script>
<style scoped  >
.box {
  padding-top: 30px;
  margin-bottom: 500px;
}



</style>