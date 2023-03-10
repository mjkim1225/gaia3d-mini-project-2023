import { type MapConfig, type Location } from './types'
import type * as React from 'react'

export const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibWpraW05NTEyMjUiLCJhIjoiY2xld2NmeWZ0MjZ4MzN5cXJsdnB5eWZqNyJ9.NU7joAnvVgkDMnK_788xUQ'

export const MAP_CONFIG: MapConfig = {
    avatar: '',
    maxZoom: 19,
    minZoom: 1,
    type: 'vector',
    style: 'mapbox://styles/mapbox/streets-v9', // mapbox://styles/jasper8vercnocke/ckgj6jez2119s19mphno725x4',
    title: 'GRB'
}

export const CENTER: Location = {
    lat: 37,
    lon: 126,
    zoom: 5,
}
export const MAP_CSS: React.CSSProperties = {
    position: 'relative',
    height: '800px',
    width: '1300px'
}
