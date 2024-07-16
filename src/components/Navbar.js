import { Component } from "react";
import Logo from './Logo'
import Car from './Car'
import './styles.css'
class Navbar extends Component{
    render(){
        const{carro,itsvisible ,showCar}=this.props
        return(
            <nav className="navbar">
                <Logo> </Logo>
                <Car carro={carro}
                itsvisible={itsvisible}
                showCar={showCar}
                ></Car>
            </nav>
        )
    }
}
export default Navbar;