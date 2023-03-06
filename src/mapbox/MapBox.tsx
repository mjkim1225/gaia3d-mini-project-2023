import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'mapbox-gl/dist/mapbox-gl.css'
import { CENTER, MAP_CONFIG } from './config'

const MapBox = () => {
    const [zoomLevel, setZoomLevel] = useState<number>(4)
    const [lat, setLat] = useState<number>(CENTER.lat)
    const [lon, setLon] = useState<number>(CENTER.lon)

    return (
        <div style={{ height: '300px' }}>
            <ReactMapGL
                initialViewState={{
                    latitude: lat,
                    longitude: lon,
                    zoom: zoomLevel
                }}
                // style={{ width: '100%', height: '100%' }}
                maxZoom={MAP_CONFIG.maxZoom}
                minZoom={MAP_CONFIG.minZoom}
                mapboxAccessToken={MAP_CONFIG.accessToken}
                mapStyle={MAP_CONFIG.style}
            >
                {/* <NavigationControl /> */}
                <Marker longitude={lon} latitude={lat} color="blue" />
            </ReactMapGL>
        </div>
    )
}

export default MapBox
