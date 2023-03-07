<script setup lang="ts" name="Chat">
import useChat from './hooks/useChat';

const {
  inputData,
  resData,
  requestApi,
} = useChat();

</script>

<template>
  <div class="chat base-page">
    <div class="nav-bar">
      TopicGPT - ChatGPT 💬
    </div>
    <div class="chat__body">
      <div class="chat__req-row">
        <el-input class="chat__req-row__input" placeholder="请输入聊天内容..." v-model="inputData" clearable
          @keyup.enter.native="requestApi">
          <template #prepend>我:</template>
        </el-input>
        <el-button class="chat__req-row__btn" color="#3e3f4a" type="primary" @click="requestApi">发送</el-button>
      </div>
      <div class="chat__res-content">
        {{ resData }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.chat {
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
