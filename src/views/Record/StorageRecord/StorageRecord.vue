<template>
  <div>
    <div class="inputstyle">
      <Input search
             placeholder="输入电话号码..."
             v-model="tel" @on-search="searchMembers"
             @on-change="isShow = false"></Input>
    </div>
  </div>
</template>

<script>
export default {
name: "StorageRecord"
}
</script>

<style scoped>
.inputstyle{
  width: 20%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  display: flex;
}
</style>
