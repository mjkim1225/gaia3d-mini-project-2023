import { type FC } from 'react'
import styled from 'styled-components'

// style 안의 변수
interface StyleTypes {
    variant?: 'primary' | 'secondary' | 'third'
}

// props 정의
interface ButtonTypes extends StyleTypes {
    title: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonStyle = styled.button<StyleTypes>`
    margin: 5px;
    border: 0;
    padding: 12px 24px;
    box-sizing: border-box;
    font-weight: 400;
    box-shadow: none;
    text-align: left;
    cursor: pointer;
    text-decoration: none;
    font-size: .9375rem;
    font-family: "Nunito",sans-serif;
    border-radius: 4px;
    box-shadow: none;
  background-color: ${({ variant }) =>
        variant === 'primary'
            ? '#00bebe'
            : variant === 'secondary' ? '#7d4b00' : '#8400a8'};

  &:disabled {
    background: #e7e8e9;
    color: #9fa3a9;
    cursor: not-allowed;
  }
`

const Button: FC<ButtonTypes> = ({ title, onClick, variant = 'primary' }) => {
    return (
        <ButtonStyle type="button" onClick={onClick} variant={variant}>
            {title}
        </ButtonStyle>
    )
}

export default Button
