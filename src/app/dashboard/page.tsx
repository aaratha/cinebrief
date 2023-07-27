'use client'
import Image from 'next/image'
import Header from '@/components/header'
import Info from '@/components/info'
import AI from '@/components/ai'
import Similar from '@/components/similar'
import { useState } from 'react'

export default function Home() {
  const [id, setId] = useState<number>(0);
  return (
    <div className='flex flex-col max-w-screen md:h-screen bg-black w-screen'>
      <head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7106001278051966"
      crossOrigin="anonymous"></script></head>
      <div className=' '><Header onQuery={setId} /></div>
      <div className='flex flex-col md:flex-row h-[90vh] w-full overflow-scroll md:overflow-hidden overflow-x-hidden scrollbar scrollbar-track-primary scrollbar-thumb-gray-800'>
        <Info movieId={id} />
        <AI movieId={id} />
        <Similar movieId={id} />
      </div>
      <div className='ml-6 mr-6 flex flex-col md:flex-row justify-between text-sm text-opacity-50 text-white'>
        <p>Movie Information provided by The Movie Database</p>
        <p>ChatGPT 3.5 Language Model provided by OpenAI</p>
        <p>Created by Aseem Ratha</p>
      </div>
    </div>
  );
}
