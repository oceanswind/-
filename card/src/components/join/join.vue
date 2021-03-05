<template>
    <div class="box" >  
 <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1>报名活动</h1>
      </div>
       <el-button  @click="dialogFormVisible = true" class="but2" >报名</el-button>
      <div v-for="(item, index) in list" :key="index" class="textItem">
        <p class="">{{ item.name}}</p>
     <p>活动地点:{{item.place}}</p>
     <p> 时间:{{item.time}}</p>
     <el-popover class="but"  placement="right" width="200" trigger="hover" title="扫描二维码前往公众号报名">
  <img src="../../assets/img/erweima.jpg" alt="">
  <el-button slot="reference">扫码报名</el-button>
</el-popover>
 <!-- <el-button slot="reference" class="but2" >报名</el-button> -->


<el-dialog title="报名" :visible.sync="dialogFormVisible">
  <el-form :model="form"  :rules="rules"  >
    <el-form-item label="手机号码" style="width: 100%;" prop="phone">
      <el-input v-model="form.phone" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="姓名" style="width: 100%;">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="性别" style="width: 100%;">
      <el-select v-model="form.sex" placeholder="请选择性别">
        <el-option label="男" value="男"></el-option>
        <el-option label="女" value="女"></el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="活动名称" style="width: 100%;">
      <el-select v-model="form.huodong" placeholder="请选择想要参加的活动">
        <el-option label="迎国庆 晒家乡主题作品征集" value="迎国庆 晒家乡主题作品征集"></el-option>
        <el-option label="我和我的祖国”·国庆节快闪" value="我和我的祖国·国庆节快闪"></el-option>
        <el-option label="艺术鉴赏 现当代艺术漫谈" value="艺术鉴赏 现当代艺术漫谈"></el-option>
        <el-option label="大型山水画展" value="大型山水画展"></el-option>
        <el-option label="乐高创意启蒙" value="乐高创意启蒙"></el-option>
        <el-option label="法律学习 一起学习民法典" value="法律学习 一起学习民法典"></el-option>
        <el-option label="摄影学习 手机摄影系列之光线与色彩" value="摄影学习 手机摄影系列之光线与色彩"></el-option>
        <el-option label="面塑体验营 巧手庆国庆" value="面塑体验营 巧手庆国庆"></el-option>
        <el-option label="“乐趣童年”国庆71周年——祖国的成长" value="“乐趣童年”国庆71周年——祖国的成长"></el-option>
        <el-option label="国学文化 汉字第一课" value="国学文化 汉字第一课"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="enroll()">确 定</el-button>
  </div>
</el-dialog>
      </div>
    </el-card>
    </div>
</template>
<script>

export default {
    data(){
     var checkPhone = (rule, value, callback) => {
    const phoneReg = /^1[34578]\d{9}$$/
    if (!value) {
      return callback(new Error('电话号码不能为空'))
    }
    setTimeout(() => {
      // Number.isInteger是es6验证数字是否为整数的方法,实际输入的数字总是识别成字符串
      // 所以在前面加了一个+实现隐式转换
 
      if (!Number.isInteger(+value)) {
        callback(new Error('请输入数字值'))
      } else {
        if (phoneReg.test(value)) {
          callback()
        } else {
          callback(new Error('电话号码格式不正确'))
        }
      }
    }, 100)
  }
    return{
list:[],
  dialogFormVisible: false,
  
   form: {
          name: '',
          phone: '',
          sex: '',
          huodong: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
            rules: {
    phone: [
      { validator: checkPhone, trigger: 'blur' }
    ],
  }
    }
},
mounted(){
this.getInfo();
},
methods:{
async getInfo() {
      const { data: res } = await this.$http.get(
        `http://127.0.0.1:3001/api/join`
      );
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
      }
      console.log(res);
      this.list = res.message;
      console.log(this.list);
    },
    async enroll(){
      
this.dialogFormVisible = false;
let user_id=sessionStorage.getItem("id");
let phone=this.form.phone;
console.log(phone);
let name=this.form.name;
let sex=this.form.sex;
let h_name=this.form.huodong;

 const res = await this.$http.post(`http://localhost:3001/api/enroll`,
 {id:user_id,phone:phone,sex:sex,name:name,h_name:h_name})
      if(res.data.success_code==200){
          alert('您已成功报名详细信息请留意手机短信');
      }else{
          alert('失败')
      }
    }
},
}

</script>
<style scoped>
.but{
float: right;
padding: 8px 8px 8px 8px;
margin-top: -60px;
}
.box-card{
    width: 90%;
    height:100% ;
}
.textItem{
    border-bottom: 1px solid black;
    margin-bottom: 10px;
}
.box{
    margin-bottom: 200px;
}
.but2{
    float: right;
  margin-top: -100px;
}


</style>