import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #478e95;
  background: rgba(255, 255, 255, 0.3);
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  width: 95%;
  margin: 1rem 0px;
`

export const Image = styled.div`
  height: 300px;
  width: 300px;
  min-width: 300px;
  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`

export const Button = styled.div`
  background: #086871;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: yellow;
  border-radius: 8px;
  border: 1px solid #086871;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.6;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
`

export const InfoText = styled.div`
  text-decoration: none;
  color: black;
  font-family: arial;
  font-size: 2rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 700px) {
    font-size: 1.3rem;
  }
`
