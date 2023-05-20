import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Img from '../../../components/lazyLoadImage/Img'
import { Link } from 'react-router-dom'
import "./style.scss"

import women from "../../../assets/child.jpeg" 
const Features = () => {
  return (
    
      <ContentWrapper>
        <div className='sections'>
          <div className='container'>
            <div className="row">
              <div className="discription">
                <h1 className="section-heading">
                Children's Health
                </h1>
                <p className="section-description">We’re here to help families to support their children who need physiotherapy, dietetics, bowel and bladder support.
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
