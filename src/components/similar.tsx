import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
interface SimilarProps {
    movieId: number
    /*onQuery: (id: number) => void*/
}

export default function Similar({movieId}: SimilarProps) {
    const router = useRouter();
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

    const handleButtonClick = (movieId: number) => {
        router.push(`/dashboard?id=${movieId}`);
    }
        
    return (
        <div className=" z-10 md:w-[12vw] h-auto md:h-auto bg-primary md:max-w-[12vw] m-3 md:mr-6 md:ml-0 border border-white border-opacity-25 rounded-md flex flex-col relative ">
            <div className=" bg-gradient-to-r from-secondary to-tertiary flex flex-row  justify-between rounded-t-md">
                <h1 className="text-black text-center text-md flex m-auto p-3 font-serif">Similar Movies</h1>
            </div>
            <div className='overflow-y-hidden md:overflow-y-scroll scrollbar-thin scrollbar-track-primary scrollbar-thumb-gray-500 flex flex-row md:flex-col z-10'>
                {titles.map((title: string, index: number) => ( 
                    <button key={index} onClick={() => handleButtonClick(movieIds[index])} className='hover:scale-95 transition-all flex-col border border-white border-opacity-25 m-4 mr-0 md:mr-4 md:mb-0 rounded-md overflow-hidden flex-shrink-0 w-32 md:w-auto h-auto'>
                        <img 
                            src={posters[index]}
                            alt='no image'
                            width={192}
                            height={288}
                        ></img>
                        {/*<p className='m-2 text-xs md:text-sm'>{title}</p>*/}
                    </button>
                ))}
                <div className='p-3'></div>
            </div>
            <div className='md:z-20 z-0 bg-gradient-to-b from-transparent to-primary rounded-b-md absolute bottom-0 md:h-16 w-full'></div>
        </div>
    )
}
