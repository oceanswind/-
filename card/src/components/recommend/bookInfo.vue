<template>
  <div class="box">
    <div class="info" v-for="(item, index) in list" :key="index">
      <h1>{{ item.name }} 原作名:{{ item.text }}</h1>
      <h5>
        {{ item.author
        }}<el-button
          type="text"
          class="button"
          @click="goAuthor(item.author_id)"
          >更多详情</el-button
        >
      </h5>
      <img
        :src="item.pic"
        style="width: 400px; height: 500px; box-shadow: 5px 5px 5px #f0eaea"
      />

      <div class="desc">
        <span>参考价格:{{ item.price }}</span
        ><br />
        <span>ISBN:{{ item.ISBN }}</span
        ><br />
        <span>出版社:{{ item.press }}</span
        ><br />
        <span>出品方:{{ item.producer }}</span
        ><br />
        <span>出版时间:{{ item.press_time }}</span
        ><br />
        <span>译者:{{ item.translator }}</span
        ><br />
        <span>内容简介：</span><br />
        {{ item.desc }} <br />
        <span>作者简介:</span><br />
        {{ item.author_desc }}
      </div>
    </div>
    <el-button type="primary" class="borrow" @click="dialogFormVisible = true"
      >借阅</el-button
    >
    <div   @click="show1()" >
<el-dialog title="借阅" :visible.sync="dialogFormVisible" >
      <el-form :model="form">
        <el-form-item label="借书日期">
          <el-date-picker
            v-model="form.borrowdate"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="还书日期">
          <el-date-picker
            v-model="form.backdate"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="borrow()"   :disabled="flag" >确 定</el-button>
      </div>
    </el-dialog>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: {},
      dialogFormVisible: false,
      form: {
        borrowdate: "",
        backdate: "",
      },
      flag: true,
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      var id = this.$route.query.id;
      console.log(id);
      const {
        data: res,
      } = await this.$http.post(`http://localhost:3001/api/bookInfo`, { id });
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
      }
      //   console.log(res);
      this.list = res.message;
      console.log(this.list);
    },
    async goAuthor(id) {
      var index = id;
      this.$router.push(`/authorInfo?id=${id}`);
      console.log(id);
      const res = await this.$http.post(
        `http://localhost:3001/api/authorInfo`,
        { id: index }
      );
      // console.log(res)
    },
    getData() {
      const loading = this.$loading({
        lock: true, //lock的修改符--默认是false
        text: "加载中", //显示在加载图标下方的加载文案
        spinner: "el-icon-loading", //自定义加载图标类名
        background: "rgba(0, 0, 0, 0.7)", //遮罩层颜色
        target: document.querySelector("#el-main"), //loadin覆盖的dom元素节点
      });
      //成功回调函数停止加载
      loading.close();
    },
    async borrow() {
      var name = this.list[0].name;
      var bookid = this.list[0].id;
      var userid = sessionStorage.getItem("id");
      var account = sessionStorage.getItem("account");
      var borrowdate = this.form.borrowdate;
      var backdate = this.form.backdate;
      // console.log(name);
      // console.log(account);
      // console.log(bookid);
      // console.log(borrowdate);
      // console.log(backdate);
      const { data: res } = await this.$http.post(
        `http://localhost:3001/api/borrows`,
        {
          name: name,
          bookid: bookid,
          userid: userid,
          account: account,
          borrowdate: borrowdate,
          backdate: backdate,
        }
      );
      console.log(res);
      if (res.success_code !== 200) {
        return this.$message.error("获取失败！");
      }else{
          alert('借阅成功，请持读者卡于七个工作日之内来本馆取书')
      }
    },
      show1() {
      if (this.form.borrowdate != "" && this.form.backdate !=""  ) {
        this.flag = false;
      }
    },
     
  },
};
</script>
<style scoped>
.infoimg {
  width: 400px;
  height: 400px;
}
.info {
  width: 100%;
  height: 100%;
}
.box {
  margin-bottom: 100px;
}
.desc {
  padding-top: 0px;
  width: 800px;
  position: absolute;
  top: 200px;
  left: 680px;
}
.borrow {
  position: absolute;
  margin-top: 680px;
  margin-left: 200px;
}
</style>