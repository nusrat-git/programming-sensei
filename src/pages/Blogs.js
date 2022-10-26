import { Card } from 'flowbite-react';
import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <Card className='mb-9 md:w-2/4 mx-auto md:p-8 mt-10'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    What is cors?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. <br />
                    The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.
                </p>
            </Card>
            <Card className='mb-9 md:w-2/4 mx-auto md:p-8 mt-10'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Why are you using firebase? What other options do you have to implement authentication?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                    Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with my custom backend. <br />
                    Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </p>
            </Card>
            <Card className='mb-9 md:w-2/4 mx-auto md:p-8 mt-10'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    How does the private route work?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                </p>
            </Card>
            <Card className='mb-9 md:w-2/4 mx-auto md:p-8 mt-10'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    What is Node? How does Node work?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br />
                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. <br />

                    Node.js basically works on two concept-  <br />

                    Asynchronous,
                    Non-blocking I/O
                </p>
            </Card>
        </div>
    );
};

export default Blogs;