<script setup lang="ts" name="CodeReview">
import useCodeReview from './hooks/useCodeReview';

const {
  inputData,
  resData,
  requestApi,
} = useCodeReview();

</script>

<template>
  <div class="code-review base-page">
    <div class="nav-bar">
      TopicGPT - CodeReview 💡
    </div>
    <div class="code-review__body">
      <el-input class="code-review__body__req-input" v-model="inputData" :rows="10" type="textarea"
        placeholder="请输入CR代码..." />
      <el-button class="code-review__body__req-btn" color="#3e3f4a" type="primary" @click="requestApi">查询</el-button>
      <div class="code-review__body__res-content">
        {{ resData }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.code-review {
  width: 100%;
  height: 100%;

  &__body {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;

    &__req-btn {
      width: 100%;
      max-width: 200px;
      margin-top: 20px;
    }

    &__res-content {
      width: 100%;
      min-height: 200px;
      margin-top: 20px;
      border: 1px solid #9a9b9f;
      padding: 6px 12px;
    }
  }
}
</style>
