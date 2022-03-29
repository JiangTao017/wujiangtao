<template>
  <div class="login">
    <div class="myform">
      <div class="title">
        <h3>seec3后台管理系统</h3>
      </div>
      <el-form :model="formdata" :rules="rules">
        <el-form-item prop="user">
          <el-input placeholder="用户名" v-model="formdata.user"></el-input></el-form-item>
        <el-form-item prop="pw">
          <el-input placeholder="密码" v-model="formdata.pw" type = "password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="submitfn">登录</el-button>
        </el-form-item>
      </el-form>
      <p class="footer">username:admin password:123456</p>
    </div>
  </div>
</template>
<script>
import instance from "../api/index.js"
export default {
  name: "Login",
        data(){
            // 自定义正则验证
            let userfn = function(rule, value, callback){
                console.log("user:", value);
                let rg = /^[a-z]\w{5,10}\w$/
                if(rg.test(value))return   //格式对 不处理
                return callback(new Error("用户格式不对"))
            }
            let pwfn = function(rule, value, callback){
                console.log("password:", value);
                let rg = /^\w{6,10}$/
                if(rg.test(value))return   //格式对 不处理
                return callback(new Error("用户格式不对"))
            }
            return {
                formdata:{
                    user: "admin",
                    pw: 123456
                },
                rules: {
                    user: [
                        {validator:userfn, trigger: "blur"}
                    ],
                    pw:[
                        {validator:pwfn, trigger: "blur"}
                    ]
                },
                newdebouncefn:null//用于接收防抖封装后的业务函数
            }
        },
        created(){
            this.newdebouncefn = this.debouncefn(this.loginfn, 500)
            // 就是防抖封装后的新的业务函数
        },
        methods:{
            submitfn(){
                // 点击提交业务
                this.newdebouncefn()
            },
            async loginfn(){
                //登录业务
                let user = this.formdata.user
                let pw = this.formdata.pw
                let {data} = await instance.post('/login', {user, pw})

                
                if(data.message === 'fail')return this.$message.error('登录失败')
                if(data.message === 'success'){
                    // 存token
                    localStorage.setItem("token", data.data.token)
                    this.$message({
                        type:"success",
                        message:"登录成功",
                        duration:2000,
                        onClose:()=>{
                            this.$router.push({name: "home"})
                        }
                    })
                }

            }
        }
};
</script>
<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: #324057;
}
.title {
  width: 330px;
  text-align: center;
  position: absolute;
  top: -70px;
}
.login .title h3 {
  color: #fff;
}

.myform {
  width: 370px;
  height: 260px;
  box-sizing: border-box;
  padding: 20px 20px 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -130px;
  margin-left: -185px;
}
.btn {
  width: 100%;
}
.footer {
  font-size: 12px;
  color: #fff;
  text-align: center;
}
</style>