<template>
  <el-container>
    <el-header>
      <el-row :gutter="20" style="margin: 0">
        <el-col :span="8" class="header-left">
          <div class="site-name" :style="{'width' : isCollapse ? '44px' : '180px'}">
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
              <el-dropdown-item icon="el-icon-circle-plus" @click="logout">退出登录</el-dropdown-item>
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
        <Breadcrumb :list="breadcrumbList"/>
        <div class="main-container">
          <router-view :key="key"></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './components/Aside';
import Breadcrumb from '../components/Breadcrumb';

export default {
  name: 'Layout',
  components: { Aside, Breadcrumb, },
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    breadcrumbList() {
      return this.$route.matched
    },
    key() {
      return this.$route.path
    }
  },
  methods:{
    handleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 退出登录
    async logout() {
      await this.$store.dispatch('user/logout')
      await this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
};
</script>

<style scoped lang="scss">
  .el-header {
    background-color: $--color-white;
    padding: 0;
    .el-row {
      height: inherit;
      .header-left {
        i {
          font-size: 25px;
        }
        .site-name {
          padding: 0 10px;
          text-align: left;
          span:first-child {
            margin-right: 10px;
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
    background: #f0f2f5;
    color: rgba(0, 0, 0, 0.65);
    padding: 0;
    .main-container {
      margin: 20px 0 0 20px;
      background-color: $--color-white;
      height: calc(100% - 78px);
    }
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
