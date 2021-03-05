<template>
  <div class="box">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>常见问题</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text"
          >更多</el-button -->
        >
      </div>
      <div v-for="(item, index) in list" :key="index" class="text item">
        <p class="question" @click="more(item.id)">{{ item.question }}>></p>
      </div>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list: {},
    };
  },
  mounted() {
    this.getguide();
  },
  methods: {
    async getguide() {
      const { data: res } = await this.$http.get(
        `http://127.0.0.1:3001/api/guide`
      );
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
      }
      console.log(res);
      this.list = res.message;
      console.log(this.list);
    },
     async more(id) {
      var index = id;
      this.$router.push(`/guideMore?id=${id}`);
      console.log(id)
      const res = await this.$http.post(`http://localhost:3001/api/guideMore`,{id:index})
      console.log(res)
    //   axios
    //     .post("http://localhost:3001/api/guideMore", {
    //       id: index,
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    },
  },
};
</script>
<style scoped>
.question {
  cursor: pointer;
}
.box-card{
  width: 100%;
  height: 100%;
}
</style>