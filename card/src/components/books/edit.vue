<template>
  <div class="box">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      v-for="(item, index) in list"
      :key="index"
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
          :placeholder="item.press_time"
        ></el-input>
      </el-form-item>
      <el-form-item label="ISBN">
        <el-input v-model="form.ISBN"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="edit()">修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      list: [],
      delivery: false,
      form: {
        name: "",
        author: "",
        press: "",
        pressTime: "",
        ISBN: "",
        // resource: "",
        // desc: "",
      },
    };
  },

  created() {
    this.getInfo();
  },
  methods: {
    async edit() {
      var id = this.$route.query.id;
      var name = this.form.name;
      var author = this.form.author;
      var press = this.form.press;
      var pressTime = this.form.pressTime;
      var ISBN = this.form.ISBN;
      console.log(name);
      const { data: res } = await this.$http.post(
        `http://localhost:3001/api/editBook`,
        {
          id: id,
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
        alert('成功修改 信息')
      }

      this.bookinfo = res.message;
      console.log(this.bookinfo);
    },
    async getInfo() {
      var id = this.$route.query.id;
      console.log(id);
      const {
        data: res,
      } = await this.$http.post(`http://localhost:3001/api/bookInfo`, { id });
      if (res.success_code !== 200) {
        return this.$message.error("失败！");
      }
      console.log(res);
      this.list = res.message;
      this.form.name = res.message[0].name;
      this.form.author = res.message[0].author;
      this.form.press = res.message[0].press;
      this.form.pressTime = res.message[0].press_time;
      this.form.ISBN = res.message[0].ISBN;
      console.log(this.form);
    },
  },
};
</script>
<style scoped  >
.box {
  padding-top: 30px;
  margin-bottom: 500px;
}
</style>