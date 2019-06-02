<template>
	<div class="home">
	    <router-view />
	    <div class="tab">
	      <router-link :to="{name: 'list'}">新闻列表</router-link>
	      <router-link :to="{name: 'user'}">个人中心</router-link>
	    </div>
    </div>
</template>

<script>
import store from "@/store"

export default {
  name: 'Home',
  store
}
</script>