import React from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import MapBox from './map/MapBox'
import DeckGLMap from './map/DeckGLMap'

const Settings = () => {
    return (
        <>
            환경 설정 화면
        </>
    )
}

const ContentsWrapper = styled.header`
    display: flex;
    overflow: hidden;
    flex: 1;
    z-index: 0;
`

const Contents = () => {
    return (
        <>
            <ContentsWrapper>
                <div>
                    <Routes>
                        <Route path="/mapbox-only" element={<MapBox />} />
                        <Route path="/deckgl" element={<DeckGLMap />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </ContentsWrapper>
        </>
    )
}

export default Contents
