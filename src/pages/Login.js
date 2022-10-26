import { Alert, Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import { AiFillInfoCircle } from 'react-icons/ai'

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { signIn, setLoading, setUser } = useContext(AuthContext)


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailValue = (event) => {
        const emailInputValue = event.target.value;
        setEmail(emailInputValue)
    }

    const handlePasswordValue = (event) => {
        const passwordInputValue = event.target.value;
        setPassword(passwordInputValue)
    }


    const handleSignIn = (event) => {
        event.preventDefault();

        signIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div className='m-4 pt-5 md:m-0 md:pt-0 bg-slate-200 p-5 md:p-9 rounded-lg md:mt-10'>
            <form className="flex flex-col gap-4 md:w-96 mx-auto md:p-9">
                <div>
                    <div className="mb-2 block text-start ml-2">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="Your Email"
                        required={true}
                        onBlur={handleEmailValue}
                    />
                </div>
                <div>
                    <div className="mb-2 block  text-start ml-2">
                        <Label
                            htmlFor="password1"
                            value="Your password"

                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required={true}
                        placeholder='Your Password'
                        onBlur={handlePasswordValue}
                    />
                </div>

                <div className=' text-start ml-2'>
                    <h1>Don't have an account? <Link to='/signup' className=' underline'>Sign Up</Link> </h1>
                </div>
                <div>
                    {
                        error ?
                            <>
                                <Alert
                                    color="failure"
                                    icon={AiFillInfoCircle}
                                >
                                    <span>
                                        {error}
                                    </span>
                                </Alert>
                            </> 
                            :
                            <>
                              <span>Please Log In</span>
                            </> 

                    }


                </div>
                
                    <Link><Button type="submit" onClick={handleSignIn} className=" w-full">Log In</Button></Link>
                
            </form>
        </div>
    );
};

export default Login;