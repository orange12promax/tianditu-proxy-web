import { useMapLife } from './common'
import { VectorTileLayer } from '@maptalks/vt'

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
    onMapMounted((map) => {
      const tileLayer = new VectorTileLayer(props.id, props.options)
      tileLayer.addTo(map)
    })
    return () => null
  }
}
