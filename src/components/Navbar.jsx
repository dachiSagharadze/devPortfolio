import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
    const [activeNav, setActiveNav] = useState('');
    const location = useLocation();

    useGSAP(() => {
        gsap.to('#navbar', {
            opacity: 1,
            delay: 2,
            duration: 2,
        });
    }, []);

    React.useEffect(() => {
        setActiveNav(location.pathname);
    }, [location]);

    return (
        <header id="navbar" className='w-full h-[15vh] absolute sm:px-10 px-5 flex opacity-0 z-10'>
            <nav className='flex w-full screen-max-width items-center'>
                <Link to={'/'} className="p-2 text-gray-200">
                    <h1 className='outline p-2'>Dachi Sagharadze</h1>
                </Link>

                <div className='flex flex-1 justify-end'>
                    {['About', 'Contact'].map((nav) => {
                        const navPath = `/${nav.toLowerCase()}`;

                        return (
                            <div className="relative" key={nav}>
                                <Link
                                    to={navPath}
                                    className={`p-2 cursor-pointer text-gray-200 hover:text-white transition-all`}
                                >
                                    {nav}
                                </Link>
                                {activeNav === navPath && (
                                    <div className="absolute left-0 right-0 bottom-[50%] border-b-2 border-white" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
}
