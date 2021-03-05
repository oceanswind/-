<template>
  <div class="box">
    <!-- <div v-for="(item, index) in list" :key="index" class="books">
    <img :src="item.pic" alt="" class="bookimg" />
      <div class="desc">
        {{ item.name }} <br />
        {{ item.author }}
      </div>
    </div> -->
      <el-col :span="8" >
    <el-card :body-style="{ padding: '0px' }" v-for="(item, index) in list" :key="index"  class="books"   >
      <img :src="item.pic" class="bookimg" :alt="item.name" />
      <div style="padding: 14px;">
        <span>书名：{{item.name}}</span><br>
        <span>作者：{{item.author}}</span><br>
         <span>出版社：{{item.press}}</span><br>
          <span>ISBN：{{item.ISBN}}</span>
      </div>
      <div class="bottom clearfix">
          <el-button type="text" class="button" @click="goinfo(item.id)" >更多详情</el-button>
        </div>
    </el-card>
  </el-col>
        <el-col :span="8" >
    <el-card :body-style="{ padding: '0px' }" v-for="(item, index) in list2" :key="index"  class="books"      >
      <img :src="item.pic" alt="" class="bookimg" />
      <div style="padding: 14px;">
        <span>书名：{{item.name}}</span><br>
        <span>作者：{{item.author}}</span><br>
         <span>出版社：{{item.press}}</span><br>
          <span>ISBN：{{item.ISBN}}</span>
      </div>
      <div class="bottom clearfix">
          <el-button type="text" class="button" @click="goinfo(item.id)" >更多详情</el-button>
        </div>
    </el-card>
  </el-col>
          <el-col :span="8" >
    <el-card :body-style="{ padding: '0px' }" v-for="(item, index) in list3" :key="index"  class="books"    >
      <img :src="item.pic" alt="" class="bookimg"   />
      <div style="padding: 14px;">
        <span>书名：{{item.name}}</span><br>
        <span>作者：{{item.author}}</span><br>
         <span>出版社：{{item.press}}</span><br>
          <span>ISBN：{{item.ISBN}}</span>
      </div>
      <div class="bottom clearfix">
          <el-button type="text" class="button" @click="goinfo(item.id)" >更多详情</el-button>
        </div>
    </el-card>
  </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      list2:[],
      list3:[],
    };
  },
  mounted() {
    this.getbooks();
  },
  methods: {
    async getbooks() {
      const { data: res } = await this.$http.get(
        `http://127.0.0.1:3001/api/books`
      );
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
      }
      // console.log(res);

      // console.log(this.list);
      for (var i = 0; i < 8; i++) {
        this.list.push(res.message[i]);
      }
       for (var i = 8; i < 16; i++) {
        this.list2.push(res.message[i]);
      }
       for (var i = 16; i < 24; i++) {
        this.list3.push(res.message[i]);
      }
      // console.log(this.list);
    },
      async goinfo(id){
      var index = id;
      this.$router.push(`/bookInfo?id=${id}`);
      console.log(id)
      const res = await this.$http.post(`http://localhost:3001/api/bookInfo`,{id:index})
      // console.log(res)
  },
  },
 
};
</script>
<style scoped>
.bookimg {
  height:320px ;
  width: 240px;
}
.books {
box-shadow: 5px 5px 5px #f0eaea;
width: 255px;
height: 480px;
margin-right: 30px;
flex-wrap: wrap;
display: flex;
margin-bottom: 10px;
padding-top: 10px;
padding-left: 10px;
cursor: pointer;
}
.box{
  margin-bottom: 200px;
}
.button{
  padding-left: 10px;
  margin-top: -20px;
}
</style>>

