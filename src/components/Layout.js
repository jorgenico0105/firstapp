import { Component } from "react";
import './styles.css'
class Layout extends Component{
    render(){
        return(
            <div className="layout-f">
                <div className="layout-s">
                    {this.props.children}
                </div>
            </div>
        ) 
    }
}

export default Layout