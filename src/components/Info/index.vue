<template>
  <div class="list-item">
    <h2>{{getListItem.title}}</h2>
    <p>{{getListItem.content}}</p>
    <a class="btn btn-green" href="javascript:;" @click="back">返回</a>
  </div>
</template>

<script>
  import store from "@/store"
  import "./style.scss"
  
  export default {
    name: 'Info',
    store,
    computed: {
      getListItem() {
        return store.state.lists[store.state.current]
      }
    },
    methods: {
      back() {
        this.$emit("backEvent");
      }
    }
  }
</script>
