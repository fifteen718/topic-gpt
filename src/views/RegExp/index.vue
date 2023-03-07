<script setup lang="ts" name="RegExp">
import useRegExp from './hooks/useRegExp';

const {
  inputData,
  resData,
  requestApi,
} = useRegExp();

</script>

<template>
  <div class="regexp base-page">
    <div class="nav-bar">
      TopicGPT - 正则查询 📖
    </div>
    <div class="regexp__body">
      <div class="regexp__req-row">
        <el-input class="regexp__req-row__input" placeholder="请输入正则描述..." v-model="inputData" clearable
          @keyup.enter.native="requestApi">
          <template #prepend>我想要的正则:</template>
        </el-input>
        <el-button class="regexp__req-row__btn" color="#3e3f4a" type="primary" @click="requestApi">查询</el-button>
      </div>
      <div class="regexp__res-content">
        {{ resData }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.regexp {
  width: 100%;
  height: 100%;

  &__req-row {
    display: flex;

    &__input {
      width: 500px;
      margin-right: 10px;
    }
  }

  &__res-content {
    min-height: 200px;
    margin-top: 20px;
    border: 1px solid #9a9b9f;
    padding: 6px 12px;
  }
}
</style>
