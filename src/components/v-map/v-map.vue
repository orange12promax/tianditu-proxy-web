<template>
  <div class="w-full h-full relative">
    <div id="homemap" class="w-full h-full relative"></div>
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted, provide, ref } from 'vue'
import { Map } from './maptalks'
import 'maptalks/dist/maptalks.css'
import { mapName } from './config'

const mapRef = ref()

onMounted(() => {
  const map = new Map('homemap', {
    center: [118.846825, 32.046534],
    zoom: 14
  })
  mapRef.value = map
})

provide(mapName, mapRef)
</script>
