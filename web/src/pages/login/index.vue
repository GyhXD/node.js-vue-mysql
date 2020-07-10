<!--
 * @Author: your name
 * @Date: 2020-07-01 14:54:17
 * @LastEditTime: 2020-07-08 14:08:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\pages\login\index.vue
--> 
<template>
  <div>
    <el-radio
      v-model="radio"
      label="1"
    >备选项</el-radio>
    <el-radio
      v-model="radio"
      label="2"
    >备选项</el-radio>
  </div>
</template>
<script>
import { getCaptcha } from '@/api/index.js'
export default {
  data() {
    return {
      radio: '1'
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getCaptcha().then(res => {
        console.log('res', res)
      })
    }
  }
}
</script>