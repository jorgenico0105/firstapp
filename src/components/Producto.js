import { Component } from "react";
import './styles.css'
import Button from './Button'
const styles={
    img:{
        width:'100%'
    }
}

class Producto extends Component{
    render(){
        const {producto,addToCar}=this.props
        return(
            <div className="style-pro">
                <img style={styles.img} alt={producto.name} src={producto.img}></img>
                <h3>{producto.name}</h3>
                <h4>{producto.price}</h4>
                <Button className="style-button" onClick={()=>addToCar(producto)}>
                    Add To Car
                </Button>
            </div>
        )
    }    
}
export default Producto