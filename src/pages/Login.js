import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/UserContext';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const {signIn,setLoading} = useContext(AuthContext)


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailValue = (event) => {
        const emailInputValue = event.target.value;
        setEmail(emailInputValue)
    }

    const handlePasswordValue = (event) => {
        const passwordInputValue = event.target.value;
        setPassword(passwordInputValue)
    }


    const handleSignIn = () => {
        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            if(user){
                navigate(from, {replace: true});
            }
            else{
                toast.error('Please Log In')
            }
        })
        .catch(error => console.error(error))
        .finally(() => {
            setLoading(false);
        })
    }
    

    return (
        <div className=''>
            <form className="flex flex-col gap-4 md:w-96 mx-auto">
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
                <Button type="submit">
                    <Link onClick={handleSignIn}>Submit</Link>
                </Button>
            </form>
        </div>
    );
};

export default Login;