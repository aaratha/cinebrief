'use client'

import { useChat } from 'ai/react'
import { useState, useEffect, FormEvent } from 'react'
interface AIProps {
    movieId: number
}

export default function AI({movieId}: AIProps) {
    const [prompt, setPrompt] = useState<string>('');
    const [movie, setMovie] = useState<string>('')
    const { messages, input, handleInputChange, handleSubmit, setMessages } = useChat({
        initialInput: prompt,
    });

    useEffect(() => {
        const getInfo = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=87816556a329f30685772bb450222859&language=en-US`);
                const data = await res.json()
                setMovie(data.title + ' ' + data.release_date.slice(0, 4))
            } catch (error) {
                console.log(error)
            }
        }
        getInfo()
    }, [movieId]);

    function handleContext() {
        // Set the prompt state variable to the desired value
        setPrompt(
            `provide background information for users interested in watching the film ${movie}. be sure to include any unique or interesting details and give a run down of how it contributes to cinematic history. Try to be academic in tone, and concise with minimal bloating.`)

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
    function handleReception() {
        // Set the prompt state variable to the desired value
        setPrompt(
            `provide information relating to the public and critical reception of the film ${movie}. be sure to include any unique or interesting details. Assume I am already familiar with the film's basic background information. Try to be academic in tone, and concise with minimal bloating.`
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
        <div className="w-[41vw] max-h-full max-w-[41vw] m-3 ml-0 border bg-primary border-white border-opacity-25 rounded-md">
            <div className=" bg-gradient-to-r from-secondary to-tertiary flex flex-row  justify-between rounded-t-md">
                <h1 className="text-black text-center text-xl flex mt-auto mb-auto ml-4">AI</h1>
                <div className="text-black flex flex-row">
                    <button onClick={handleContext} className="aibutton p-3 border-l border-black border-opacity-25 h-full w-[6rem] hover:bg-slate-800 hover:bg-opacity-70 hover:text-white transition-all">
                        Context
                    </button>
                    <button onClick={handleReception} className="aibutton p-3 border-l border-black border-opacity-25 h-full w-[6rem] hover:bg-slate-800 hover:bg-opacity-70 hover:text-white transition-all">Reception</button>
                    <button onClick={handleInsights} className="aibutton p-3 border-l border-black border-opacity-25 h-full w-[6rem] hover:bg-slate-800 hover:bg-opacity-70 hover:text-white transition-all">Insights</button>
                </div>
            </div>
            <div className='max-h-full h-[40.5rem] overflow-y-scroll flex overflow-x-hidden'>
                <div className=" w-full p-5 pt-5 flex flex-col text-white">
                    {messages.map((m) => (
                        <div key={m.id}>
                            {m.role === 'user' ? 'User: ' : 'AI: '}
                            {m.content}
                        </div>
                    ))}
                </div>
                <div className='h-14 absolute bg-gradient-to-b from-transparent to-primary bottom-[4.75rem] rounded-b-md w-[30.8rem]'></div>
            </div>
        </div>
    );
}
