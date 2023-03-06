export interface MapConfig {
    avatar: string
    maxZoom: number
    minZoom: number
    style: string
    accessToken: string
    title: string
    type?: string
}

export interface Location {
    lat: number
    lon: number
    zoom: number
}
