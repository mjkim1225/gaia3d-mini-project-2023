import create from 'zustand'
import { type Layer } from '@deck.gl/core/typed'

interface MapStoreInterface {
    layers: Layer[]
    addLayer: (layer: Layer) => void
    removeAllLayers: () => void
}

const useMapStore = create<MapStoreInterface>()((set) => ({
    layers: [],
    addLayer: (layer) => {
        console.log('addLayer')
        set((state) => ({
            layers: (state.layers != null) ? [...state.layers, layer] : [layer]
        }))
    },
    removeAllLayers: () => {
        console.log('removeAllLayers')
        set((state) => ({
            layers: []
        }))
    },
}))

export default useMapStore
