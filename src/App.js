import './App.css';
import { Component } from 'react';
import { Cabeca } from './components/Cabeca';
import { Corpo } from './components/Corpo';
import { Rodape } from './components/Rodape';

class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){
    const {odas} = this.state;

    return(
      <section className="container">
        
       <Cabeca
          pesquisa={this.state.busca}
          buscaODA={this.buscaODA}
       />

      <Corpo
        resultado={odas}
      ></Corpo>
      <Rodape/>
      </section>
    )
  }

}

export default App;
