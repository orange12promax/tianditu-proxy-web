<template>
  <div v-for="item in list" :key="item.id">
    <n-switch :value="item.visible" @update:value="(e) => onUpdateOneValue(item.id, e)" />
    <span>{{ item.id }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { NSwitch } from 'naive-ui'

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  }
})

const selectedValue = defineModel('value')

const list = computed(() => {
  return props.options.map((item) => {
    return {
      id: item.id,
      name: item.name,
      visible: selectedValue.value.includes(item.id)
    }
  })
})

function onUpdateOneValue(id, nv) {
  console.log(id, nv)
  if (nv) {
    selectedValue.value = [...selectedValue.value, id]
  } else {
    selectedValue.value = selectedValue.value.filter((item) => item !== id)
  }
  console.log(selectedValue.value)
}
</script>
