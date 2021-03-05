<template>
  <div class="box">
    <!-- 卡片视图 -->
    <el-card class="card">
      <!-- 表格数据 -->
      <el-button type="primary" size="mini" @click="goAddPage()" class="btn"
        >添加图书</el-button
      >
      <el-table :data="list" border stripe>
        <el-table-column type="index" width="80px"></el-table-column>
        <el-table-column
          label="书名"
          prop="name"
          width="260px"
        ></el-table-column>
        <el-table-column
          label="作者"
          prop="author"
          width="240px"
        ></el-table-column>
        <el-table-column
          label="出版社"
          prop="press"
          width="200px"
        ></el-table-column>
        <el-table-column
          label="出版时间"
          prop="press_time"
          width="200px"
        ></el-table-column>
        <el-table-column label="ISBN" prop="ISBN" width="220px">
        </el-table-column>
        <el-table-column label="操作" width="320px">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="show(scope.row.id)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="removeById(scope.row.id)"
            ></el-button>
             <el-button
              type="primary"
              
              size="mini"
              @click="addpic(scope.row.id)"
            >修改图片</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
    inject: ['reload'],
  data() {
    return {
      list: [],
      bookinfo: [],
      dialogFormVisible: false,
      formLabelWidth: "",
    };
  },
  mounted() {
    this.getbooks();
  },
  methods: {
    async getbooks() {
      const { data: res } = await this.$http.get(
        `http://127.0.0.1:3001/api/adminBook`
      );
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
      }
      // console.log(res);
      this.list = res.message;
      // console.log(this.list);
      this.total = this.list.length;
    },
    show(id) {
      this.$router.push(`/edit?id=${id}`);
    },
    goAddPage(id) {
      this.$router.push(`/add`);
    },
    addpic(id) {
      this.$router.push(`/addpic?id=${id}`);
    },
    async removeById(id) {
      var index = id;
      console.log(index);
      const res = await this.$http.post(`http://localhost:3001/api/delete`, {
        id: index,
      });
      if (res.data.success_code !== 200) {
        return this.$message.error("删除失败！");
      }else{
        alert('删除成功')
         this.getbooks();
      }
      console.log(res);
    },
  },
};
</script>
<style scoped>
.card {
  width: 90%;
}
.btn {
  margin-bottom: 30px;
}
.box {
  margin-bottom: 100px;
}
</style>