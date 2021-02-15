import styled from 'styled-components'

export const ContainerLista = styled.div`
  background: #478e95;
  padding: 24px;
  border-radius: 8px;
  position: relative;
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 600px) {
    width: 120%;
    margin-left: -50px;
  }
`

export const Form = styled.div`
  background: #f2f2f2;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65%;

  /* width: 700px;
  margin: 64px auto;
  height: 80%;

  background: #f2f2f2;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden; */
`

export const FormGroup = styled.div`
  width: 100%;
  height: 50px;
  height: 80%;
`

export const Legend = styled.p`
  width: 100%;

  font-size: 32px;
  line-height: 34px;
  color: #567c8f;

  font-weight: 700;

  border-bottom: 1px solid #d3e2e5;
  margin-bottom: 40px;
  padding-bottom: 24px;
`

export const InputBlock = styled.div`
  width: 110%;
  padding-left: 20px;
  padding-bottom: 17px;
`
