import React from 'react'
import api from '../../services'
import {
  ContainerImg,
  Container,
  ContainerLista,
  BodyContainer,
  ContainerData,
  TextContainer,
} from './style'
// import Header from '../Header'

function Cart() {
  return (
    <>
      <Container>
        <BodyContainer>
          {/* <Header /> */}
          <TextContainer>
            <h2>Carinho de Compras</h2>
            <br />
          </TextContainer>
          {/* {lista.map((list) => { */}
          {/* return ( */}
          <>
            <ul>
              <ContainerLista>
                <div style={{ paddingTop: '18px' }} />

                <ContainerImg>
                  <ContainerData></ContainerData>
                </ContainerImg>
              </ContainerLista>
            </ul>
          </>
        </BodyContainer>
      </Container>
    </>
  )
}

export default Cart
