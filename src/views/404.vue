<template>
  <div class="wscn-http404-container">
    <div class="text">您访问的页面可能迷路了......</div>
    <el-button type="primary" class="btn" @click="goHome()">返回首页</el-button>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  computed: {
    message() {
      return '网管说这个页面你不能进......'
    },
  },
  methods: {
    goHome() {
      this.$router.replace({ path: '/' })
    },
  },
}
</script>

<style lang='scss' scoped>
.wscn-http404-container {
  margin: 15px;
  padding-top: 200px;
  text-align: center;
  .btn {
    margin: 15px auto;
  }
}
</style>
