import React from 'react';
import logo from '../logo.png';
import Image from 'next/image';
import Head from 'next/head';

export default function About() {
    return(
        <div className='flex flex-col h-screen'>
            <Head><script
                async
                src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7106001278051966'
                crossOrigin='anonymous'
            ></script></Head>
            <div className='flex flex-row items-center justify-between m-10 mt-4'>
                <a href='/'><Image src={logo} alt='Cinebrief' width={200} height={200}></Image></a>
                <h1 className='text-2xl'>About</h1>
            </div>
            <div className='flex flex-col mx-auto h-full justify-between text-center text-white h-30 mb-80 mt-28'>
                <p className=''>Created by Aseem Ratha</p>
                <p>Contact Information:</p>
                <p><a href='mailto: aseemratha@gmail.com'>Email: aseemratha@gmail.com</a></p>
                <p><a href='https://www.instagram.com/aa.ratha/'>Instagram: @aa.ratha</a></p>
            </div>
        </div>
    )
}