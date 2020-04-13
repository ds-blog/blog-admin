<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in list" :key="index">
      <span class="active" v-if="isLast(index)"> {{ showName(item) }} </span>
      <router-link :to="item.path" v-else> {{ showName(item) }}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    props: {
      list: {
        type: Array,
        required: true,
        default: []
      }
    },
    methods: {
      isLast(index) {
        return index === this.list.length - 1
      },
      showName(item) {
        return item.meta && item.meta.label || item.name
      }
    }
  };
</script>

<style scoped lang="scss">
  .el-breadcrumb {
    margin-top: 2px;
    background-color: $--color-white;
    padding: 18px 20px;
    box-sizing: content-box;
    .el-breadcrumb__item {
      height: 20px;
      line-height: 20px;
      font-size: 20px;
    }
  }
</style>
