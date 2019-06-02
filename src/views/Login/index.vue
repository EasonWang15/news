<template>
  <div class="form-com form-log" v-if="isLog">
    <h1>欢迎登录</h1>
    <div class="form-row">
      <label class="form-label">登录名</label>
      <input class="form-inp" v-model="logName" type="text" name="">
    </div>
    <div class="form-row">
      <label class="form-label">密码</label>
      <input class="form-inp" v-model="logPsw" type="password" name="">
    </div>
    <div class="form-btns">
      <button class="btn btn-green" @click="login">登录</button>
      <button class="btn btn-default" @click="goReg">注册</button>
    </div>
  </div>
  <div class="form-com form-reg" v-else>
    <h1>请输入以下信息</h1>
    <div class="form-row">
      <label class="form-label">登录名</label>
      <input class="form-inp" v-model="regName" type="text">
    </div>
    <div class="form-row">
      <label class="form-label">密码</label>
      <input class="form-inp" v-model="regPsw" type="password">
    </div>
    <div class="form-row">
      <label class="form-label">确认密码</label>
      <input class="form-inp" v-model="repeatPsw" type="password">
    </div>
    <div class="form-btns">
      <button class="btn btn-green" @click="submit">确定</button>
      <button class="btn btn-default" @click="cancel">取消</button>
    </div>
  </div>
</template>

<script>
	import "./style.scss"
	
	export default {
		name: "Login",
		data() {
	      return {
	        isLog: true,
	        regName: "",
	        regPsw: "",
	        repeatPsw: "",
	        logName: "",
	        logPsw: ""
	      }
	    },
	    methods: {
	      goReg() {
	        this.isLog = false;
	      },
	      cancel() {
	        this.isLog = true;
	        this.regName = "";
	        this.regPsw = "";
	        this.repeatPsw = "";
	      },
	      login() {
	        if (this.logName == "") {
	          alert("请输入名字！");
	        } else if (this.logPsw == "") {
	          alert("请输入密码！");
	        } else {
	          if (localStorage.getItem("name") === this.logName && localStorage.getItem("psw") === this.logPsw) {
	            this.$router.push("./home/list");
	          } else {
	            alert("用户名或密码不正确！");
	          }
	        }
	      },
	      submit() {
	        if (this.regName == "") {
	          alert("请输入名字！");
	        } else if (this.regPsw == "") {
	          alert("请输入密码！");
	        } else if (this.repeatPsw == "") {
	          alert("请再输入确认密码！");
	        } else if (this.regPsw !== this.repeatPsw) {
	          alert("密码不一致！");
	        } else {
	          localStorage.setItem("name", this.regName);
	          localStorage.setItem("psw", this.regPsw);
	          this.regName = "";
	          this.regPsw = "";
	          this.repeatPsw = "";
	          this.isLog = true;
	          alert("注册成功！");
	        }
	      }
	    }
	}
</script>