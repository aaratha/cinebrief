'use client'
import { useEffect, useState } from "react"
import Info from "./info"
import Image from 'next/image'
import logo from '../app/logo.png'
import { useRouter } from 'next/navigation'

export default function Header({onQuery = (id: number) => { }}) {
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
        onQuery(movieId.valueOf());
        console.log(`Button for movie "${movieName}" clicked with ID ${movieId}`);
        router.push(`/dashboard?id=${movieId}`);
    };
    useEffect(() => {
        getInfo();
    }, [input]);
    return (
        <div className="m-5 ml-3 mr-3 md:m-6 md:mb-3 max-w-full  border-opacity-25 rounded-md border-white h-[1.4rem] flex flex-row justify-between  items-center">
            <h1 className="mr-2 text-2xl text-white hover:scale-95 transition-all"><a href="/"><Image src={require('@/logo.png')} alt='Cinebrief' width={150} height={100} className='m-auto'></Image></a></h1>
            <form onSubmit={(event) => event.preventDefault()}>
                <input className="bg-primary text-white border border-white border-opacity-25 mr-3 p-1 rounded-full w-[40vw] md:w-[20rem] pl-3" onFocus={handleFocus} onBlur={handleBlur} onChange={handleInputChange} placeholder="Enter title here..."></input>
                {toggleDrop && (
                    <div onMouseDown={(e) => e.preventDefault()} className="absolute border z-20 border-white border-opacity-25 md:w-[20rem] rounded-md h-60 mt-1 bg-primary overflow-scroll flex flex-col top-14 pt-2 pb-2 overflow-x-hidden scrollbar-thin scrollbar-track-primary scrollbar-thumb-gray-500 md:left-auto left-0 w-full text-white">
                        {movies.map((movie: string, index: number) => (
                            <button key={movieIds[index]} onClick={() => handleButtonClick(movieIds[index])} className="flex flex-row z-20 border border-white border-opacity-25 rounded-md max-w-full m-1 p-2 ml-3 mr-3 bg-gray-800 hover:bg-primary transition-all">
                                <img
                                    src={movieImgs[index]}
                                    alt='no image'
                                    width={50}
                                    height={75}
                                ></img>
                                <div className="flex flex-col m-auto text-white">
                                    <h1>{movie}</h1>
                                    <p>{date} {language}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </form>
            <button className=" text-white border border-white border-opacity-25 bg-primary p-[0.3rem] w-16 hover:bg-secondary transition-all hover:text-black rounded-md"><a href="/about">About</a></button>
        </div>
    );
}