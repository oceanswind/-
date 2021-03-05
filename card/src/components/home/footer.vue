<template>
    <div>
   <el-container>
 <el-footer>© 2020－2020 dream, all rights reserved lib
       <el-popover
  placement="right"
  width="200"
   trigger="hover"
    title="扫码关注我们的公众号"
   >
  <img src="../../assets/img/erweima.jpg" alt="">
  <el-button slot="reference"><i class="iconfont">&#xe614;</i></el-button>
</el-popover>
     <el-popover
  placement="right"
  width="200"
   trigger="hover"
    title="扫码关注我们的微博"
   >
  <img src="../../assets/img/weibo.jpg" alt="">
  <el-button slot="reference"><i class="iconfont">&#xe666;</i></el-button>
</el-popover>
   <el-popover
  placement="right"
  width="200"
   trigger="hover"
    title="遇到困难？"
    content="致电152233415646咨询"
   >

  <el-button slot="reference"><i class="iconfont">&#xe680;</i></el-button>
</el-popover>
      </el-footer>
   </el-container>

    </div>
</template>
<script>
export default {

}
</script>
<style scoped src="../../assets/css/home.css">