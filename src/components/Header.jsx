import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { serachProduct } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {
  const userCart = useSelector(state=>state.cartReducer)
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
  return (
    <nav className='flex bg-orange-500 fixed w-full p-5'>
      <Link className='text-xl text-white font-bold' to={'/'}><i className='fa-solid fa-truck-fast me-1'></i>ECart</Link>
      <ul className='flex-1 text-right'>
        { insideHome && <li className='list-none inline-block px-5'><input onChange={e=>dispatch(serachProduct(e.target.value.toLocaleLowerCase()))} className='rounded p-1' style={{width:'300px'}} placeholder='Search products here' type="text" /></li>}
        <li className='list-none inline-block px-5 text-white font-medium'><Link to={'/wishlist'}><i className="fa-solid fa-heart"></i> Wishlist <span className='rounded bg-orange-600 p-1'>{userWishlist?.length}</span></Link></li>
        <li className='list-none inline-block px-5 text-white font-medium '><Link to={'/cart'}><i className="fa-solid fa-cart-plus"></i> Cart <span className='rounded bg-orange-600 p-1'>{userCart?.length}</span></Link></li>
      </ul>
    </nav>
  )
}

export default Header