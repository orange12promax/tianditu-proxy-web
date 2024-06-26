<template>
  <div class="w-full h-full relative">
    <v-map>
      <!-- <v-tile-layer id="tdt-vec" :options="vecTileOptions" /> -->
      <v-vector-tile-layer
        v-for="item in vectorTileLayers"
        :key="item.id"
        :id="item.id"
        :options="item.options"
      />
    </v-map>
    <div class="absolute left-3 bottom-3">
      <n-card>
        <layer-control :options="layers.all" v-model:value="layers.visible" />
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VMap from '@/components/v-map/v-map.vue'
import VTileLayer from '@/components/v-map/v-tile-layer'
import VVectorTileLayer from '@/components/v-map/v-vector-tile-layer'
import { useGeoserverLayer } from './composables/layer'
import { NCard } from 'naive-ui'
import LayerControl from './components/layer-control.vue'

const vecTileOptions = ref({
  urlTemplate: 'http://127.0.0.1:13000/tianditu/vec/{z}/{y}/{x}'
})

const { vectorTileLayers, layers } = useGeoserverLayer()
</script>
