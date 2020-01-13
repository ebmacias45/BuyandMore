import React from 'react';
import axios from 'axios';



export default class ProductsList extends React.Component {
    
    state = 
    {
      products: []
    }


     componentDidMount() {
      axios.get(`https://localhost:44337/api/Products`)
        .then(res => {
          const products = res.data;
          this.setState ({products : products})

          
        })
        
    }
  
    render() {
      return (
       <div>
         <ul>
           <li>{this.state.products.map(product => product.name)}</li>
           <li>{this.state.products.map(product => product.price)}</li>
         </ul>

         
         
         

        </div>
      )
    }
  }