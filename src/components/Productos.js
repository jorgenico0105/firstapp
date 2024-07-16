import { Component } from "react";
import Producto from './Producto'
import './styles.css'
class Productos extends Component{
    render() {
      const {productos,addToCar}=this.props
      return (
        <div className="estilo-pros">
          {productos.map(producto=>
            <Producto
            addToCar={addToCar}
            key={producto.name}
            producto={producto}
          />)}
        </div>
      )
    }
}
export default Productos