import { Component } from "react";
const styles={
    ul:{
        margin:0,
        padding:0,
    },
    li:{
        listStyle:'none',
        display:'flex',   
        justifyContent:'space-between',
        alignItems:'center',
        padding:'25px 20px',
        borderBottom:'solid 1px #aaa'
    }
}
class DetailCar extends Component{
    render(){
        const {carro}=this.props
        return(
            <div className="Car-details">
                <ul style={styles.ul}>
                    {carro.map(x=><li style={styles.li} key={x.name}><img alt={x.name} src={x.img} width='50px' height='32px'/>{x.name}
                    <span>{x.cantidad}</span></li>)}
                </ul>
            </div>
        )
    }
}
export default DetailCar