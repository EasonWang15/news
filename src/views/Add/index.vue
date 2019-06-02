<template>
  <div class="add">
    <div class="form-row">
      <div class="form-label">
        <label>标题</label>
      </div>
      <div class="form-inp">
        <input v-model="title" type="text">
      </div>
    </div>
    <div class="form-row">
      <div class="form-label">
        <label>内容</label>
      </div>
      <div class="form-inp">
        <textarea v-model="content"></textarea>
      </div>
    </div>
    <div class="form-btns">
      <a class="btn btn-green" href="javascript:;" @click="submit">完成</a>
      <a class="btn btn-default" href="javascript:;" @click="cancel">取消</a>
    </div>
  </div>
</template>

<script>
	import "./style.scss"
	import store from "@/store"

	export default {
	    name: 'Add',
	    store,
	    data() {
	      return {
	        title: "",
	        content: ""
	      }
	    },
	    methods: {
	      submit() {
	        if (this.title == "") {
	          alert("请输入标题！");
	          return ;
	        }
	        if (this.content == "") {
	          alert("请输入内容！");
	          return ;
	        }
	        store.commit("addItem", {
	          title: this.title,
	          content: this.content,
	          createTime: new Date().toLocaleString()
	        });
	        this.title = "";
	        this.content = "";
	        this.$router.push("./home/list");
	      },
	      cancel() {
	        this.$router.go(-1);
	      }
	    }
	  }
</script>