import { reactive, computed } from 'vue'
import { stringify } from 'qs'

export function useGeoserverLayer() {
  const { VITE_GEOSERVER_URL, VITE_GEOSERVER_WORKSPACE } = import.meta.env

  const layers = reactive({
    all: [
      'buildings_a',
      'landuse_a',
      'natural_a',
      'natural',
      'places_a',
      'places',
      'pofw_a',
      'pofw',
      'pois_a',
      'pois',
      'railways',
      'roads',
      'traffic_a',
      'traffic',
      'transport_a',
      'transport',
      'water_a',
      'waterways'
    ].map((id) => ({ id, name: id })),
    visible: ['waterways']
  })

  function getGeoServerLayerData(layerName) {
    const workspaceName = VITE_GEOSERVER_WORKSPACE
    const urlPrefix = `${VITE_GEOSERVER_URL}/${workspaceName}/gwc/service/wmts`
    const tilematrixset = 'EPSG:900913'
    const params = {
      layer: `${workspaceName}:${layerName}`,
      style: '',
      tilematrixset,
      Service: 'WMTS',
      Request: 'GetTile',
      Version: '1.0.0',
      Format: 'application/vnd.mapbox-vector-tile',
      TileMatrix: `${tilematrixset}:{z}`,
      TileCol: '{x}',
      TileRow: '{y}'
    }
    return `${urlPrefix}?${stringify(params, { encode: false })}`
  }

  const vectorTileLayers = computed(() => {
    return layers.visible.map((layerName) => {
      return {
        id: layerName,
        options: {
          urlTemplate: getGeoServerLayerData(layerName)
        }
      }
    })
  })

  return {
    vectorTileLayers,
    layers
  }
}
