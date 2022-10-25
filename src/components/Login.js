import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=''>
            <form className="flex flex-col gap-4 md:w-96 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="Type Your Email"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                            placeholder='Type Your Password'
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                <Button type="submit">
                    <Link>Submit</Link>
                </Button>
            </form>
        </div>
    );
};

export default Login;