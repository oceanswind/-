<template>
    <div class="box" >
<el-form ref="form" :model="form" label-width="80px" :rules="rules"  >
  <el-form-item label="地址">
    <el-input v-model="form.address"></el-input>
  </el-form-item>
  <el-form-item label="性别">
    <el-select v-model="form.sex" placeholder="选择">
      <el-option label="男" value="男"></el-option>
      <el-option label="女" value="女"></el-option>
      <el-option label="保密" value="保密"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="邮箱" prop="email">
    <el-input v-model="form.email"  ></el-input>
  </el-form-item>
   <el-form-item label="电话" prop="phone" >
    <el-input v-model="form.phone"></el-input>
  </el-form-item>
   


  <el-form-item>
    <el-button type="primary" @click="update()">修改</el-button>
    <el-button>取消</el-button>
  </el-form-item>
  
</el-form>



    </div>
</template>
<script>

export default {
    data(){
         var checkEmail = (rule, value, callback) => {
    const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    if (!value) {
      return callback(new Error('邮箱不能为空'))
    }
    setTimeout(() => {
      if (mailReg.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的邮箱格式'))
      }
    }, 100)
  }
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
 form: {
         address:'',
         sex:'',
         phone:'',
         email:''
        },
        rules: {
    email: [
      { validator: checkEmail, trigger: 'blur' }
    ],
    phone: [
      { validator: checkPhone, trigger: 'blur' }
    ],
  }


    }
},
mounted(){

},
methods:{
async update() {
      var index = sessionStorage.getItem("id");
      var address=this.form.address;
      var sex=this.form.sex;
      var email=this.form.email;
      var phone=this.form.phone;
      console.log(index);
      const res = await this.$http.post(`http://localhost:3001/api/updateUser`,{id:index,address:address,sex:sex,email:email,phone:phone})
      console.log(res)
      this.list=res.data.message
      if(res.data.success_code==200){
          alert('修改成功');
      }else{
          alert('失败')
      }
    },
    upload() {
        const formData = new FormData();
        const file = this.$refs.upload.uploadFiles[0];
        const headerConfig = { headers: { 'Content-Type': 'multipart/form-data' } };
        if (!file) { // 若未选择文件
          alert('请选择文件');
          return;
        }
        formData.append('file', file.raw);
        formData.append('name', this.name);
        formData.append('age', this.age);
        this.$http.post('/api/upload', formData, headerConfig).then(res => {
          console.log(res);
        })
      }

},
}
</script>
<style scoped>
.box{
    margin-top: 100px;
}
.form1{
  width: 200px;
}
.btn{
  height: 60px;
}
</style>