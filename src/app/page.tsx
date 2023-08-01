'use client'
import Image from 'next/image'
import logo from '../app/logo.png'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Head from 'next/head'

interface LandingProps {
    movieId: number
}

export default function Landing() {
    const router = useRouter();
    const [movies, setMovies] = useState<string[]>([])
    const [movieIds, setMovieIds] = useState<number[]>([]);
    const [movieImgs, setMovieImgs] = useState<string[]>([]);
    const [language, setLanguage] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const getInfo = async () => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&api_key=87816556a329f30685772bb450222859&language=en-US`)
            const data = await res.json()
            const movieTitles = data.results.map((movie: any) => movie.title);
            const movieIds = data.results.map((movie: any) => movie.id);
            const movieImgs = data.results.map((movie: any) => `https://image.tmdb.org/t/p/w500${movie.poster_path}`);
            const language = data.results.map((movie: any) => movie.original_language);
            const date = data.results.map((movie: any) => movie.release_date);
            setMovies(movieTitles);
            setMovieIds(movieIds);
            setMovieImgs(movieImgs);
            setLanguage(language[0]);
            setDate(date[0].slice(0, 4));

        } catch (error) {
            console.log(error)
        }
    }
    const [toggleDrop, setToggleDrop] = useState(false);
    const handleFocus = () => {
        setToggleDrop(true);
    };
    const handleBlur = () => {
        setToggleDrop(false);
    };
    const [input, setInput] = useState<string>('')
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        console.log(input)
    };
    const handleButtonClick = (movieId: number) => {
        const movieIndex = movieIds.indexOf(movieId);
        const movieName = movies[movieIndex];
        console.log(`Button for movie "${movieName}" clicked with ID ${movieId}`);
        router.push(`/dashboard?id=${movieId}`);
    };
    useEffect(() => {
        getInfo();
    }, [input]);
    return(
        <div className='h-screen w-screen flex'>
            <Head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7106001278051966"
            crossOrigin="anonymous"></script></Head>
            <div className='flex flex-col w-[90vw] md:w-[40vw] m-auto mt-28 align-middle justify-center mt-30 relative'>
                <div className='overflow-hidden m-4'>
                    <Image src={logo} alt='Cinebrief' objectFit='cover' className='m-auto'></Image>
                    <p className='text-center mt-1 text-xl italic'>Movies in a Minute</p>
                </div>
                <form onSubmit={(event) => event.preventDefault()}>
                <input className="bg-primary text-white border border-white border-opacity-25 mr-3 p-1 rounded-full w-full pl-3" onFocus={handleFocus} onBlur={handleBlur} onChange={handleInputChange} placeholder='Enter title here...'></input>
                {toggleDrop && (
                    <div onMouseDown={(e) => e.preventDefault()} className="absolute border z-20 border-white border-opacity-25  rounded-md h-60 mt-4 bg-primary overflow-scroll flex flex-col  pt-2 pb-2 overflow-x-hidden scrollbar-thin scrollbar-track-primary scrollbar-thumb-gray-500 md:left-auto left-0 w-[90vw] md:w-[40vw] text-white">
                        {movies.map((movie: string, index: number) => (
                            <button key={movieIds[index]} onClick={() => handleButtonClick(movieIds[index])} className="flex flex-row z-20 border border-white border-opacity-25 rounded-md max-w-full m-1 p-2 ml-3 mr-3 bg-gray-800 hover:bg-primary transition-all">
                                <Image
                                    src={movieImgs[index]}
                                    alt='no image'
                                    width={50}
                                    height={75}
                                ></Image>
                                <div className="flex flex-col m-auto text-white">
                                    <h1>{movie}</h1>
                                    <p>{date} {language}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </form>
            </div>
        </div>
    )
}