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
          <el-menu-item index="1" @click="go('home')">
            <i class="iconfont">&#xe602;</i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-menu-item index="2" @click="go('history')">
            <i class="iconfont">&#xe605;</i>
            <span slot="title">我的借阅</span>
          </el-menu-item>
          <el-menu-item index="3" @click="go('reserve')">
            <i class="iconfont">&#xe624;</i>
            <span slot="title">预约</span>
          </el-menu-item>
          <el-menu-item index="4" @click="go('recommend')">
            <i class="iconfont">&#xe62b;</i>
            <span slot="title">推荐图书</span>
          </el-menu-item>
          <el-menu-item index="5" @click="go('books')">
            <i class="iconfont">&#xe62b;</i>
            <span slot="title">图书列表</span>
          </el-menu-item>
          <el-menu-item index="6" @click="go('search')">
            <i class="iconfont">&#xe616;</i>
            <span slot="title">查询书目</span>
          </el-menu-item>
          <el-menu-item index="7" @click="go('join')">
            <i class="iconfont">&#xe632;</i>
            <span slot="title">报名活动</span>
          </el-menu-item>
          <el-menu-item index="8" @click="go('guide')">
            <i class="iconfont">&#xe60d;</i>
            <span slot="title">服务指南</span>
          </el-menu-item>
          <el-menu-item index="9" @click="go('known')">
            <i class="iconfont">&#xe60c;</i>
            <span slot="title">入馆须知</span>
          </el-menu-item>
          <el-menu-item index="10" @click="go('profile')">
            <i class="iconfont">&#xe60e;</i>
            <span slot="title">个人信息</span>
          </el-menu-item>
           <el-menu-item index="11" @click="go('joined')">
            <i class="el-icon-trophy" style="color:white" ></i>
            <span slot="title">我的活动</span>
          </el-menu-item>
          <el-menu-item index="12" @click="go('suggestion')">
            <i class="el-icon-chat-line-round" style="color:white" ></i>
            <span slot="title">提议</span>
          </el-menu-item>
             <el-menu-item index="13" @click="go('lost')">
            <i class="el-icon-chat-line-round" style="color:white" ></i>
            <span slot="title">寻物启事</span>
          </el-menu-item>
          <el-menu-item index="14" @click="end()">
            <i class="iconfont">&#xe60e;</i>
            <span slot="title">退出</span>
          </el-menu-item>
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
      console.log(index);
      this.$router.push(path);
      //  this. activeIndex=index
    },
    end() {
      sessionStorage.clear();
      this.$router.push('/login');
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped src="../../assets/css/home.css">