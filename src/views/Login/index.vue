<script setup lang="ts" name="Login">
import useLogin from './hooks/useLogin';

const {
  inputKey,
  loginHandler,
} = useLogin();

</script>

<template>
  <div class="login">
    <div class="login__content">
      <div class="login__content__title">TopicGPT</div>
      <el-input class="login__content__key-input" placeholder="Your Api Key ..." v-model="inputKey"
        @keyup.enter.native="loginHandler" clearable>
        <template #prepend>🔑</template>
      </el-input>
      <el-button class="login__content__login-btn" color="#3e3f4a" type="primary" size="large" @click="loginHandler">Sign
        in</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.login {
  &__content {
    margin: 25vh auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    min-width: 300px;

    &__title {
      font-size: 40px;
      font-weight: inherit;
      text-align: center;
      font-weight: 600;
    }

    &__key-input {
      margin-top: 20px;
      width: 100%;
      height: 44px;
      font-size: 14px;
    }

    &__login-btn {
      margin-top: 20px;
      width: 100%;
      height: 44px;
      font-size: 18px;
    }
  }
}
</style>

