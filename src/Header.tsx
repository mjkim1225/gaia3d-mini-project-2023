import React from 'react'
import Button from './common/Button'
import { Link } from 'react-router-dom'

const buttonEvent = () => {
    console.log('테스트')
}

const Header = () => {
    return (
        <>
            <div>
                <Link to="/mapbox-only">
                    <Button title={'mapbox only'} onClick={buttonEvent} />
                </Link>
                <Link to="/deckgl">
                    <Button title={'deckgl with mapbox'} onClick={buttonEvent} variant={'secondary'} />
                </Link>
            </div>
        </>
    )
}

export default Header
