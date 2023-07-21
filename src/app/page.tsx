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
    <div className='flex flex-col'>
      <div className=' '><Header onQuery={setId} /></div>
      <div className='flex flex-row h-[91vh]'>
        <Info movieId={id} />
        <AI />
        <Similar />
      </div>
    </div>
  );
}
