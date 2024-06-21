<template>
  <div class="w-full h-full">
    <v-map>
      <v-tile-layer id="tdt-vec" :options="vecTileOptions" />
    </v-map>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VMap from '@/components/v-map/v-map.vue'
import VTileLayer from '@/components/v-map/v-tile-layer'
import { subdomains, getTiandituUrl } from '@/components/v-map/tianditu'
const vecTileOptions = ref({
  // urlTemplate: getTiandituUrl({ layer: 'vec', tileMatrixSet: 'w' }),
  // subdomains
  urlTemplate: 'http://127.0.0.1:13000/tianditu/vec/{z}/{y}/{x}'
})
</script>
