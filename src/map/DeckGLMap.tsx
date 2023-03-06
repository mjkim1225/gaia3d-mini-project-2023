/// app.js
import React, { useEffect, useState } from 'react'
import DeckGL from '@deck.gl/react/typed'
import { LineLayer } from '@deck.gl/layers/typed'
import { type Layer } from '@deck.gl/core/typed'
import { Map } from 'react-map-gl'
import { CENTER, MAP_CSS, MAPBOX_ACCESS_TOKEN } from './config'

// Set your mapbox access token here

const DeckGLMap = () => {
    // Data to be used by the LineLayer
    const data = [
        { sourcePosition: [CENTER.lon, CENTER.lat], targetPosition: [CENTER.lon, CENTER.lat + 0.5] }
    ]

    const [layers, setLayers] = useState<[Layer]>()
    const [zoom, setZoom] = useState<number>(CENTER.zoom)
    const [lat, setLat] = useState<number>(CENTER.lat)
    const [lon, setLon] = useState<number>(CENTER.lon)

    useEffect(() => {
        const layer: Layer = new LineLayer({ id: 'line-layer', data })
        setLayers([layer])
    }, [])

    return (
        <div style={MAP_CSS}>
            <DeckGL
                initialViewState={{
                    longitude: lon,
                    latitude: lat,
                    zoom,
                    pitch: 0,
                    bearing: 0
                }}
                controller={true}
                layers={layers} >
                <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                    mapStyle={'mapbox://styles/mapbox/streets-v9'}/>
                {/* <MapBox /> */}
            </DeckGL>
        </div>

    )
}
export default DeckGLMap
