import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'250px',marginTop:'100px'}} className='mt-5 w-full bg-orange-500 text-white p-4'>
    <div className="flex justify-between">
      <div style={{width:'400px'}} className="intro">
        <h5 className='text-xl font-bold'><i className="fa-solid fa-truck-fast me-2"></i>E Cart</h5>
        <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors</p>
        <p>Code licenced Luminar, docs CC BY 3.0.</p>
        <p>Currently v5.3.2.</p>
      </div>
      <div className="flex flex-col">
        <h5 className='font-bold'>Links</h5>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
        <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
        <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
      </div>
      <div className="flex flex-col">
        <h5 className='font-bold'>Guides</h5>
        <a href='https://react.dev/' style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
        <a href='https://react-bootstrap.github.io/' style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
        <a href='https://reactrouter.com/en/main' style={{textDecoration:'none',color:'white'}} target='_blank'>React Router</a>
      </div>
      <div className="flex flex-col">
        <h5 className='font-bold'>Contact Us</h5>
        <div className="flex">
          <input type="text" placeholder='Enter your Email ID' className='rounded p-1' />
          <button className='btn btn-info ms-2'><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="icons flex justify-between mt-3 ">
      <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-twitter"></i></a>
      <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-instagram"></i></a>
      <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-facebook"></i></a>
      <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-linkedin"></i></a>
      <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-github"></i></a>
      <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-solid fa-phone"></i></a>
      </div>
      </div>
    </div>
    <p className='text-center mt-3 text-white'>Copyright &copy; June 2024 Batch,E Cart, Built with React.</p>
  </div>

  )
}

export default Footer