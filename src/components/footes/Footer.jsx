import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    <p>About Kratin</p>
                    Established in 2011, Kratin is a healthcare-focused company enabling transformative changes with wide spectrum of solutions across care continuum for care consumer and care team.
                    Our team is passionate about bringing positive change to the people's lives using their wide technical expertise and experience. Living with cutting edge technologies, we love to seek new challenges bringing growth opportunities for our clients with the right solutions.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <Link href="https://www.facebook.com/KratinMobile"><FaFacebookF /></Link>
                    </span>
                    <span className="icon">
                    <Link href="https://www.instagram.com/"><FaInstagram /></Link>
                        
                    </span>
                    <span className="icon">
                    <Link href="https://twitter.com/kratinmobile"><FaTwitter /></Link>
                        
                    </span>
                    <span className="icon">
                        <Link to="https://www.linkedin.com/company/kratin-software-solutions/">
                        
                    <FaLinkedin />
                    </Link>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;