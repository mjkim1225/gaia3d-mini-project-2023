import React from 'react'
import Header from './Header'
import MapBox from './map/MapBox'
import DeckGLMap from './map/DeckGLMap'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

const Proejct = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/mapbox-only" element={<MapBox />} />
                    <Route path="/deckgl" element={<DeckGLMap />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Proejct
