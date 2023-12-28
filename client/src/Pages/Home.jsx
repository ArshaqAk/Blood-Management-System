import React, { useEffect, useState } from 'react'
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom'
import Home_image from '../Assets/Home-image.png'
import Header from '../Components/Header'
import { useSelector } from 'react-redux'

function Home() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])

  const [isLoggedIn,setIsLoggedIn]=useState(false)    //to hold login status
  useEffect(()=>{
    if(localStorage.getItem("token")){
      setIsLoggedIn(true)
    }
    else{
      setIsLoggedIn(false)
    }
  },[])
  return (
    <>
    <Header/>
    <div className="container-fluid main-home">
    <div className="row m-4 shadow rounded">
        <div className="col-md-6 col-sm-12 p-3">
          <div className='m-5 p-3'>
            <div className='animated-text'>
              Discover <span></span>
            </div>
            <h5>"You have not lived today until you have done something for someone who can never repay you"</h5>
            <Link to={'/register'}>
              {
                isLoggedIn?
                <button className='btn btn-dark mt-2'>Explore</button>
                :
                <button className='btn btn-dark mt-2'>Register</button>
              }
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className='p-2 m-4'>
            <img className='home-image' src={Home_image} alt="" />
          </div>
        </div>

      </div>

      {/* <hr /> */}
      <div className="row  p-3 shadow" style={{marginTop:'80px'}}>
        <div className="col-sm-12 col-md-6 quote-box">
        <div className='animation p-3 shadow text-center' style={{borderBottom:'solid 1px black'}} data-aos="fade-up">
          <h5>"Wherever a man turns he can find someone who needs him."</h5>
          <hr/>
            <h6 className='text-end'>-Albert Schweitzer</h6>
        </div>
        </div>

        <div className="col-sm-12 col-md-6 quote-box">
        <div className='animation p-3 shadow text-center' data-aos="fade-up">
        <h5>"It's not how much we give but how much love we put into giving.."</h5>
        <hr/>
            <h6 className='text-end'>-Mother Theresa</h6>
        </div>
        </div>

      </div>

      {/* second row */}
      <div className="row m-4 p-3 shadow">
        <div className="col-sm-12 col-md-6 quote-box">
        <div className='animation p-3 shadow text-center' data-aos="fade-right">
          <h5>"There is no exercise for the heart than reaching down and lifting people up"</h5>
          <hr/>
            <h6 className='text-end'>-John Holmes</h6>
        </div>
        </div>

        <div className="col-sm-12 col-md-6 quote-box">
        <div className='animation p-3 shadow text-center'  style={{borderBottom:'solid 1px black'}} data-aos="fade-left">
        <h5>"The simplest acts of kindness are by far more powerful then a thousand heads bowing in prayer"</h5>
        <hr/>
            <h6 className='text-end'>-Mahatma Gandhi</h6>
        </div>
        </div>

      </div>


            {/* Third row */}
            <div className="row m-4 p-3 shadow">
        <div className="col-sm-12 col-md-6 quote-box">
        <div className='animation p-3 shadow text-center'  style={{borderBottom:'solid 1px black'}} data-aos="fade-left">
          <h5>"We only have what we give.."</h5>
          <hr/>
            <h6 className='text-end'>-Isabel Allende</h6>
        </div>
        </div>

        <div className="col-sm-12 col-md-6 quote-box">
        <div className='animation p-3 shadow text-center' data-aos="fade-right">
        <h5>"Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness."</h5>
        <hr/>
            <h6 className='text-end'>-AMartin Luther King, Jr</h6>
        </div>
        </div>

      </div>



    </div>
    </>
  )
}

export default Home