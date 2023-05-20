import React , {useState  ,useEffect } from 'react'
import "./style.scss"
import { Link, useNavigate } from 'react-router-dom'
import Img from "../../../components/lazyLoadImage/Img"
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'


const MainBanner = () => {
    const [background, setBackground] = useState("")
    const [query , setQuery] = useState('')
    const navigate = useNavigate();

    const searchQueryHandler = (event) =>{
        if (event.key==="Enter" && query.length > 0){
            navigate(`/search/${query}`)
            
        }
    }

    useEffect(() =>{
        const bg = Math.floor(Math.random()* 8)
        setBackground(bg)
        console.log(background)
    },[])

    console.log(background)

  return (
    
    <div className="heroBanner " >
        <div className="backdrop-img">
            <Img src = {`../../../../${background}bg.jpeg`} />
        </div>

        <div className="opacity-layer"></div>

        <ContentWrapper>
       

            <div className="heroBannerContent">
                <span className="title">WE TAKE CARE BECAUSE WE CARE</span>
                <span className="subtitile">We Provide Medical Services That You Can Trust!</span>
            
           
            <div className="searchInput">
                <div>
                    <Link to="/doctors">
                        <button class="button" type="button">Book an Appointment</button>
                    </Link>

                </div>
                
                
                
            
                
        </div> 
        </div>
        </ContentWrapper>
      
        
    </div>
  )
}

export default MainBanner
