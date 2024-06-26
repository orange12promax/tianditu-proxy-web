<template>
  <div class="w-full h-full">
    <v-map>
      <!-- <v-tile-layer id="tdt-vec" :options="vecTileOptions" /> -->
      <v-vector-tile-layer
        v-for="item in vectorTileLayers"
        :key="item.id"
        :id="item.id"
        :options="item.options"
      />
    </v-map>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import VMap from '@/components/v-map/v-map.vue'
import VTileLayer from '@/components/v-map/v-tile-layer'
import VVectorTileLayer from '@/components/v-map/v-vector-tile-layer'
import { useGeoserverLayer } from './composables/layer'

const vecTileOptions = ref({
  urlTemplate: 'http://127.0.0.1:13000/tianditu/vec/{z}/{y}/{x}'
})

const { vectorTileLayers, layerController } = useGeoserverLayer()
</script>
