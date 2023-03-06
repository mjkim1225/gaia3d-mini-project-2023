import React from 'react'
import Button from './Button'

const buttonEvent = () => {
    console.log('테스트')
}

const Header = () => {
    return (
        <>
            <div>
                <Button title={'primary'} onClick={buttonEvent} />
                <Button title={'secondary'} onClick={buttonEvent} variant={'secondary'} />
            </div>
        </>
    )
}

export default Header
