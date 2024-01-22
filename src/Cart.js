import React from 'react'
import CartItem from './CartItem';

const Cart = (props) => {
//   constructor(){
//     super();
//     this.state = {
//         products:[{
//           price : 999,
//         title : 'Watch',
//         qty  :1,
//         img :'',
//         id:1
//         },{
//           price : 999,
//         title : 'Phone',
//         qty  :10,
//         img :'',
//         id:2
//         },
//       {
//         price : 999,
//         title : 'Ipad',
//         qty  :3,
//         img :'',
//         id:3
//       }]
//     }
    
// }
// handleIncreaseQuantity = (product)=>{
//   console.log('Hey please inc the qty of',product);
//   const { products } = this.state;
//   const index = products.indexOf(product);

//   products[index].qty += 1;

//   this.setState({
//      products
//   })}
//   handleDecreaseQuantity = (product)=>{
//     console.log('Hey please decrease the qty of',product);
//     const { products } = this.state;
//     const index = products.indexOf(product);

//     if(products[index].qty === 0){
//       return;
//     }
  
//     products[index].qty -= 1;
  
//     this.setState({
//        products
//     })
// }
// handleDeleteProduct = (id) =>{
//   const { products } = this.state;

//   const items = products.filter((item) => item.id !== id);

//   this.setState({
//     products:items
//   })
// }
   
      const {products} = props;
        return (
          <div className='cart'>
            {products.map((product)=>{
              return(
               <CartItem product = {product} 
              key={product.id}
              onIncreaseQuantity= {props.onIncreaseQuantity}
              onDecreaseQuantity= {props.onDecreaseQuantity}
              onDeleteProduct = { props.onDeleteProduct}
              >
              
                
              </CartItem>
              )
               
            })}
          </div>
        );
    }

export default Cart;
