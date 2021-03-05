<template>
 <div class="box" > 
  <div class="ava">
    <div class="ava_title">封面上传修改</div>
    <div class="ava_upload">
      <el-upload class="avatar-uploader" action="#" :http-request="httpRequest" :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
   
  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    created() {
      // this.imageUrl = this.userInfo.avatar
    },
    methods: {
      handleAvatarSuccess(res, file) {
        // console.log(file);
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        // console.log(file);
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 或 PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      // 自定义上传文件
      async httpRequest(data) {
        let fd = new FormData()
        var id = this.$route.query.id;
        fd.append('userAvatar', data.file)
        // fd.append('id', this.userInfo.customer_id)
         fd.append('id', id)
        let {
          data: res
        } = await this.$http.post("http://localhost:3001/addbookpic", fd,)
        console.log(res);
            
          
    
      }
    }
  }

</script>
<style scoped>
  .ava {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 30px;
    margin-left: 80px;
  }

  .ava_title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .ava_upload {
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .avatar-uploader .el-upload {
    border: 1px solid black;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }



  .avatar-uploader-icon {
    font-size: 28px;
    color: #020202;
    width: 278px;
    height: 278px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 278px;
    height: 278px;
    display: block;
    border-radius: 50%;
    border: 3px solid rgb(230, 226, 219);
  }

</style>
