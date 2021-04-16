import React,{Component} from 'react';
import Car from './cars';
import Navbar from './Navbar'
import FirstComponent from './FisrtComponent';

class Mycars extends Component{
    render(){
        return (
            <div style={{borderStyle: 'solid'}}>
                <Navbar></Navbar>
             <h1 style={{backgroundColor:'red'}}>Car Catalog</h1>
             <Car color='red'  price='25000$'>Ford</Car>
             <Car color='black'  price='30000$'>Peugeot</Car>
             <Car color='green'  price='20000$'>BMW</Car>
             <h1>Add to Catalog</h1>
             <FirstComponent></FirstComponent>        
            </div>
        )
    }
}
export default Mycars;