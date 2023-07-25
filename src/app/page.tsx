'use client'
import Image from 'next/image'
import Header from '../components/header'
import Info from '../components/info'
import AI from '../components/ai'
import Similar from '../components/similar'
import { useState } from 'react'

export default function Home() {
  const [id, setId] = useState<number>(0);
  return (
    <div className='flex flex-col h-screen bg-black w-screen'>
      <div className=' '><Header onQuery={setId} /></div>
      <div className='flex flex-row h-[90vh] w-full'>
        <Info movieId={id} />
        <AI movieId={id} />
        <Similar />
      </div>
      <div className='ml-6 mr-6 flex flex-row justify-between text-sm text-opacity-50 text-white'>
        <p>Movie Information provided by The Movie Database</p>
        <p>ChatGPT 3.5 Language Model provided by OpenAI</p>
        <p>Created by Aseem Ratha</p>
      </div>
    </div>
  );
}
