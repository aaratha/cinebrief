'use client'

import { useEffect, useState } from "react"
import movieId from './header'

export default function Info({ movieId }: { movieId: number }) {
    const [info, setInfo] = useState<string>('')
    useEffect(() => {
        const getInfo = async (id: number) => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=87816556a329f30685772bb450222859&language=en-US`);
                const data = await res.json()
                console.log(data.overview)
                setInfo(data.overview)
            } catch (error) {
                console.log(error)
            }
        }
        
        getInfo(movieId)
    }, [movieId])

    console.log(`Movie ID: ${movieId}`);

    return (
        <div className=" w-[44vw] max-w-[44vw] m-3 ml-6 bg-primary border border-white border-opacity-25 rounded-md">
            <h1 className="text-center mt-3">Movie Information</h1>
            <p>{info}</p>
        </div>
    )
}