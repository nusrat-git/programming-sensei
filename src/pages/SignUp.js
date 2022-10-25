import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle, AiOutlineGithub } from 'react-icons/ai'
import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { popUpSignIn, emailPasswordSignIn } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        popUpSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        popUpSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    const handleEmailValue = (event) => {
        const emailInputValue = event.target.value;
        setEmail(emailInputValue)
    }
    console.log(email);
    const handlePasswordValue = (event) => {
        const passwordInputValue = event.target.value;
        setPassword(passwordInputValue)
    }
    console.log(password);

    const handleEmailPasswordSignIn = (event) => {

        emailPasswordSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))

        // const form = event.target;
        // console.log('clicked');

    }



    return (
        <div>
            <form className="flex flex-col gap-4 md:w-96 mx-auto">
                <div>
                    <div className="mb-2 block text-start ml-2">
                        <Label
                            htmlFor="name"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block text-start ml-2">
                        <Label
                            htmlFor="photo"
                            value="Your photo"
                        />
                    </div>
                    <TextInput
                        id="photo"
                        type="text"
                        placeholder="Your photo url"
                        required={true}

                    />
                </div>
                <div>
                    <div className="mb-2 block text-start ml-2">
                        <Label
                            htmlFor="email"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        required={true}
                        onBlur={handleEmailValue}
                    />
                </div>
                <div>
                    <div className="mb-2 block text-start ml-2">
                        <Label
                            htmlFor="password"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password"
                        type="password"
                        placeholder="Your Password"
                        required={true}
                        onBlur={handlePasswordValue}
                    />
                </div>

                <div className=' text-start ml-2'>
                    <h1>Already have an account? <Link to='/login' className=' underline'>Log In</Link> </h1>
                </div>

                <Button type="submit" onClick={handleEmailPasswordSignIn}>
                    
                    <Link> Submit</Link>

                </Button>

                <h1 className=' font-bold'>OR</h1>
                <div className='flex justify-center items-center'>
                    <Button className='w-96'><Link className='mx-2 font-bold ' onClick={handleGoogleSignIn}>Continue with Google </Link><AiFillGoogleCircle /></Button>
                </div>
                <div className='flex justify-center items-center'>
                    <Button className='w-96'><Link className='mx-2 font-bold' onClick={handleGithubSignIn}>Continue with Github </Link><AiOutlineGithub /></Button>
                </div>



            </form>
        </div>
    );
};

export default SignUp;