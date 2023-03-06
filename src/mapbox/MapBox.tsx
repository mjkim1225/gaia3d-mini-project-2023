import React, { useState } from 'react'
import ReactMapGL, { type ViewState, NavigationControl, Marker } from 'react-map-gl'
import { type MapConfig } from './types'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'mapbox-gl/dist/mapbox-gl.css'

const MAP_TOKEN: string = 'pk.eyJ1IjoibWpraW05NTEyMjUiLCJhIjoiY2xld2NmeWZ0MjZ4MzN5cXJsdnB5eWZqNyJ9.NU7joAnvVgkDMnK_788xUQ'

const mapConfig: MapConfig = {
    avatar: '',
    maxZoom: 19,
    minZoom: 1,
    type: 'vector',
    style: 'mapbox://styles/mapbox/streets-v9', // mapbox://styles/jasper8vercnocke/ckgj6jez2119s19mphno725x4',
    accessToken: MAP_TOKEN,
    title: 'GRB'
}

interface Location {
    lat: number
    lon: number
}

const MapBox = () => {
    const [zoomLevel, setZoomLevel] = useState<number>(4)
    const [latLon, setLatLon] = useState<Location>({
        lat: 37,
        lon: 126
    })

    const { lat, lon } = latLon
    const SIZE = 20
    const UNIT = 'px'

    return (
        <div style={{ height: '500px' }}>
            <ReactMapGL
                initialViewState={{
                    latitude: lat,
                    longitude: lon,
                    zoom: zoomLevel
                }}
                // style={{ width: '100%', height: '100%' }}
                maxZoom={mapConfig.maxZoom}
                minZoom={mapConfig.minZoom}
                mapboxAccessToken={mapConfig.accessToken}
                mapStyle={mapConfig.style}
                // onViewportChange={onViewportChange}
            >
                {/* <NavigationControl /> */}
                <Marker longitude={lon} latitude={lat} color="blue" />
            </ReactMapGL>
        </div>
    )
}

export default MapBox
