import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


const Thanks = () => {
  return (
 
    <div>
        <div className="demos">
          <div className="box basic-drop-shadow">
            Thank you for reaching out to me about this opportunity. I
            appreciate the information and will take it under consideration.

            <div>
            <Link to="/">
                <button class="button" type="button">Go to Home</button>
            </Link>

        </div>
          </div>
          
        </div>
      </div>

  )
}

export default Thanks
