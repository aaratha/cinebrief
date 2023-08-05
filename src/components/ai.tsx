'use client'

import { useChat } from 'ai/react'
import { useState, useEffect, FormEvent } from 'react'
interface AIProps {
    movieId: number
}

export default function AI({movieId}: AIProps) {
    const [prompt, setPrompt] = useState<string>('');
    const [movie, setMovie] = useState<string>('')
    const [director, setDirector] = useState<string>('')
    const { messages, input, handleInputChange, handleSubmit, setMessages } = useChat({
        initialInput: prompt,
        onFinish: () => {setPrompt('')}
    });

    useEffect(() => {
        const getInfo = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=87816556a329f30685772bb450222859&language=en-US`);
                const data = await res.json()
                setMovie(data.title + ' ' + data.release_date.slice(0, 4))
                const castRes = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=87816556a329f30685772bb450222859&language=en-US`)
                const castData = await castRes.json()
                setDirector(castData.crew.find((cast: {job: string}) => cast.job === 'Director').name)
            } catch (error) {
                console.log(error)
            }
        }
        getInfo()
    }, [movieId]);

    useEffect(() => {
        // Submit the form when the prompt state variable changes
        const event = new Event('submit') as unknown as FormEvent<HTMLFormElement>;
        handleSubmit(event);
    }, [prompt, handleSubmit]);

    function handleContext() {
        // Set the prompt state variable to the desired value
        setPrompt(
            `provide background information for users interested in watching the film ${movie}. Start with a section detailing information about the director, ${director}, specifically relating to his style and contributions to cinematic history. Be sure to include any unique or interesting details about the film. Try to be academic in tone, and concise with minimal bloating.`)

        setMessages([])

        handleInputChange({
            target: {
                value: prompt,
            },
        } as React.ChangeEvent<HTMLTextAreaElement>);
        const event = new Event('submit') as unknown as FormEvent<HTMLFormElement>;
        handleSubmit(event);

    }
    
    function handleReception() {
        // Set the prompt state variable to the desired value
        setPrompt(
            `provide information relating to the public and critical reception of the film ${movie}. be sure to include any unique or interesting details. Assume I am already familiar with the film's basic background information. Try to be academic in tone, and concise with minimal bloating.`
        );

        setMessages([])

        // Submit the form
        /*const event = new Event('submit') as unknown as FormEvent<HTMLFormElement>;
        handleInputChange({
            target: {
                value: prompt,
            },
        } as React.ChangeEvent<HTMLTextAreaElement>);
        handleSubmit(event);*/
        handleInputChange({
            target: {
                value: prompt,
            },
        } as React.ChangeEvent<HTMLTextAreaElement>);
        const event = new Event('submit') as unknown as FormEvent<HTMLFormElement>;
        handleSubmit(event);
    }
    function handleInsights() {
        // Set the prompt state variable to the desired value
        setPrompt(
            `provide unique insights for users interested in watching the film ${movie}. be sure to include niche historical facts and a run-down of popular discourse surrounding the film. Assume I am already familiar with the film's basic background information. Try to be academic in tone, and concise with minimal bloating.`
        );

        setMessages([])

        // Submit the form
        const event = new Event('submit') as unknown as FormEvent<HTMLFormElement>;
        handleInputChange({
            target: {
                value: prompt,
            },
        } as React.ChangeEvent<HTMLTextAreaElement>);
        handleSubmit(event);
    }

    return (
        <div className="md:w-[44vw] md:max-w-[44vw] m-3 mb-0 md:mb-3 md:ml-0 border bg-primary border-white border-opacity-25 rounded-md flex flex-col relative ">
            <div className=" bg-gradient-to-r from-secondary to-tertiary flex flex-row  justify-between rounded-t-md">
                <h1 className="text-black text-center text-xl mt-auto mb-auto ml-4">AI</h1>
                <div className="z-10 text-black flex flex-row overflow-hidden rounded-tr-md">
                    <button onClick={handleContext} className=" p-3 border-l border-black border-opacity-25 h-full w-[6rem] hover:bg-gray-800 hover:text-white transition-all">
                        Context
                    </button>
                    <button onClick={handleReception} className=" p-3 border-l border-black border-opacity-25 h-full w-[6rem] hover:bg-gray-800 hover:text-white transition-all">Reception</button>
                    <button onClick={handleInsights} className=" p-3 border-l border-black border-opacity-25 h-full w-[6rem] hover:bg-gray-800 hover:text-white transition-all">Insights</button>
                </div>
            </div>
            <div className='flex scrollbar-none md:scrollbar-thin scrollbar-track-primary scrollbar-thumb-gray-500 overflow-scroll overflow-x-hidden h-full z-10'>
                <div className=" w-full p-5 flex flex-col text-white">
                    {messages.slice(1).map((m) => (
                        <div key={m.id}>
                            {m.role === 'user' ? 'User: ' : 'AI: '}
                            {m.content}
                        </div>
                    ))}
                    <div className='p-3'></div>
                </div>
            </div>
            <div className='z-0 md:z-20 bg-gradient-to-b from-transparent to-primary rounded-b-md absolute bottom-0 h-16 w-full'></div>
        </div>
    );
}


