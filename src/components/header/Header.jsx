import React from 'react';
import Navbar from '../navbar/NavBar';
import Search from '../search/Search';
import './Header.css';

const Header = () => {
    return (
        <div className="holder">
            <header className="header">
                <Navbar />
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className="header-title text-capitalize">What is your favourite book?</h2>
                    <br />
                    <p className="header-text fs-18 fw-3">
                        “A reader lives a thousand lives before he dies, said Jojen. The man who
                        never reads lives only one.” ― George R.R. Martin, <i>A Dance with Dragons</i>
                    </p>
                    <Search />
                </div>
            </header>
        </div>
    );
};

export default Header;
