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
    useEffect(() => {
        const getInfo = async () => {
            console.log(`Movie ID: ${movieId}`);
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=87816556a329f30685772bb450222859&language=en-US`);
                const data = await res.json()
                console.log(data.overview)
                setInfo(data.overview)
                setTitle(data.title)
                const castRes = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=87816556a329f30685772bb450222859&language=en-US`)
                const castData = await castRes.json()
                const castItems = castData.cast.map((cast: {name: string, profile_path: string}) => [cast.name, cast.profile_path])
                setCast(castItems.map((item: string[]) => item[0]))
                setCastImage(castItems.map((item: string[]) => `https://image.tmdb.org/t/p/w500${item[1]}`))
                console.log(castItems)
            } catch (error) {
                console.log(error)
            }
        }
        
        getInfo()
    }, [movieId])

    console.log(`Movie ID: ${movieId}`);
    console.log(process.env.OPENAI_API_KEY)
    return (
        <div className=" w-[41vw] max-w-[41vw] m-3 ml-6 bg-primary border border-white border-opacity-25 rounded-md justify-between flex flex-col">
            <div className="flex flex-col">
                <h1 className="h-[2.7rem] text-center mt-4 text-xl border border-white border-opacity-25 rounded-md p-2 max-w-full m-4 bg-gradient-to-r from-secondary to-tertiary text-black">{title}</h1>
                {/*<p>{creator}</p>
                <p>{roles}</p>*/}
                <p className="m-7 mt-6">{info}</p>
            </div>
            <div className="m-4 mt-0">
                <h1 className="text-black rounded-t-md w-[6rem] text-center p-1 border-b-0 bg-secondary">Top Cast</h1>
                <div className="p-[2px] bg-gradient-to-r from-secondary to-tertiary rounded-md rounded-tl-none">
                    <div className="h-[11rem] rounded-md bg-black flex flex-row overflow-x-scroll overflow-y-hidden p-3">
                        {cast.map((actor: string, index: number) => (
                            <Cast key={index} name={actor} image={castImage[index]} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}