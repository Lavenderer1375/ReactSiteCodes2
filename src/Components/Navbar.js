import React, {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';





function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
         <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                 ReactSite<i class="fab fa-react"></i>
                </Link>
            {/* <div className='icons'>    
                <Link to='https://www.facebook.com' className='fb-logo'>
                <i class="fab fa-facebook"></i>
                </Link>
                <Link to='https://www.twitter.com' className='tt-logo'>
                <i class="fab fa-twitter-square"></i>
                </Link>
                <Link to='https://www.youtube.com' className='ut-logo'>
                <i class="fab fa-youtube"></i>
                </Link>
            </div>     */}
            <div className='searchbox'>
                <form>
                <input type='search' name='search' placeholder='Search Here' className='search-input'/>
                <Button buttonStyle='btn--outline btn--navbar'>Search</Button>
                </form>
            </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/LifeStyle' className='nav-links' onClick={closeMobileMenu}>
                            LifeStyle
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/SignUp' className='nav-links-mobile' onClick={closeMobileMenu}>
                            SignUp
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
         </nav>
        </>
    )
}

export default Navbar
