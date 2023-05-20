import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


const PageNotFound = () => {
  return (
 
    <div>
        <div className="demos">
          <div className="box basic-drop-shadow">
            Thank you for reaching out. Page is in working condition!

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

export default PageNotFound
