<template>
  <Tabs value="all">
    <TabPane @click="getAll" label="全部" name="all">
      <goods-table :goods="goods"></goods-table>
    </TabPane>
    <TabPane @click="getType" label="酒" name="酒">
      <goods-table :goods="goods"></goods-table>
    </TabPane>
    <TabPane @click="getType" label="槟榔" name="槟榔">
      <goods-table :goods="goods"></goods-table>
    </TabPane>
    <TabPane @click="getType" label="饮料" name="饮料">
      <goods-table :goods="goods"></goods-table>
    </TabPane>
    <TabPane @click="getType" label="零食" name="零食">
      <goods-table :goods="goods"></goods-table>
    </TabPane>
    <TabPane @click="getType" label="其他" name="其他">
      <goods-table :goods="goods"></goods-table>
    </TabPane>
  </Tabs>
</template>

<script>
import GoodsTable from "@/components/GoodsTable";
import {getGoodsAll, getGoodsType} from "@/nettwork/goods";

export default {
  name: "GoodsTabs",
  components: {GoodsTable},
  data() {
    return {
      goods: []
    }
  },
  methods: {
    getAll() {
      getGoodsAll().then(res => {
        console.log('发送请求');
        this.goods = res
      })
    },
    getType(goodstype) {
      getGoodsType(goodstype).then(res => {
        this.goods = res
      })
    }
  }
}
</script>

<style scoped>

</style>
