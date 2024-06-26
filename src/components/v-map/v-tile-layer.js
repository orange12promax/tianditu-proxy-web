import { useMapLife } from './common'
import { TileLayer } from './maptalks'

export default {
  name: 'VTileLayer',
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
      const tileLayer = new TileLayer(props.id, props.options)
      tileLayer.addTo(map)
    })
    return () => null
  }
}
