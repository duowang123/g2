<template>
  <div class="wscn-http404-container">
    <div class="text">您访问的页面可能迷路了......</div>
    <el-button class="btn" type="info" block @click="goHome()">返回首页</el-button>
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
  .text {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: rgba(102, 102, 102, 1);
    margin-top: 44px;
    margin-bottom: 33px;
  }
  .icon {
    width: 226px;
    height: 126px;
    margin-bottom: 25px;
  }
}
</style>
