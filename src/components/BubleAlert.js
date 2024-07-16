import {Component} from "react";
const styles={
    bubblealert:{
        backgroundColor:'rgba(255,0,0,0.5)',
        borderRadius: '15px',
        color: 'white',
        padding:'2px 10px',
        fontSize:'0.8rem',
        width:'20px'
    }
}
class BubleAlert extends Component{
    getNumber(n){
        if(!n){return ' '}
        return n>9 ? '9+': n// si n es mayor a nueve ? te da ese resultado si no
    }
    render(){
        const {value}=this.props
        return(
            <span style={styles.bubblealert} >{this.getNumber(value)}</span>
        )
    }
}
export default BubleAlert
