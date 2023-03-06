import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'mapbox-gl/dist/mapbox-gl.css'
import { CENTER, MAP_CONFIG, MAP_CSS, MAPBOX_ACCESS_TOKEN } from './config'

const MapBox = () => {
    const [zoom, setZoom] = useState<number>(CENTER.zoom)
    const [lat, setLat] = useState<number>(CENTER.lat)
    const [lon, setLon] = useState<number>(CENTER.lon)

    return (
        <div style={MAP_CSS}>
            <ReactMapGL
                initialViewState={{
                    latitude: lat,
                    longitude: lon,
                    zoom
                }}
                // style={{ width: '100%', height: '100%' }}
                maxZoom={MAP_CONFIG.maxZoom}
                minZoom={MAP_CONFIG.minZoom}
                mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                mapStyle={MAP_CONFIG.style}
            >
                {/* <NavigationControl /> */}
                <Marker longitude={lon} latitude={lat} color="blue" />
            </ReactMapGL>
        </div>
    )
}

export default MapBox
