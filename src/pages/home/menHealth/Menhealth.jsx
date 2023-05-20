import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Img from '../../../components/lazyLoadImage/Img'
import { Link } from 'react-router-dom'
import "./style.scss"

import men from "../../../assets/men.jpeg"

const Features = () => {
  return (
    
      <ContentWrapper>
        <div className='sections'> 
          <div className='container'>
            <div className="row">
            <div>
                  <Img src={men} alt="sank" className= "section-img medium" />
              </div>
              <div className="discription">
                <h1 className="section-heading">
                Mens Health 
                </h1>
                <p className="section-description">We’re here to help men of all ages to take charge of their health and their life.
                </p>
                <div>
                  <Img src={men} alt="sank" className= "section-img" />
                </div>
                <Link to="/doctors">
                    <button class="button" type="button">Book an Appointment</button>
                </Link>

              </div>
              
            </div>

          </div>
        </div>
      </ContentWrapper>

   
  )
}

export default Features
