import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../redux/slices/cartSlice'

const Cart = ()=>{
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userCart = useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal] = useState(0)

  useEffect(()=>{
    if(userCart?.length>0){
      setCartTotal((userCart?.map(item=>item.totalPrice))?.reduce((a,b)=>a+b))
    }
  },[userCart])

  const handleDecrementQuantity = (product)=>{
    if(product.quantity>1){
    dispatch(decQuantity(product))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const handleCheckout = ()=>{
    dispatch(emptyCart())
    alert("Order confirmed...Thank you for purchasing with us!!!")
    navigate('/')
  }

  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
      {
        userCart?.length>0?
        <>
      <h1 className="text-5xl text-orange-500">Cart Summary</h1>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="col-span-2 border rounded shadow p-5">
          {/* table */}
          <table className='table-auto w-full'>
            <thead>
              <tr>
                <td className='font-semibold'>#</td>
                <td className='font-semibold'>Name</td>
                <td className='font-semibold'>Image</td>
                <td className='font-semibold'>Quantity</td>
                <td className='font-semibold'>Price</td>
                <td className='font-semibold'>...</td>
              </tr>
            </thead>
            <tbody>
             { userCart?.map((product,index)=>(
              <tr key={product?.id}>
              <td>{index+1}</td>
              <td>{product?.title}</td>
              <td><img width={'70px'} height={'70px'} src={product?.thumbnail} alt="" /></td>
              <td>
                <div className="flex">
                  <button onClick={()=>handleDecrementQuantity(product)}>-</button>
                  <input style={{width:'40px'}} value={product?.quantity} readOnly className='border rounded ms-2 me-3 p-1' type="text" />
                  <button onClick={()=>dispatch(incQuantity(product))}>+</button>
                </div>
              </td>
              <td>$ {product?.totalPrice}</td>
              <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='text-orange-500'><i className="fa-solid fa-trash"></i></button></td>
              </tr>
             ))
             }
            </tbody>
          </table>
          <div className="float-right mt-4">
            <button onClick={()=>dispatch(emptyCart())} className='bg-orange-500 text-white rounded p-2 me-3'>Empty Cart</button>
            <Link to={'/'} className='bg-orange-500 text-white rounded p-2'>Shop More</Link>
          </div>
        </div>
        <div className="col-span-1 border rounded shadow p-5">
        {/* checkout */}
        <h1 className='text-2xl'>Total Amount : <span className='text-orange-500'>${cartTotal}</span></h1>
        <hr />
        <button onClick={handleCheckout} className='w-full bg-green-600 rounded p-5 text-white mt-5 text-xl'>Checkout</button>
        </div>
      </div>
      </>
      :
      <div className='flex flex-col justify-center items-center'>
      <img className='w-100 h-96' src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="empty cart" />
      <h1 className='text-orange-800 font-medium text-xl my-5'>Your Cart is Empty!!!</h1>
    </div>
      }
    </div>
    </>
  )
}

export default Cart