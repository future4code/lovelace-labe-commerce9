import React from 'react'
import styled from 'styled-components'



const ProdutoList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  grid-row: 2;
  grid-column: 4;
`
const ProdutoItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-style: groove;
  border-color: red;
  text-align: center;
  flex-direction: column;
  align-items: center;
  background-color: #FFA500;
  background-color: #DCDCDC;
  height: 90%;
  width: 80%;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 2%;
`



function ListaDeProdutos(props) {
  return (
    
    <div>
      <ProdutoList>
        {props.produtos.map(item => {
          return (
        
            <ProdutoItem>
              <p>{item.nome}</p>
              <img src={item.imagem}/>
              <p> {item.preco}</p>
            </ProdutoItem>
          
          )
        })}
      </ProdutoList>
    </div>
  )
}

export default ListaDeProdutos
