import { Component } from "react";

class Button extends Component {
    render(){
        return(
            <button {...this.props}/>//pasa otodas las propiedades de button
        )
    }
}
export default Button