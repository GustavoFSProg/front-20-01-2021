import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import Header from '../Header/index'
import {
  ContainerImg,
  Container,
  ContainerLista,
  Lista,
  BodyContainer,
  ContainerData,
  TextContainer,
} from './style'
import './styles.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState([])

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      if (!typeof price === Number) {
        return alert('O preço deve ser um numero!!')
      } else {
        const dados = {
          email,
          password,
        }

        const { data } = await api.post('/login', dados)

        console.log('data', data)

        localStorage.setItem('Token', data.token)

        alert('Login realizado com sucesso!')
        return history.push('/')
      }
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <>
      <Container>
        <BodyContainer>
          <Header />
          <TextContainer>
            <h2>Login </h2>
            <br />
          </TextContainer>
          <ContainerLista>
            <form onSubmit={handleSubmit} className="janela">
              <div className="profile-container">
                <fieldset>
                  <legend>Login</legend>

                  <div className="input-block">
                    <label htmlFor="name">Email</label>
                    <br />
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="input-block">
                    <label htmlFor="name">Senha</label>
                    <br />
                    <input
                      id="password"
                      value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="input-block">
                    <button
                      style={{
                        color: 'darkgreen',
                        paddingRight: '20px',
                        paddingLeft: '20px',
                        background: '#e6fff2',
                        fontSize: '15px',
                      }}
                      className="confirm-button"
                      type="submit"
                    >
                      <strong>Logar</strong>
                    </button>
                  </div>
                </fieldset>
              </div>
            </form>

            <ContainerData></ContainerData>
          </ContainerLista>
        </BodyContainer>
      </Container>
    </>
  )
}
