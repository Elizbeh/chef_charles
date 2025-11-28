import React, { useEffect } from 'react'
import './Header.css'

import Logo from "../assets/logo.png"


const Header = () => {

  useEffect(() =>{
    if(!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {pageLanguage: "en"},
          "google_translate_element"
        );
      };

      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [])
  return (
    <header className='header'>
        <div className='header-container'>
          <img className='logo' src={Logo} alt="Logo" />
          <h1 className='app-name'>Chef Charles</h1>

        </div>
        {/* Google Translate widget */}
        <div id="google_translate_element"></div>
    </header>
  )
}

export default Header
