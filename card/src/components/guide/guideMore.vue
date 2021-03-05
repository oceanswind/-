<template>
    <div class="box" > 
 <el-card class="box-card" v-for="(item, index) in list" :key="index">
      <div slot="header" class="clearfix">
        <span>{{item.question}}</span>
      </div>
      <div v-for="(item, index) in list" :key="index" class="text item">
          {{item.answer}}
      </div>
    </el-card>

    </div>
</template>
<script>
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
   var id=  this.$route.query.id
     console.log(id);
      const { data: res } = await this.$http.post(
        `http://localhost:3001/api/guideMore`,{id}
      );
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
      }
      console.log(res);
      this.list = res.message;
      console.log(this.list);
    },



  },
 
};
</script>
<style scoped>

</style>>
    
