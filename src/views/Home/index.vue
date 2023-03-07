<template>
  <div class="home base-page">
    <div class="nav-bar">
      TopicGPT - 百宝箱 🧰
    </div>
    <div class="home__body">
      <RouterLink to="/regexp" class="home__body__card bg-blue">
        正则查询
      </RouterLink>
      <RouterLink to="/codereview" class="home__body__card bg-green">
        Code Review
      </RouterLink>
      <div class="home__body__coming-card bg-gray">
        Coming Soon ...
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  &__body {
    display: flex;
    flex-wrap: wrap;

    &__card {
      width: 200px;
      height: 200px;
      display: flex;
      font-size: 18px;
      justify-content: center;
      align-items: center;
      margin: 0 32px 32px 0;
      border-radius: 12px;
      color: white;
      font-weight: bold;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);

      &:hover {
        cursor: pointer;
        background-image: linear-gradient(135deg, rgba(7, 11, 23, 0) 0%, rgba(7, 11, 23, 0.3) 100%);
      }
    }

    &__coming-card {
      width: 200px;
      height: 200px;
      display: flex;
      font-size: 18px;
      justify-content: center;
      align-items: center;
      margin: 0 32px 32px 0;
      border-radius: 12px;
      color: white;
      font-weight: bold;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
      cursor: not-allowed;
      user-select: none;
    }
  }
}
</style>

