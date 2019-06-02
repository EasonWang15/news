<template>
  <div class="list" v-if="isShow">
  	<div class="empty" v-if="!getLists.length">
    	<p>这里空空如也~</p>
  	</div>
  	<div class="list-item" v-else>
  		<ul>
  			<li v-for="(item, index) in getLists" :key="index" :class="{active: index === current}" @click="selected(index)">
		  		<h2>{{item.title}}</h2>
		  		<p>{{item.content}}</p>
		  		<p>
		  			{{item.createTime}}
		  			<a href="javascript:;" @click="goInfo(index)">查看详情>></a>
		  		</p>
  			</li>
  		</ul>
  	</div>
  </div>
  <Info @backEvent="back" v-else/>
</template>

<script>
	import "./style.scss"
	import store from "@/store"
	import Info from "@/components/Info"

	export default {
		name: "List",
		store,
		data() {
			return {
				isShow: true,
				current: ""
			}
		},
		components: {
			Info
		},
		computed: {
	    	getLists () {
	    		return store.state.lists;
	    	}
	    },
		methods: {
			back() {
				this.isShow = true;
				this.current = "";
			},
	    	selected(index) {
	    		this.current = index;
	    	},
	    	goInfo(index) {
	    		store.commit("setCurrent", index);
	    		this.isShow = false;
	    	}
	    }
	}
</script>