import React from 'react';
import Logo from './logo.svg'
import drop from './drop.svg'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <h1 className="header__title">
                        <img src={Logo} alt=""/>
                        React weather
                    </h1>
                    <div className="header__right">
                        <img src={drop} alt=""/>
                        <input className='header__right-search' placeholder='Поиск города' type="search"/>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;