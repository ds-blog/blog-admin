<template>
  <el-menu default-active="1"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose"
           :collapse="collapse">
    <el-menu-item index="1">
      <i class="el-icon-menu" />
      <span slot="title">仪表盘</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"/>
        <span slot="title">文章</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">所有文章</el-menu-item>
        <el-menu-item index="2-2">写文章</el-menu-item>
        <el-menu-item index="2-3">分类目录</el-menu-item>
        <el-menu-item index="2-4">标签</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"/>
        <span slot="title">页面</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">所有页面</el-menu-item>
        <el-menu-item index="3-2">新建页面</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-menu-item index="4">
      <i class="el-icon-setting"/>
      <span slot="title">附件</span>
    </el-menu-item>

    <el-menu-item index="5">
      <i class="el-icon-setting"/>
      <span slot="title">评论</span>
    </el-menu-item>

    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-location"/>
        <span slot="title">用户</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="6-1">个人信息</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="7">
      <template slot="title">
        <i class="el-icon-location"/>
        <span slot="title">系统</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="7-1">博客设置</el-menu-item>
        <el-menu-item index="7-2">工具</el-menu-item>
        <el-menu-item index="7-3">关于</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: 'Aside',
    props: {
      collapse: {
        required: true,
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style scoped lang="scss">
  .el-menu-vertical-demo {
    height: 100vh;
    text-align: left;
    &:not(.el-menu--collapse) {
      width: 200px;
    }
  }
</style>
