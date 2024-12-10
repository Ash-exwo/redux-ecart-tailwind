import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'

const Home = ()=>{
  const dispatch = useDispatch()
  const {allProducts,loading,error} = useSelector(state=>state.productReducer)
  // console.log(allProducts,loading,error);
  const [currentPage,setCurrentPage] = useState(1)
  const productPerPage = 8
  const totalPage = Math.ceil(allProducts?.length/productPerPage)
  const currentPageLastProductIndex = currentPage * productPerPage
  const currentPageFirstProductIndex = currentPageLastProductIndex - productPerPage
  const visibleProductCrads = allProducts?.slice(currentPageFirstProductIndex,currentPageLastProductIndex)
  
  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])

  const navigateToNextPage =()=>{
    if(currentPage!=totalPage){
      setCurrentPage(currentPage+1)
    }
  }

  const navigateToPreviousPage =()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

  return (
    <>
    <Header insideHome={true}/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
      {
        loading ?
        <div className='flex justify-center items-center my-5 text-lg'>
          <img width={'50px'} height={'50px'} className='me-2' src="https://media.tenor.com/_62bXB8gnzoAAAAj/loading.gif" alt="loading" /> Loading...
        </div>
        :
        <>
         <div className="grid grid-cols-4 gap-4">
          {
            allProducts?.length>0 ?
            visibleProductCrads?.map(product=>(
              <div key={product?.id} className="rounded border p-2 shadow">
            <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
            <div className="text-center">
              <h3 className='text-xl font-medium'>{product?.title}</h3>
              <Link to={`${product?.id}/view`} className='text-orange-500 mt-1 p-1 inline-block'>View More...</Link>
            </div>
          </div>
            ))
            :
            <div className='flex justify-center items-center my-5 text-lg text-orange-500'>Product Not Found!!!</div>
          }
          </div> 
          <div className="text-center mt-20">
            <span onClick={navigateToPreviousPage} className='cursor-pointer'><i className="fa-solid fa-backward me-5"></i></span>
            <span>{currentPage} of {totalPage}</span>
            <span onClick={navigateToNextPage} className='cursor-pointer'><i className="fa-solid fa-forward ms-5"></i></span>
          </div>
      </>
      }
      </div>
    </>
  )
}

export default Home