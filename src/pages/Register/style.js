// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  /* margin: 32px auto; */
  background: #77b4ba;

  justify-content: center;
  display: flex;
`
export const ProfileContainer = styled.div`
  background: #f2f2f2;
  width: 100%;
  height: 50px;
  height: 80%;
`

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;
  height: 80%;

  background: #f2f2f2;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  /* padding: 64px 80px; */

  overflow: hidden;
`
export const Legend = styled.span`
  width: 100%;

  font-size: 32px;
  line-height: 34px;
  /* color: #5c8599; */
  color: #567c8f;

  font-weight: 700;

  border-bottom: 1px solid #d3e2e5;
  margin-bottom: 40px;
  padding-bottom: 24px;
`

export const Janela = styled.div`
  background: #f2f2f2;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65%;
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
export const InputBlock = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-bottom: 17px;
`

export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: -25px;
  /* align-items: center; */
`

export const ContainerLista = styled.div`
  background: #478e95;
  padding: 24px;
  border-radius: 8px;
  position: relative;
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  width: 96.2%;

  @media screen and (max-width: 600px) {
    width: 120%;
    margin-left: -50px;
  }
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
