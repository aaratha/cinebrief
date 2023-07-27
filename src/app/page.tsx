import Image from 'next/image'
import logo from '../app/logo.png'

interface LandingProps {
    movieId: number
}

export default function Landing({movieId}: LandingProps) {
    return(
        <div className='h-screen w-screen flex'>
          <div className='flex flex-col w-[40vw] m-auto align-middle justify-center mt-30 '>
              <h1><Image src={logo} alt='Cinebrief' width={300} height={150} className='m-auto'></Image></h1>
              <input></input>
          </div>
        </div>
    )
}