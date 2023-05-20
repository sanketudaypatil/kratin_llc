import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Img from '../../../components/lazyLoadImage/Img'
import { Link } from 'react-router-dom'
import "./style.scss"

import women from "../../../assets/women.jpeg" 
const Features = () => {
  return (
    
      <ContentWrapper>
        <div className='sections'>
          <div className='container'>
            <div className="row">
              <div className="discription">
                <h1 className="section-heading">
                  Womens Health and Physiotherapy
                </h1>
                <p className="section-description">We are here to help women of all ages gain and maintain their health, so they can live their best lives.
                </p>
                <div>
                  <Img src={women} alt="sank" className= "section-img" />
                </div>
                <Link to="/doctors">
                    <button class="button" type="button">Book an Appointment</button>
                </Link>

              </div>
              <div>
                  <Img src={women} alt="sank" className= "section-img medium" />
              </div>
            </div>

          </div>
        </div>
      </ContentWrapper>

   
  )
}

export default Features
