import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
                    />
                </div>
                
                <div className=' text-start ml-2'>
                    <h1>Don't have an account? <Link to='/signup' className=' underline'>Sign Up</Link> </h1>
                </div>
                <Button type="submit">
                    <Link>Submit</Link>
                </Button>
            </form>
        </div>
    );
};

export default Login;