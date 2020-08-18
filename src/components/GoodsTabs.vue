<template>
  <Tabs value="all" @on-click="showGoods">
    <TabPane label="全部" name="all">
      <goods-table :goods="goods"></goods-table>
    </TabPane>
    <TabPane label="酒" name="酒">
      <goods-table :goods="goods"></goods-table>
    </TabPane>
    <TabPane label="槟榔" name="槟榔">
      <goods-table :goods="goods"></goods-table>
    </TabPane>
    <TabPane label="饮料" name="饮料">
      <goods-table :goods="goods"></goods-table>
    </TabPane>
    <TabPane label="零食" name="零食">
      <goods-table :goods="goods"></goods-table>
    </TabPane>
    <TabPane label="其他" name="其他">
      <goods-table :goods="goods"></goods-table>
    </TabPane>
  </Tabs>
</template>

<script>
import GoodsTable from "@/components/GoodsTable";
import {selectGoodsAll, selectGoodsType} from "@/nettwork/goods";

export default {
  name: "GoodsTabs",
  components: {GoodsTable},
  data() {
    return {
      goods: []
    }
  },
  methods: {
    showGoods(name) {
      if (name == 'all'){
        console.log(name)
        this.getAll()
      } else {
        this.getType(name)
      }
    },
    getAll() {
      selectGoodsAll().then(res => {
        this.goods = res
      })
    },
    getType(goodstype) {
      selectGoodsType(goodstype).then(res => {
        this.goods = res
      })
    }
  },
  created() {
    selectGoodsAll().then(res => {
      this.goods = res
    })
  }
}
</script>

<style scoped>

</style>
