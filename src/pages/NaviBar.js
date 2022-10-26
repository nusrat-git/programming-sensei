import { Avatar, Button, Navbar, Tooltip } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../src/logo.png'
import { AuthContext } from '../contexts/UserContext';
import { MdDarkMode } from 'react-icons/md'

const NaviBar = () => {
    const { user, logOut, setUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }
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
                    <div className='md:flex hidden gap-5'>
                        <>
                            {
                                user?.uid ?
                                    <>

                                        <div className="flex gap-2 items-center">

                                            <Tooltip content={user?.displayName}>

                                                <Avatar
                                                    img={user?.photoURL}
                                                    rounded={true}
                                                    bordered={true}
                                                />


                                            </Tooltip>
                                        </div>

                                        <Button variant="light" onClick={handleLogOut}><Link>Log out</Link></Button>
                                    </>
                                    :
                                    <>
                                        <Button className='mr-7'>
                                            <Link to='/login'>Log In</Link>
                                        </Button>
                                        <Button>
                                            <Link to='/signup'>Sign Up</Link>
                                        </Button>
                                    </>
                            }


                        </>
                    </div>

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
                    <Link>
                        <MdDarkMode></MdDarkMode>
                    </Link>
                    <div className='md:hidden'>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}><Link>Log out</Link></Button>
                                    </>
                                    :
                                    <>
                                        <Button className='my-4 md:my-0 w-full'>
                                            <Link to='/login'>Log In</Link>
                                        </Button>
                                        <Button className='w-full'>
                                            <Link to='/signup'>Sign Up</Link>
                                        </Button>
                                    </>
                            }


                        </>
                    </div>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NaviBar;