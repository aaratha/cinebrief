'use client'
import { useEffect, useState } from "react"
import Info from "./info"

export default function Header({onQuery = (id: number) => { }}) {
    const [movies, setMovies] = useState<string[]>([])
    const [movieIds, setMovieIds] = useState<number[]>([]);
    const getInfo = async () => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&api_key=87816556a329f30685772bb450222859&language=en-US`)
            const data = await res.json()
            const movieTitles = data.results.map((movie: any) => movie.title);
            const movieIds = data.results.map((movie: any) => movie.id);
            setMovies(movieTitles);
            setMovieIds(movieIds);
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
        
    };
    useEffect(() => {
        getInfo();
    }, [input]);
    return (
        <div className="m-6 mb-2 max-w-full  border-opacity-25 rounded-md border-white h-[4vh] flex flex-row justify-between  items-center">
            <h1 className=" text-2xl">Cinebrief</h1>
            <form onSubmit={(event) => event.preventDefault()}>
                <input className="mr-3 p-1 rounded-full w-[20rem] text-black pl-3" onFocus={handleFocus} onBlur={handleBlur} onChange={handleInputChange}></input>
                {toggleDrop && (
                    <div onMouseDown={(e) => e.preventDefault()} className="absolute border z-10 border-white border-opacity-25 w-[20rem] rounded-md h-40 mt-2 bg-primary overflow-scroll flex flex-col top-14 pt-2 pb-2">
                        {movies.map((movie: string, index: number) => (
                            <button key={movieIds[index]} onClick={() => handleButtonClick(movieIds[index])} className="z-20 border border-white border-opacity-25 rounded-md max-w-full m-1 p-2 ml-3 mr-3">{movie}
                            </button>
                        ))}
                    </div>
                )}
            </form>
            <button className="button">Info</button>
        </div>
    );
}