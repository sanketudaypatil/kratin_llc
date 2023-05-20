import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/logos.png";


const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
   
  
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide");
            } else {
                setShow("show");
            }
        } else {
            setShow("top");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    

    

    const openMobileMenu = () => {
        setMobileMenu(true);
       
    };

    const navigationHandler = (type) => {
      switch (type){
        case "/":
          navigate("/")
          break
        case "solution":
          navigate("/solution")
          break
        case "about_us":
          navigate("about_us")
          break
        case "contact_us":
          navigate("contact_us")
          break

      }
        
        setMobileMenu(false);
    };

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            <ContentWrapper>
                <div className="logo" onClick={() => navigate("/")}>
                    <img src={logo} alt="" />
                </div>
                <ul className="menuItems">
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("/")}
                    >
                        Home
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("solution")}
                    >
                        Solution
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("about_us")}
                    >
                        About Us
                    </li>

                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("contact_us")}
                    >
                        Contact Us
                    </li>
                    
                    
                </ul>

                <div className="mobileMenuItems">
                    
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMobileMenu} />
                    )}
                </div>
            </ContentWrapper>
            
        </header>
    );
};

export default Header;