import React from 'react'
import "./style.scss"

const Solution = () => {

  return (
    <div>
    
    <section className="cards-wrapper">
            <div className="card-grid-space">
                <div className="num"></div>
                <a className="card" href="https://en.wikipedia.org/wiki/Primary_care" >
                <div>
                    <h1>Primary care</h1>
                    <p>Your Family Doctor is the best person to give you the Primary Care for your simple medical problems.

                    </p>
                    
                    <div className="tags">
                    <div className="tag">Read More</div>
                    </div>
                </div>
                </a>
            </div>

            <div className="card-grid-space">
                <div className="num"></div>
                <a className="card" href="https://en.wikipedia.org/wiki/Intensive_care_unit" >
                <div>
                    <h1>Intensive Care Unit –ICU</h1>
                    <p>Medical ICU- dedicated to Multiorgan Dysfunction support.
                        Medical ICU- dedicated to Infectious Diseases.</p>
                    <div className="date"></div>
                    <div className="tags">
                    <div className="tag">Read More</div>
                    </div>
                </div>
                </a>
            </div>

            <div className="card-grid-space">
                <div className="num"></div>
                <a className="card" href="https://en.wikipedia.org/wiki/Internal_medicine" >
                <div>
                    <h1>Internal Medicine</h1>
                    <p>A proper DIAGNOSIS using CLINICAL METHODS and appropriate 
                        INVESTIGATIONS forms the backbone of PROPER TREATMENT</p>
                    <div className="date"></div>
                    <div className="tags">
                    <div className="tag">Read More</div>
                    </div>
                </div>
                </a>
            </div>
  
    </section>
</div>

  )
}

export default Solution
