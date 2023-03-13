/// app.js
import React, { useState } from 'react'
import DeckGL from '@deck.gl/react/typed'
import { GeoJsonLayer, LineLayer } from '@deck.gl/layers/typed'
import { type Layer } from '@deck.gl/core/typed'
import { Map } from 'react-map-gl'
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
        </>

    )
}
export default DeckGLMap
