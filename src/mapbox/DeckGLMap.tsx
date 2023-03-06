/// app.js
import React, { useEffect, useState } from 'react'
import DeckGL from '@deck.gl/react/typed'
import { LineLayer } from '@deck.gl/layers/typed'
import { type Layer } from '@deck.gl/core/typed'
import { Map } from 'react-map-gl'
import { CENTER } from './config'

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibWpraW05NTEyMjUiLCJhIjoiY2xld2NmeWZ0MjZ4MzN5cXJsdnB5eWZqNyJ9.NU7joAnvVgkDMnK_788xUQ'

const DeckGLMap = () => {
    // Data to be used by the LineLayer
    const data = [
        { sourcePosition: [CENTER.lon, CENTER.lat], targetPosition: [CENTER.lon, CENTER.lat + 0.5] }
    ]

    const [layers, setLayers] = useState<[Layer]>()

    useEffect(() => {
        const layer: Layer = new LineLayer({ id: 'line-layer', data })
        setLayers([layer])
    }, [])

    return (
        <div style={{ height: '100px' }}>
            <DeckGL
                initialViewState={{
                    longitude: CENTER.lon,
                    latitude: CENTER.lat,
                    zoom: CENTER.zoom,
                    pitch: 0,
                    bearing: 0
                }}
                controller={true}
                layers={layers}
            >
                <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                    mapStyle={'mapbox://styles/mapbox/streets-v9'}/>
                {/* <MapBox /> */}
            </DeckGL>
        </div>

    )
}
export default DeckGLMap
