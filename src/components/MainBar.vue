<template>
  <i-menu mode="horizontal" theme="light" active-name="1">
    <menu-item name="1" to="/home" replace>
      <icon type="ios-analytics"/>
      首页
    </menu-item>
    <menu-item name="2" to="/room" replace>
      <icon type="ios-filing"/>
      房间管理
    </menu-item>
    <menu-item name="3" to="/member" replace>
      <icon type="ios-people"/>
      会员管理
    </menu-item>
    <submenu name="4">
      <template slot="title">
        <icon type="ios-paper"/>
        记录查询
      </template>
      <menu-group title="记录">
        <menu-item name="4-1" to="/storagerecord" replace>存取记录</menu-item>
        <menu-item name="4-2" to="/roomrecord" replace>开房记录</menu-item>
      </menu-group>
    </submenu>
    <menu-item name="5" to="/about" replace>
      <icon type="ios-information-circle"/>
      关于
    </menu-item>
  </i-menu>
</template>

<script>
  export default {
    name: "MainBar",
  }
</script>

<style scoped>

</style>
