import { useState, useEffect } from 'react'
import Image from 'next/image'
interface SimilarProps {
    movieId: number
    /*onQuery: (id: number) => void*/
}

export default function Similar({movieId}: SimilarProps) {
    const [titles, setTitles] = useState<string[]>([])
    const [posters, setPosters] = useState<string[]>([])
    const [movieIds, setMovieIds] = useState<number[]>([])

    useEffect(() => {
        const getInfo = async () => {
            console.log(`Movie ID: ${movieId}`);
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=87816556a329f30685772bb450222859&language=en-US`);
                const data = await res.json()
                console.log(data.overview)
                setTitles(data.results.map((movie: any) => movie.title))
                setPosters(data.results.map((movie: any) => `https://image.tmdb.org/t/p/w500${movie.poster_path}`))
                setMovieIds(data.results.map((movie: any) => movie.id))
            } catch (error) {
                console.log(error)
            }
        }
        
        getInfo()
    }, [movieId])
    
    {/*const handleButtonClick = (movieId: number) => {
        const movieIndex = movieIds.indexOf(movieId);
    onQuery(movieId.valueOf());*/}
        
    return (
        <div className="w-[12vw] bg-primary max-w-[12vw] m-3 mr-6 ml-0 border border-white border-opacity-25 rounded-md flex flex-col">
            <div className=" bg-gradient-to-r from-secondary to-tertiary flex flex-row  justify-between rounded-t-md">
                <h1 className="text-black text-center text-md flex m-auto p-3">Similar Movies</h1>
            </div>
            <div className=' overflow-y-scroll'>
                {titles.map((title: string, index: number) => ( 
                    <button key={index} /* onClick={() => handleButtonClick(movieIds[index])}*/ className='hover:scale-95 transition-all flex-col border border-white border-opacity-25 m-4 rounded-md overflow-auto'>
                        <Image 
                            src={posters[index]}
                            alt='no image'
                            width={192}
                            height={288}
                        ></Image>
                        <p className='m-2'>{title}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}
