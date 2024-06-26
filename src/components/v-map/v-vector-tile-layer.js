import { useMapLife } from './common'
import { VectorTileLayer } from '@maptalks/vt'
import { h, onBeforeUnmount } from 'vue'
export default {
  name: 'VVectorTileLayer',
  props: {
    id: String,
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { onMapMounted } = useMapLife()
    let tileLayer
    onMapMounted((map) => {
      tileLayer = new VectorTileLayer(props.id, props.options)
      tileLayer.addTo(map)
    })
    onBeforeUnmount(() => {
      // remove layer from map
      tileLayer.remove()
    })
    return () => null
  }
}
