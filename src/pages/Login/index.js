import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import Header from '../../components/Header'
import Container from '../../components/Container'
import HeaderTitle from '../../components/HeaderTitle'
import { ContainerLista, Form, FormGroup, Legend, InputBlock } from './style'
// import './styles.css'

export default function Login() {
  const [email, setEmail] = useState('gustavosohne38@gmail.com')
  const [password, setPassword] = useState('')

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

        if (data) {
          console.log('data 1: ', data)

          localStorage.setItem('Token', data.token)

          localStorage.setItem('UserID', data.data._id)

          alert('Login realizado com sucesso!')
          return history.push('/')
        }
      }
    } catch (error) {
      console.log(error)
      return alert(`Email ou senha invalidos!!!`)
    }
  }

  return (
    <Container>
      <Header />
      <HeaderTitle>Login </HeaderTitle>

      <ContainerLista>
        <Form>
          <FormGroup>
            <fieldset>
              <Legend>Login</Legend>

              <InputBlock>
                <label htmlFor="name">Email</label>
                <br />
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputBlock>

              <InputBlock>
                <label htmlFor="name">Senha</label>
                <br />
                <input
                  id="password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputBlock>

              <InputBlock>
                <button
                  style={{
                    color: 'darkgreen',
                    paddingRight: '20px',
                    paddingLeft: '20px',
                    background: '#e6fff2',
                    fontSize: '15px',
                  }}
                  className="confirm-button"
                  onClick={() => handleSubmit()}
                >
                  <strong>Logar</strong>
                </button>
              </InputBlock>
            </fieldset>
          </FormGroup>
        </Form>
      </ContainerLista>
    </Container>
  )
}
