<template>
  <div class="login-container">
    <el-form class="login-form" ref="loginForm" label-position="left" label-width="80px" :rules="rules" :model="loginForm">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="loginForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item class="login-btn">
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        loading: false,
        loginForm: {
          userName: '',
          password: ''
        },
        redirect: undefined,
        otherQuery: {},
        rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm() {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('user/login', this.loginForm)
              .then(() => {
                this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
                this.loading = false
              })
              .catch(() => {
                this.loading = false
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  };
</script>

<style scoped lang="scss">
  .login-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-form {
      width: 400px;
      height: 200px;
      .login-btn {
        display: flex;
        justify-content: center;
      }
    }
  }
</style>
