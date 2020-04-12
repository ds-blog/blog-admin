<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">

      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Layout',
};
</script>

<style scoped lang="scss">
  .el-header {
    background-color: $--color-primary;
  }
</style>
