
import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Img from "../../components/lazyLoadImage/Img";
import React from "react";
import d1 from "../../assets/doc/d1.jpeg"
import d2 from "../../assets/doc/d2.jpeg"
import d3 from "../../assets/doc/d3.jpeg"
import d4 from "../../assets/doc/d4.jpeg"
import d5 from "../../assets/doc/d5.jpeg"
import { Link } from "react-router-dom";


const Doctors = () => {
    

    return (
        <div className="detailsBanner">
            
                <>
                  
                        <React.Fragment>
                            
                            <div className="opacity-layer"></div>
                            <ContentWrapper>
                                <div className="content">
                                    <div className="left">
                                            <Img
                                                className="posterImg"
                                                src={d1}
                                            />
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            Swarup Shinde
                                        </div>
                                        <div className="subtitle">
                                        Audiologists
                                        </div>
                                        <div className="overview">
                                            <div className="heading">
                                                Overview
                                            </div>
                                            <div className="description">
                                            An audiologist is a doctor who evaluates people who have hearing loss or other ear problems, reviews the findings of the examination, and provides a diagnosis. He or she assists those who suffer from tinnitus and other hearing problems. They also regularly educate patients on how to listen and converse more effectively with hearing aids, such as through lip-reading or other technologies. 
                                            </div>
                                        </div>
                                        <div>
                                              <Link to="/thanks">
                                                  <button className="button" type="button">Book Slot</button>
                                              </Link>

                                        </div>

                                    </div>
                                </div>
                                
                            </ContentWrapper>
                          
                        </React.Fragment>

        {/* second dr */}

                        <React.Fragment>
                            <ContentWrapper>
                                <div className="content">
                                    <div className="left">
                                            <Img
                                                className="posterImg"
                                                src={d2}
                                            />
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            Pratiksha Patil
                                        </div>
                                        <div className="subtitle">
                                        Cardiothoracic Surgeon
                                        </div>
                                        <div className="overview">
                                            <div className="heading">
                                                Overview
                                            </div>
                                            <div className="description">
                                            A cardiothoracic surgeon operates on the human body's chest-related organs once a cardiologist has diagnosed them. Cardiothoracic surgeons treat heart valve(s) blockages, atrial fibrillation, aneurysms of the major arteries in the chest, coronary artery disease, leaky heart valve(s), heart artery blockages, abnormal hypertrophy, and heart failure.                                            </div>
                                        </div>
                                        <div>
                                              <Link to="/thanks">
                                                  <button className="button" type="button">Book Slot</button>
                                              </Link>
                                        </div>
                                    </div>
                                </div>
                            </ContentWrapper>
                        </React.Fragment>

        {/* third dr */}

                          <React.Fragment>
                            <ContentWrapper>
                                <div className="content">
                                    <div className="left">
                                            <Img
                                                className="posterImg"
                                                src={d3}
                                            />
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            Sanket Patil
                                        </div>
                                        <div className="subtitle">
                                        Dentist
                                        </div>
                                        <div className="overview">
                                            <div className="heading">
                                                Overview
                                            </div>
                                            <div className="description">
                                            Dental courses prepare students for a career that focuses on the health of the teeth, gums, and other tissues in and around the mouth. Dentistry refers to dental operations that are undertaken to prevent oral diseases. Candidates who complete a dental program might work in research or for the Indian Army, Navy, or Air Force. MDS graduates have the opportunity to open their own specialized clinics.                                        </div>
                                        <div>
                                              <Link to="/thanks">
                                                  <button className="button" type="button">Book Slot</button>
                                              </Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </ContentWrapper>
                        </React.Fragment>

        {/* fourth dr  */}
                          <React.Fragment>
                            <ContentWrapper>
                                <div className="content">
                                    <div className="left">
                                            <Img
                                                className="posterImg"
                                                src={d4}
                                            />
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            Shweta Ligade
                                        </div>
                                        <div className="subtitle">
                                        Neurologists
                                        </div>
                                        <div className="overview">
                                            <div className="heading">
                                                Overview
                                            </div>
                                            <div className="description">
                                            A neurologist's clinical responsibilities include providing clinical assistance to patients suffering from seizure disorders, epilepsy, stroke, multiple sclerosis, neuromuscular diseases, myasthenia gravis, or other nervous system illnesses. Examples include encephalitis, meningitis, and brain abscesses.                                        <div>
                                              <Link to="/thanks">
                                                  <button className="button" type="button">Book Slot</button>
                                              </Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </ContentWrapper>
                        </React.Fragment>

            {/* fifth dr  */}

            <React.Fragment>
                            <ContentWrapper>
                                <div className="content">
                                    <div className="left">
                                            <Img
                                                className="posterImg"
                                                src={d5}
                                            />
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            Swapnil Patil
                                        </div>
                                        <div className="subtitle">
                                        Oncologists
                                        </div>
                                        <div className="overview">
                                            <div className="heading">
                                                Overview
                                            </div>
                                            <div className="description">
                                            Oncologists are physicians that evaluate, diagnose, and treat cancer patients using a range of treatments as well as medical and surgical care. Oncology subspecialties include medical oncology, gynecological oncology, pediatric oncology, radiation, surgical oncology, and hematology. Medicinal oncologists use immunotherapeutic, chemotherapeutic, and medicinal therapy to treat cancer.                                              
                                            <div>
                                              <Link to="/thanks">
                                                  <button className="button" type="button">Book Slot</button>
                                              </Link>

                                        </div>
                                        
                                    
                                </div>
                              </div>
                              </div>
                              </div>
                              
                            </ContentWrapper>
                        </React.Fragment>
                </>
        </div>
    );
};

export default Doctors;