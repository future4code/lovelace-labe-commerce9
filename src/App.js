import React from 'react'
import './App.css'
import styled from 'styled-components'
import ListaDeProdutos from './Componentes/Produto/ListaDeProdutos'
import CarrinhoCompras from './Componentes/Carrinho/CarrinhoCompras'
import FiltroProdutos from './Componentes/FiltroPrecos/FiltroProdutos'
//import img1 from



const Botaoabrir = styled.button`
  width: 45px;
  height: 40px;
  position: fixed;
  outline: none;
  margin: 0% 0% 0% 94.5%;
  z-index: 1000;
  &:hover {
    background-color: #B8860B;
  }
`
const Filtro = styled.section`
  display: flex;
  margin: 0% 2% 0% 1%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #D2691E;
  position: relative;
  grid-row: 2;
  grid-column: 1;
`
const ContainerPrincipal = styled.div`
  display: grid;
  grid-template-columns: 17% 83%;
  grid-template-rows: 5% 90% 5%;
  position: relative;
  height: 100vh;
  width: 100vw;
`
const Header = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #DAA520;
  position: relative;
  max-height: 100vh;
  max-width: 100vw;
  grid-row: 1;
  grid-column: 1/4;
`
const Footer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #DAA520;
  position: relative;
  max-height: 100vh;
  max-width: 100vw;
  grid-row: 3;
  grid-column: 1/4;
`




const produtosLista = [
  {
    id: 1,

    nome: 'Viagem à Lua',
    preco: 1000000,
    imagem: '/img/lua.jpeg', 
    quantidade: 3
  },
  {
    id: 2,
    nome: 'Viagem a Marte',
    preco: 2000000,
    imagem: '/img/marte.jpeg',
    quantidade: 2
  },
  {
    id: 3,
    nome: 'Viagem a Vênus',
    preco: 3000000,
    imagem: '/img/venus.jpeg',
    quantidade: 1
  },
  {
    id: 4,
    nome: 'Viagem a Júpiter',
    preco: 8000000,
    imagem: '/img/jupter.jpeg',
    quantidade: 2
  },
  {
    id: 5,
    nome: 'Viagem a Saturno',
    preco: 9000000,
    imagem: '/img/saturno.jpeg',
    quantidade: 2
  },
  {
    id: 6,
    nome: 'Viagem a Plutão',
    preco: 12000000,
    imagem: '/img/plutao.jpeg',
    quantidade: 3
  }
]


class App extends React.Component {
  state = {
    VisorAtivo: false,
    ValorMin: 0,
    ValorMax: 0,
    NomeProduto: ''
  }

  AbrirVisor = () => {
    this.setState({
      VisorAtivo: !this.state.VisorAtivo
    })
  }
  CarregarTela = () => {
    if (this.state.VisorAtivo) {
      return <CarrinhoCompras></CarrinhoCompras>
    } else return null
  }

  onChangemin = e => {
    this.setState({
      ValorMin: e.target.value
    })
  }
  onChangemax = e => {
    this.setState({
      ValorMax: e.target.value
    })
  }
  onChangename = e => {
    this.setState({
      NomeProduto: e.target.value
    })
  }

  render() {
    return (
      <ContainerPrincipal>
        <Botaoabrir className="carrinho" onClick={this.AbrirVisor}></Botaoabrir>
        {this.CarregarTela()}
        <Header>Labe-commerce 9</Header>
        <FiltroProdutos
          lista={produtosLista}
          min={this.state.ValorMin}
          max={this.state.ValorMax}
          nome={this.state.NomeProduto}
          
        />
        <Filtro>
          <h2>Filtro</h2>
          <ul>
            <input
              type="number"
              placeholder="Valor Min"
              onChange={this.onChangemin}
            ></input>
            <input
              type="number"
              placeholder="Valor Max"
              onChange={this.onChangemax}
            ></input>
            <input
              type="string"
              placeholder="Nome"
              onChange={this.onChangename}
            ></input>
          </ul>
        </Filtro>
        <Footer>Este site foi desenvolvido por Ana Beatriz, Yara Tacy e Felipe Vieira</Footer>
      </ContainerPrincipal>
    )
  }
}
export default App
