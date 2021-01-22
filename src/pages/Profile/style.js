// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  /* margin: 32px auto; */
  background: white;
  justify-content: center;
  display: flex;
`
export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`
export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: -25px;
  /* align-items: center; */
`

export const ContainerLista = styled.div`
  background: #f2f2f2;
  padding: 24px;
  border-radius: 8px;
  position: relative;
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
`
export const Lista = styled.ul`
  text-decoration: none;
  color: black;
  font-family: arial;
  font-size: 15px;
  /* margin-left: 10px; */
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 12px;
  padding-bottom: 4px;
  margin-left: -20px;

  @media screen and (min-width: 700px) {
    font-size: 15px;
  }
`
export const ListaUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`
export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
