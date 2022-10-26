import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillGoogleCircle, AiOutlineGithub } from 'react-icons/ai'
import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';

const SignUp = () => {


    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { popUpSignIn, emailPasswordSignIn, setLoading, updateUserProfile, email, password, photo, name, handleEmailValue, handleNameValue, handlePasswordValue, handlePhotoValue } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        popUpSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                if (user) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Please log in')
                }

            })
            .catch(error => console.error(error))
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGithubSignIn = () => {
        popUpSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                if (user) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Please log in')
                }
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    const handleEmailPasswordSignIn = (event) => {
        event.preventDefault();

        emailPasswordSignIn(email, password)
            .then(result => {
                const user = result.user;
                updateUserProfile(name, photo);
                if (user) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Please log in')
                };
                console.log(user);
            })
            .catch(error => console.error(error))

    }



    return (
        <div className='m-4 pt-5 md:m-0 md:pt-0  bg-slate-200 p-5 md:p-9 rounded-lg md:mt-9'>
            <form className="flex flex-col gap-4 md:w-96 mx-auto md:p-9">
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
                        onBlur={handleNameValue}
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
                        onBlur={handlePhotoValue}

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

                <Link className=''>
                    <Button type="submit" onClick={handleEmailPasswordSignIn} className=" w-full">Sign UP</Button>
                </Link>

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