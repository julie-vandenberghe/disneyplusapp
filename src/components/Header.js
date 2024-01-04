import React from 'react'

const Header = () => {    
    return (
        <header>
            <div className="container">
                <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo Disney +" />
            </div>
        </header>
    )
  }
  
  export default Header