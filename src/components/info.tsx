'use client'

import { useEffect, useState } from "react"
import Cast from "./cast"
interface InfoProps {
    movieId: number
}

export default function Info({movieId}: InfoProps) {
    const [info, setInfo] = useState<string>('')
    const [cast, setCast] = useState<string[]>([])
    const [castImage, setCastImage] = useState<string[]>([])
    const [title, setTitle] = useState<string>('')
    const [creator, setCreator] = useState<string>('')
    const [roles, setRoles] = useState<string>('')
    const [poster, setPoster] = useState<string>('')
    const [ids, setIds] = useState<number[]>([])
    
    useEffect(() => {
        const getInfo = async () => {
            console.log(`Movie ID: ${movieId}`);
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=87816556a329f30685772bb450222859&language=en-US`);
                const data = await res.json()
                console.log(data.overview)
                setInfo(data.overview)
                setTitle(data.title)
                setPoster(`https://image.tmdb.org/t/p/w500${data.poster_path}`)
                const castRes = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=87816556a329f30685772bb450222859&language=en-US`)
                const castData = await castRes.json()
                const castItems = castData.cast.map((cast: {name: string, profile_path: string, id: number}) => [cast.name, cast.profile_path, cast.id])
                setCast(castItems.map((item: string[]) => item[0]))
                setCastImage(castItems.map((item: string[]) => `https://image.tmdb.org/t/p/w500${item[1]}`))
                setIds(castItems.map((item: string[]) => item[2]))
                console.log(castItems)
                console.log(cast)
                setCreator(castData.crew.find((cast: {job: string}) => cast.job === 'Director').name)
                setRoles(castData.crew.find((cast: {job: string}) => cast.job === 'Director').job)
            } catch (error) {
                console.log(error)
            }
        }
        
        getInfo()
    }, [movieId])

    console.log(`Movie ID: ${movieId}`);
    return (
        <div className=" md:w-[44vw] max-w-full md:max-w-[42vw] mt-0 md:mt-3 m-3 mb-0 md:mb-3 md:ml-6 bg-primary border border-white border-opacity-25 rounded-md justify-between flex flex-col">
            <div className="">
                
                <h1 className="h-[2.7rem] text-center mt-4 text-xl border border-white border-opacity-25 rounded-md p-2 max-w-full m-4 bg-gradient-to-r from-secondary to-tertiary text-black overflow-x-scroll whitespace-nowrap scrollbar-none font-serif">{title}</h1>
                <div className="flex flex-col md:flex-row items-center m-4">
                    <img key={poster} src={poster} alt='no image' width={200} height={200} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" className=" align-top border border-white border-opacity-25 rounded-md mb-3 md:mb-0"></img>
                    <div className="flex flex-col ml-4 text-white">
                        <p className="text-opacity-75 text-white">{creator}</p>
                        <p className="mb-2 opacity-50 text-sm italic">{roles}</p>
                        <p className="">{info}</p>
                    </div>
                </div>
            </div>
            <div className="m-4 mt-0">
                <h1 className="text-black font-serif rounded-t-md w-[6rem] text-center p-1 border-b-0 bg-secondary">Top Cast</h1>
                <div className="p-[2px] bg-gradient-to-r from-secondary to-tertiary rounded-md rounded-tl-none">
                    <div className="h-[11rem] scrollbar-track-gray-800 scrollbar-thumb-gray-500 scrollbar-thin rounded-md bg-black flex flex-row overflow-x-scroll overflow-y-hidden p-3 text-white">
                        {cast.map((actor: string, index: number) => (
                            <Cast key={index} name={actor} image={castImage[index]} id={ids[index]}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}