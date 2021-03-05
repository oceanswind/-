<template>
  <div class="box" >
  <el-carousel height="480px">
      <el-carousel-item  v-for="(item,index) in Img" :key="index" >
       <img :src="item.src" :title="item.alt" class="img"  @click="join()" >
      </el-carousel-item>
    </el-carousel>
    <div  class="tip" >
      <h2>须知</h2>
1.图书馆提供读者个性化的服务空间，请输入读者证号和密码进入系统。<br>
2.如果读者忘记密码,且已经提供过E-mail地址，点击这里 取回密码 取回的密码将发到您的邮箱。<br>
3.初始密码为读者出生年月日的后六位，如1982年10月1日出生读者的密码是821001。<br>
4.市民卡开通读者证功能的读者，证号为身份证号。<br>
5.读者证如过期，只需凭证号和密码登录即可验证延期，如个人信息中单位、住址、出生日期、手机等信息不全，请补充完整才可验证通过。<br>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: null,
      isCollapse: false,
      activePath: "",
      Img:[{
        src: require('../../assets/img/1.jpg'),
        alt:"点击了解",
      },
      {
        src: require('../../assets/img/shuji.jpg'),
        alt:"英文读物推荐",
      },
      {
         src: require('../../assets/img/hd2.jpg'),
         alt:"画中欣赏大好河山",
      }
      ]
    };
  },
 created(){

  },
  methods:{
    join(){
       this.$router.push('join')
    }
  }
};
</script>
<style scoped src="../../assets/css/home.css">
