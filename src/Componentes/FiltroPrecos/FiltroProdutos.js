import React from 'react'
import ListaDeProdutos from '../Produto/ListaDeProdutos'

function FiltroPodutos(props) {
  const ListaFiltrada = props.lista.filter(produtos => {
    if (produtos.preco >= props.min) {
      return true
    } else {
      return false
    }
  })

  console.log(ListaFiltrada)
  console.log(props)

  return <ListaDeProdutos produtos={ListaFiltrada} />
}

export default FiltroPodutos