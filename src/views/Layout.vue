<template>
  <el-container>
    <el-header>
      <el-row :gutter="20">
        <el-col :span="8" class="header-left">
          <div class="site-name" :style="{'width' : isCollapse ? '64px' : '200px'}">
            <span>Blog</span>
            <span v-if="!isCollapse">Dashboard</span>
          </div>
          <i v-if="isCollapse" class="el-icon-s-unfold" @click="handleCollapse" />
          <i v-else class="el-icon-s-fold" @click="handleCollapse" />
        </el-col>
        <el-col :span="8"/>
        <el-col :span="8" class="user-info">
          <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar icon="el-icon-user-solid"/>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">个人信息</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <div class="aside">
        <Aside :collapse="isCollapse"/>
      </div>
      <el-main>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '../components/Aside';
export default {
  name: 'Layout',
  components: { Aside },
  data() {
    return {
      isCollapse: false
    };
  },
  methods:{
    handleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
};
</script>

<style scoped lang="scss">
  .el-header {
    background-color: $--color-primary;
    padding: 0;
    .el-row {
      height: inherit;
      .header-left {
        i {
          font-size: 25px;
        }
        .site-name {
          span:last-child {
            margin-left: 10px;
          }
          transition: width 0.4s;
        }
      }
      .el-col {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: inherit;
      }
    }
  }
  .el-aside {
    flex-basis: auto;
  }
  .el-main {
    background-color: $--background-color-base;
  }
  .user-info {
    padding: 0 20px;
    justify-content: flex-end;
    .el-avatar {
      margin-right: 20px;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

</style>
