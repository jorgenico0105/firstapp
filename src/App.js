import React, { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  state = {
    productos: [
      { name: 'Pancakes', price: '8.50$', img: '/productos/pancakes.jpg' },
      { name: 'Hamburguesa con papas', price: '15$', img: '/productos/hamburguer.jpg' },
      { name: 'Pasta Bolonesa', price: '12.50$', img: '/productos/pasta.jpg' },
      { name: 'Lomo con Vegetales', price: '18$', img: '/productos/lomo.jpg' },
    ],
    carro: [],
    itsvisible: false // Corregido a minúscula
  };

  addToCar = (producto) => {
    const { carro } = this.state;

    if (carro.find(x => x.name === producto.name)) {
      const newCar = carro.map(x =>
        x.name === producto.name ? { ...x, cantidad: 1 + x.cantidad } : x
      );
      return this.setState({ carro: newCar });
    }

    return this.setState({
      carro: this.state.carro.concat({ ...producto, cantidad: 1 })
    });
  };

  showCar = () => {
    if(!this.state.carro.length){
      return}
    this.setState({ itsvisible: !this.state.itsvisible }); // Corregido a minúscula
  };

  render() {
    const { itsvisible } = this.state; // Corregido a minúscula

    return (
      <div>
        <Navbar carro={this.state.carro} itsvisible={itsvisible} showCar={this.showCar} /> {/* Corregido a minúscula */}
        <Layout>
          <Title></Title>
          <Productos
            addToCar={this.addToCar}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
