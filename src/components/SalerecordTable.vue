<template>
  <Table highlight-row :columns="title" :data="records">
    <template slot="add" slot-scope="{row}">
      <div>
        <Button type="info" shape="circle" size="small" :disabled="row.count <= 1" @click="decrement(row)">-</Button>
        {{row.count}}
        <Button type="info" shape="circle" size="small" @click="increment(row)">+</Button>
      </div>
    </template>
    <template slot="delete" slot-scope="{row}">
      <Button type="error" @click="deleteRowdata(row)">删除</Button>
    </template>
  </Table>
</template>

<script>
import {updateSelecord, deleteSelecord} from "@/nettwork/salerecord";

export default {
  name: "SalerecordTable",
  data() {
    return {
      title: [
        {
          title: '编号',
          key: 'id'
        },
        {
          title: '商品名称',
          key: 'goodname'
        },
        {
          title: '单价',
          key: 'price',
          align: 'center'
        },
        {
          title: '数量',
          slot: 'add',
          key: 'count',
          align: "center",
          ellipsis: true
        },
        {
          title: '操作',
          weight: 100,
          slot: 'delete',
          align: 'center'
        }
      ]
    }
  },
  props: {
    records: Array
  },
  methods: {
    decrement(row) {
      updateSelecord(row.srid, row.count - 1).then(res => {
        if (res.message == 'true') {
          row.count--
        }
        })
    },
    increment(row) {
      updateSelecord(row.srid, row.count + 1).then(res => {
        if (res.message == 'true') {
          row.count++
        }
      })
    },
    deleteRowdata(row) {
      deleteSelecord(row.srid).then(res => {
        if (res.message == 'true') {
          for (let i = 0; i < this.records.length; i++) {
            if (this.records[i].srid == row.srid) {
              this.records.splice(i, 1)
              this.$Message.info('删除成功')
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
