/// app.js
import React, { useEffect, useState } from 'react'
import DeckGL from '@deck.gl/react/typed'
import { GeoJsonLayer, LineLayer } from '@deck.gl/layers/typed'
import { type Layer } from '@deck.gl/core/typed'
import { TerrainLayer, Tile3DLayer } from '@deck.gl/geo-layers/typed'

import Map, { Source } from 'react-map-gl'
import { CENTER, MAP_CSS, MAPBOX_ACCESS_TOKEN } from './config'
import Button from '../common/Button'

const DeckGLMap = () => {
    // Data to be used by the LineLayer
    const data = [
        { sourcePosition: [CENTER.lon, CENTER.lat], targetPosition: [CENTER.lon, CENTER.lat + 0.5] }
    ]

    const [layers, setLayers] = useState<Layer[]>()
    const [zoom, setZoom] = useState<number>(CENTER.zoom)
    const [lat, setLat] = useState<number>(CENTER.lat)
    const [lon, setLon] = useState<number>(CENTER.lon)

    useEffect(() => {
    }, [])

    const removeAllLayers = () => {
        setLayers([])
    }
    const addLineLayer = () => {
        const layer: Layer = new LineLayer({ id: 'line-layer', data })
        addLayer(layer)
    }
    const addHospitalLayer = () => {
        const layer: Layer = new GeoJsonLayer({
            id: 'airports',
            data: 'hospital.geojson',
            // Styles
            filled: true,
            pointRadiusMinPixels: 2,
            pointRadiusScale: 20,
            // getPointRadius: f => 11 - f.properties.dist,
            getFillColor: [200, 0, 80, 180],
            // Interactive props
            pickable: true,
            autoHighlight: true,
        })
        addLayer(layer)
    }

    const add3Dtileset = () => {
        const layer = new Tile3DLayer({
            id: 'tile-3d-layer',
            data: 'http://localhost:8002/static/ws_output/tileset.json',
            onTilesetLoad: (tileset: any) => {
            // Recenter to cover the tileset
                const { cartographicCenter, zoom } = tileset
                setLat(cartographicCenter[1])
                setLon(cartographicCenter[0])
                const moreZoom: number = zoom
                setZoom(moreZoom)
            },
            // override scenegraph subLayer prop
            _subLayerProps: {
                scenegraph: { _lighting: 'flat' }
            }
        })
        addLayer(layer)
    }

    const addTerrainData = () => {
        const terrainLayer = new TerrainLayer({
            elevationDecoder: {
                rScaler: 6553.6,
                gScaler: 25.6,
                bScaler: 0.1,
                offset: -10000
            },
            material: {
                diffuse: 1
            },
            // elevationData: 'https://api.maptiler.com/tiles/terrain-rgb-v2/{z}/{x}/{y}.webp?key=JnUstpGHsGKv6aYoeuMe',
            elevationData: `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.png?access_token=${MAPBOX_ACCESS_TOKEN}`,
            // elevationData: `http://localhost:8080/tiles/{z}/{x}/{y}.png`, // texture: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
            // texture: 'https://xdworld.vworld.kr/2d/gray/service/{z}/{x}/{y}.png',
            texture: 'https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg',
            // texture: `http://175.197.92.213:10502/static/ujdataset/ujaerialimg/{z}/{x}/{y}.png`,
        })
        addLayer(terrainLayer)
    }

    const addLayer = (layer: Layer) => {
        setLayers((prevLayer) => {
            return (prevLayer != null) ? [...prevLayer, layer] : [layer]
        })
    }

    return (
        <>
            <Button title={'remove'} onClick={removeAllLayers} variant={'third'} />
            <Button title={'line'} onClick={addLineLayer} variant={'third'} />
            <Button title={'hospital'} onClick={addHospitalLayer} variant={'third'} />
            <Button title={'3D'} onClick={add3Dtileset} variant={'third'} />
            <Button title={'terrain'} onClick={addTerrainData} variant={'third'} />
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
                        mapStyle={'mapbox://styles/mapbox/streets-v9'}
                        attributionControl={false}
                        terrain={{ source: 'mapbox-dem', exaggeration: 1.5 }}
                    >
                        {/* <Source */}
                        {/*    id="mapbox-dem" */}
                        {/*    type="raster-dem" */}
                        {/*    url="http://localhost:8003/koreadem100/layer.json" */}
                        {/* /> */}
                    </Map>
                </DeckGL>
            </div>
        </>

    )
}
export default DeckGLMap
