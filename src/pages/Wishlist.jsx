import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wishlist = ()=>{
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)

  const handleCart = (product)=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item => item.id == product.id)
    dispatch(removeWishlistItem(product.id))
    if (existingProduct) {
      alert('Product quantity is incrementing!!!')
    }
  }

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>
        {
          userWishlist?.length >0?
            <>
              <h1 className="text-5xl text-orange-500">My Wishlist</h1>
              <div className="grid grid-cols-4 gap-4 mt-5">
                {
                  userWishlist?.map(product => (
                    <div key={product?.id} className="rounded border p-2 shadow">
                      <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                      <div className="text-center">
                        <h3 className='text-xl font-medium'>{product?.title}</h3>
                        <div className="flex justify-evenly mt-3">
                          <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className="text-xl"><i className="fa-solid fa-heart-circle-xmark text-orange-500"></i></button>
                          <button onClick={()=>handleCart(product)} className="text-xl"><i className="fa-solid fa-cart-plus text-orange-500"></i></button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </>
            :
            <div className='flex flex-col justify-center items-center'>
              <img className='w-100 h-96' src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="empty cart" />
              <h1 className='text-orange-800 font-medium text-xl my-5'>Your Wishlist is Empty!!!</h1>
            </div>
        }
      </div>
    </>
  )
}

export default Wishlist