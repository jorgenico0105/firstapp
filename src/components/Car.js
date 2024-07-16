import { Component } from "react";
import './styles.css'
import BubleAlert from './BubleAlert'
import DetailCar from './DetailCar'
const styles={
    bubble:{
        position:'relative',
        left:'13px',
        top:'20px'
    }
}
class Car extends Component{
    render(){
        const {carro,itsvisible ,showCar}=this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
        return(
            <div>
                <span style={styles.bubble}>
                    {cantidad !==0
                    ?<BubleAlert value={cantidad}/>
                    :null}
                </span>
               <button className="cart-button" onClick={showCar}>
                Car 
               </button>
               {itsvisible ?<DetailCar carro={carro}></DetailCar>:null}
            </div>
        )
    }
}
export default Car