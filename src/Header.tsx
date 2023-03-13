import React from 'react'
import Button from './common/Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const buttonEvent = () => {
    console.log('테스트')
}

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 30px;
    box-shadow: 0px 0px 30px rgb(0 0 0 / 20%);
    z-index: 1;
`

const MenuWrapper = styled.menu`
    display: flex;
    float: right;
    padding: 0px;
`

const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <MenuWrapper>
                    <Link to="/mapbox-only">
                        <Button title={'mapbox only'} onClick={buttonEvent} />
                    </Link>
                    <Link to="/deckgl">
                        <Button title={'deckgl with mapbox'} onClick={buttonEvent} />
                    </Link>
                    <Link to="/settings">
                        <Button title={'환경 설정'} onClick={buttonEvent} variant={'secondary'} />
                    </Link>
                </MenuWrapper>
            </HeaderWrapper>
        </>
    )
}

export default Header
