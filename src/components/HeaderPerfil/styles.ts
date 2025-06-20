import styled from 'styled-components'
import HeroHeader from '../../assets/images/HeroHeader.svg'
import { Container } from '../../styles'

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${HeroHeader});

  div {
    display: flex;
    height: 186px;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
    width: 100%;
    font-weight: 900;
    font-size: 18px;
  }

  a {
    cursor: pointer;
  }

  ${Container} {
    background-color: transparent;
  }
`

export const Capa = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  color: #fff;

  ${Container} {
    padding-top: 25px;
    padding-bottom: 32px;
    background-color: transparent;
  }
`

export const Transparente = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

export const Paragrafo = styled.p`
  top: 0;
  font-size: 32px;
  font-weight: 100;
  position: sticky;
  z-index: 1;
`
export const NomeRestaurante = styled.h2`
  position: absolute;
  margin-top: 156px;
  z-index: 1;
  font-size: 32px;
  font-weight: 900;
`
