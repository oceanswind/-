<template>
    <div class="box" >
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>图书馆预约系统</span>
  </div>
  <div v-for="(item, index) in list" :key="index" class="text-item">
    <el-tag>总座位:{{item.total}}</el-tag>
    <el-tag>当前可用:{{item.now}}</el-tag>
    <el-tag>已使用:{{item.used}}</el-tag>
    <el-button type="primary"  @click="reserve()" >预约</el-button>
  </div>
  <div>
      1. 网上预约的座位可通过微信、APP、网页等方式预约。 微信预约：关注公众号，点击我--座位预约，首次使用前需绑定本人账号后即可预约。<br>
      2. 开放预约时间：01:00到22:00可预约当日座位，22:45-23:50可预约次日座位。<br>
      3. 系统目前支持快速预约；预约到期保留30分钟，需在规定时间内刷卡入馆签到，在规定时间内未到馆签到，且未取消预约将记违约一次。<br>
      4. 读者离开座位不再使用时，须点击结束使用释放座位，否则视为违约。<br>
      5. 为避免恶意占座，系统对出馆后又立即进馆(刷卡间隔小于四十五秒)的读者不再签到。
  </div>
</el-card>

    </div>
</template>
<script>

export default {
    inject: ["reload"],
    data(){

    return{
        list:{},
    }
},
mounted(){
this.getSet();
},
methods:{
async getSet() {
      const { data: res } = await this.$http.get(
        `http://127.0.0.1:3001/api/set`
      );
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
      }
      console.log(res);
      this.list = res.message;
      console.log(this.list);
    },
    async reserve() {
    var index = parseInt(sessionStorage.getItem("id"));
   console.log(index);
      var NewNow=this.list[0].now-1
      var NewUsed=this.list[0].used+1
      const res = await this.$http.post(`http://localhost:3001/api/reserve`,{id:index,now:NewNow,used:NewUsed})
      console.log(res)
      this.list=res.data.message
      if(res.data.success_code==200){
          alert('预约成功,请留意手机短信');
      }else{
          alert('失败')
      }
      this.reload();
    },
},
}
</script>
<style scoped>
.box-card{
    width: 100%;
    height: 100%;
}
.el-tag{
    margin-right: 80px;
    width: 120px;
    text-align: center;
}
.text-item{
    margin-bottom: 20px;
}
</style>
