import React from 'react'
import Header from './Header'

import { BrowserRouter } from 'react-router-dom'
import Contents from './Contents'

const Proejct = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Contents />
            </BrowserRouter>
        </>
    )
}

export default Proejct
