<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 登录表单 -->
      <div>
        <form action="http://127.0.0.1:3001/login">
          <el-form
            ref="loginFormRef"
            :model="loginForm"
            :rules="loginFormRules"
            label-width="60px"
            class="login_form"
          >
            <img src="../assets/img/logo.png" alt="" class="logo" />
            <el-form-item label="账号">
              <el-input
                v-model="loginForm.username"
                prefix-icon="iconfont icon-user"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input
                v-model="loginForm.password"
                type="password"
                prefix-icon="iconfont icon-3702mima"
              ></el-input>
              <span class="warning">{{ message }}</span>
            </el-form-item>
            <el-form-item class="btns">
              <el-button type="primary" @click="login()">登录</el-button>
              <el-button type="primary" @click="dialogFormVisible = true"
                >注册</el-button
              >
                <el-button type="primary" @click="Admin()">管理员登录</el-button>
              <div @click="show1">
                <el-dialog
                  title="注册"
                  :visible.sync="dialogFormVisible"
                  class="form"
                >
                  <el-form :model="form" :rules="rules" >
                    <el-form-item
                      label="手机号"
                      :label-width="formLabelWidth"
                      prop="phone"
                      class="el-form-item1"
                    >
                      <el-input
                        v-model="form.phone"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="密码"
                      :label-width="formLabelWidth"
                      class="el-form-item1"
                    >
                      <el-input
                        v-model="form.pwd"
                        autocomplete="off"
                        show-password
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="邮箱"
                      :label-width="formLabelWidth"
                      prop="email"
                      class="el-form-item1"
                    >
                      <el-input
                        v-model="form.email"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false"
                      >取 消</el-button
                    >
                    <el-button
                      type="primary"
                      @click="register()"
                      :disabled="flag"
                      >提交</el-button
                    >
                  </div>
                </el-dialog>
              </div>
            </el-form-item>
          </el-form>
        </form>
      </div>
      <!-- <div   v-for="(item,index) in list" :key="index" >
        <p>{{item.id}}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    var checkPhone = (rule, value, callback) => {
      const phoneReg = /^1[34578]\d{9}$$/;
      if (!value) {
        return callback(new Error("电话号码不能为空"));
      }
      setTimeout(() => {
        // Number.isInteger是es6验证数字是否为整数的方法,实际输入的数字总是识别成字符串
        // 所以在前面加了一个+实现隐式转换

        if (!Number.isInteger(+value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (phoneReg.test(value)) {
            callback();
          } else {
            callback(new Error("电话号码格式不正确"));
          }
        }
      }, 100);
    };
    var checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的邮箱格式"));
        }
      }, 100);
    };

    return {
      dialogFormVisible: false,
      list: [],
      id: [],
      pwd: [],
      message: "",
      formLabelWidth: "",
      flag: true,
      loginForm: {
        username: "",
        password: "",
      },
      form: {
        pwd: "",
        phone: "",
        email: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },

      // 表单验证
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
      rules: {
        phone: [{ validator: checkPhone, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.getlogin();
  },
  methods: {
    async getlogin() {
      const { data: res } = await this.$http.get(
        `http://127.0.0.1:3001/api/user`
      );
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
        // console.log(111)
      }
      // console.log(res);
      this.list = res.message;
      console.log(this.list);
      // console.log(this.list.length);

      for (var i = 0; i < this.list.length; i++) {
        this.id.push(this.list[i].account);
        // console.log(this.id);
        this.pwd.push(this.list[i].pwd);
        // console.log(this.pwd);
      }
    },
    login() {
      var id = this.loginForm.username;
      var pwd = this.loginForm.password;
      // console.log(id);
      // console.log(pwd);
      for (var i = 0; i < this.list.length; i++) {
        if ((id == this.id[i]) & (pwd == this.pwd[i])) {
          var index = this.list[i].id;
          var flag = this.list[i].admin;
          var name = this.list[i].name;
          var account=this.list[i].account;
          console.log(index);
          alert("登录成功");
          sessionStorage.setItem("id", index);
          sessionStorage.setItem("flag", flag);
          sessionStorage.setItem("name", name);
            sessionStorage.setItem("account", account);
          this.$router.push(`/home`);
          this.reload();
          return;
        } else {
          this.message = "账户或者密码错误";
        }
        //  if(id!=this.id[i] || pwd!=this.pwd[i]){
        //   this.$message('账户或者密码错误')
        //  }
      }
    },
    Admin(){
      var id = this.loginForm.username;
      var pwd = this.loginForm.password;
      // console.log(id);
      // console.log(pwd);
      for (var i = 0; i < this.list.length; i++) {
        if ((id == this.id[i]) && (pwd == this.pwd[i])  ) {
          var index = this.list[i].id;
          var flag = this.list[i].admin;
          var name = this.list[i].name;
          console.log(index);
          sessionStorage.setItem("id", index);
          sessionStorage.setItem("flag", flag);
          sessionStorage.setItem("name", name);
          if(flag==1){
 this.$router.push(`/admin`);
          }else{
            alert('你不是管理员')
          }
         
          this.reload();
          return;
        } else {
          this.message = "账户或者密码错误";
        }
        //  if(id!=this.id[i] || pwd!=this.pwd[i]){
        //   this.$message('账户或者密码错误')
        //  }
      }
    },
    async register() {
      this.dialogFormVisible = false;
      let phone = this.form.phone;
      let pwd = this.form.pwd;
      let email = this.form.email;
      const res = await this.$http.post(`http://localhost:3001/api/register`, {
        phone: phone,
        pwd: pwd,
        email: email,
      });
      if (res.data.success_code == 200) {
        alert("您已成功注册，请持身份证于30个工作日内前往本馆激活读者账号");
      } else {
        alert("失败");
      }
    },
    show1() {
      console.log(111);
      if (this.form.email != "" && this.form.phone !="" && this.form.pwd!="" ) {
        this.flag = false;
      }
    },
  },
};
</script>

<style  scoped>
.login_container {
  background-image: url("../assets/img/login_bg.jpg");
  height: 100%;
}
.login_box {
  width: 450px;
  height: 360px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  background-color: #fff;
}
.avatar_box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}

.login_form {
  position: absolute;
  bottom: 60px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: center;
}
.info {
  font-size: 13px;
  margin: 10px 15px;
}
.logo {
  width: 65px;
  height: 60px;
  padding-left: 160px;
  margin-bottom: 20px;
}
.warning {
  position: absolute;
  left: 100px;
  top: 120px;
}
.form {
  position: absolute;
  top: -380px;
  width: 800px;
  left: -800px;
  height: 600px;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.el-form-item1 {
  margin-top: 30px;
}
</style>