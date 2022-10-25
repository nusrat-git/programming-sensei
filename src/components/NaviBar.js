import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../src/logo.png'

const NaviBar = () => {
    return (
        <div className='m-5'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand to="https://flowbite.com/">
                    <img
                        src={Logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="Progamming Sensei Logo"
                    />
                    <span className="self-center whitespace-nowrap font-semibold italic text-3xl dark:text-white">
                        Sensei
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2 gap-2">
                    <Button>
                        <Link to='/login'>Log In</Link>
                    </Button>
                    <Button>
                        <Link to='/signup'>Sign Up</Link>
                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link
                        to="/home"
                        active='true'
                    >
                        Home
                    </Link>
                    <Link to="/classes">
                        Classes
                    </Link>
                    <Link to="/blogs">
                        Blogs
                    </Link>
                    <Link to="/faq">
                        FAQ
                    </Link>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NaviBar;