import React from 'react'
import * as S from './styles'

export default function Card({ id, getById, imageSource, title, price }) {
  return (
    <S.CardContainer>
      <S.Button onClick={() => getById(id)}>Detalhes</S.Button>

      <S.InfoContainer>
        <S.Image
          src={`https://api-ultima.herokuapp.com/files/${imageSource}`}
        />

        <S.TextContainer>
          <S.InfoText>
            <strong>Nome: </strong>
            {title}
          </S.InfoText>
          <S.InfoText>
            <strong>Preço: </strong>
            {price}
          </S.InfoText>
        </S.TextContainer>
      </S.InfoContainer>
    </S.CardContainer>
  )
}
