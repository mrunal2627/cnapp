import React from 'react'

const CartItem = (props) =>  {
    // constructor(){
    //     super();
    //     this.state = {
    //         price : 999,
    //         title : 'Phone',
    //         qty  :1,
    //         img :''
    //     }
    //     this.testing();
    // }

    // testing () {
    //   const promise = new Promise((resolve,reject) =>{
    //     setTimeout(() =>{
    //         resolve('done');
    //     },5000);
    //   })
    //   promise.then(()=>{
    //     this.setState({qty : 100});
    //     console.log('state', this.state)
    //   });
    // }

    // increaseQuantity =() => {
    //     // this.state.qty += 1;
    //     // console.log('this',this.state)
    //     // this.setState({
    //     //     title : "Some new things"
    //     // })
    //     this.setState((prevState)=>{
    //         return {
    //             qty : prevState.qty + 1
    //         }
    //     })
    // }
    // decreaseQuantity () {
    //     // this.state.qty += 1;
    //     // console.log('this',this.state)
    //     const {qty} = this.state;
    //     if (qty === 0){
    //         return;
    //     }
    //     this.setState({
    //         title : "Some new things"
    //     })
    //     this.setState((prevState)=>{
    //         return {
    //             qty : prevState.qty - 1
    //         }
    //     })
 
        // console.log('this.props', this.props)
        const {price,title,qty}=props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity,onDeleteProduct}= props;
        return (
            <div className="cart-item">
                {props.jsx}
                <div className="left-block">
                    <img style={ styles.image} src={product.img} alt=''/>

                </div>
                <div className='right-block'>
                    <div style = { {fontSize : 25}}>{title}</div>
                    <div style = { { Color:'#777'}}>Cost : {price}</div>
                    <div style = { { Color:'#777'}}>Quantity : {qty}</div>
                    <div className='cart-item-actions'>
                        {/*Buttons */}
                        <img alt="increase" className='action-icons' 
                        src="https://cdn-icons-png.flaticon.com/128/10308/10308038.png"
                            onClick={()=>onIncreaseQuantity(product)}>
                        </img>
                        <img alt="decrease" className='action-icons' 
                        src="https://cdn-icons-png.flaticon.com/128/2569/2569198.png" 
                        onClick={()=>onDecreaseQuantity(product)}>
                        </img>
                        <img alt="delete" className='action-icons'
                         src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
                            onClick = {()=> onDeleteProduct(product.id)}>
                         </img>
                    </div>
                </div>
            </div>
        )
    }
 

const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        background : '#ccc'
    }
}
export default CartItem;
