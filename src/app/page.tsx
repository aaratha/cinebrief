import Image from 'next/image'
import Header from '../components/header'
import Info from '../components/info'
import AI from '../components/ai'
import Similar from '../components/similar'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div className=' '><Header /></div>
      <div className='flex flex-row h-[89vh]'>
        <Info />
        <AI />
        <Similar />
      </div>
    </div>
  )
}
