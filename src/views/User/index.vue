<template>
  <div class="user">
  	<img src="@/assets/logo.png">
    <p>{{name}}</p>
    <p>欢迎来到个人中心</p>
    <div class="home-btns">
      <a class="btn btn-green" href="javascript:;" @click="goAdd">添加</a>
    </div>
  </div>
</template>

<script>
	import "./style.scss"

	export default {
		name: "User",
		data() {
	      return {
	        name: localStorage.getItem("name")
	      }
	    },
	    methods: {
	      goAdd() {
	        this.$router.push("../add")
	      }
	    }
	}
</script>