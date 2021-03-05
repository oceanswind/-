<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="menu"
          text-color="#fff"
          active-text-color="#ffd04b"
          background-color="#4c5d70"
          unique-opened
          :router="true"
        >
          <el-menu-item index="1" @click="end()">
            <i class="iconfont">&#xe60e;</i>
            <span slot="title">退出</span>
          </el-menu-item>
           <el-menu-item index="2" @click="go('bookAdmin')">
            <i class="iconfont">&#xe62b;</i>
            <span slot="title">图书管理</span>
          </el-menu-item>
          <el-menu-item index="3" @click="go('reply')">
            <i class="el-icon-chat-line-round" style="color:white" ></i>
            <span slot="title">读者建议</span>
          </el-menu-item>
          <el-menu-item index="4" @click="go('activate')">
            <i class="el-icon-star-off" style="color:white" ></i>
            <span slot="title">激活读者账号</span>
          </el-menu-item>
           <!-- <el-menu-item index="5" @click="go('returnBook')">
            <i class="el-icon-sunny" style="color:white" ></i>
            <span slot="title">归还图书</span>
          </el-menu-item> -->
        </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index:0
    };
  },
  methods: {
    go(path, index) {
      // console.log(index);
      this.$router.push(path);
      //  this. activeIndex=index
    },
    end() {
      sessionStorage.clear();
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped src="../../assets/css/home.css">