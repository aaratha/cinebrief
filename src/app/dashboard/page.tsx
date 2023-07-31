'use client'
import Image from 'next/image'
import Header from '@/components/header'
import Info from '@/components/info'
import AI from '@/components/ai'
import Similar from '@/components/similar'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [id, setId] = useState<number>(0);
  useEffect(() => {
    setId(parseInt(searchParams.get('id') || '0'));
  }, [searchParams]);


  return (
    <div className='flex flex-col max-w-screen md:h-screen bg-black w-screen'>
      <Head>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7106001278051966'
          crossOrigin='anonymous'
        ></script>
      </Head>
      <div className=' '>
        <Header onQuery={setId} />
      </div>
      <div className='flex flex-col md:flex-row h-[90vh] w-full overflow-scroll md:overflow-hidden overflow-x-hidden scrollbar-thin scrollbar-track-primary scrollbar-thumb-gray-500'>
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
