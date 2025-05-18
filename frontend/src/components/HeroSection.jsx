import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        if (query.trim() === "") return;
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="relative bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 text-white min-h-[70vh] flex items-center justify-center px-4">
            {/* Optional background overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('/your-background-pattern.svg')] bg-repeat"></div>

            <div className="relative z-10 max-w-4xl text-center flex flex-col gap-6 md:gap-8 animate-fadeIn">
                <span className="mx-auto px-5 py-2 rounded-full bg-white bg-opacity-20 text-[white] font-medium text-sm md:text-base tracking-wide shadow-md">
                    No. 1 Job Hunt Website
                </span>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg leading-tight">
                    Search, Apply & <br />
                    Get Your <span className="text-yellow-400 underline decoration-pink-500">Dream Jobs</span>
                </h1>

                <p className="text-base md:text-lg max-w-xl mx-auto text-gray-200 drop-shadow-sm leading-relaxed">
                    Discover thousands of opportunities tailored just for you. Start your journey toward a successful career today!
                </p>

                {/* Search Bar */}
                <div className="flex w-full max-w-md shadow-md border border-white border-opacity-30 rounded-full items-center mx-auto bg-white bg-opacity-20 backdrop-blur-md">
                    <input
                        type="text"
                        placeholder="Find your dream jobs"
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && searchJobHandler()}
                        className="flex-grow outline-none border-none bg-transparent placeholder-gray-300 text-white text-sm md:text-base px-5 py-2.2 rounded-l-full focus:placeholder-transparent transition"
                    />
                    <Button
                        onClick={searchJobHandler}
                        className="rounded-r-full bg-yellow-400 text-purple-900 hover:bg-yellow-500 active:scale-95 transition duration-200 px-4 py-2"
                    >
                        <Search className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {opacity: 0; transform: translateY(10px);}
                    to {opacity: 1; transform: translateY(0);}
                }
                .animate-fadeIn {
                    animation: fadeIn 1s ease forwards;
                }
            `}</style>
        </div>
    )
}

export default HeroSection;
