import Image from 'next/image'
import ClientOnly from './components/ClientOnly'
import { Container } from 'postcss'

export default function Home() {
  return (
   <ClientOnly>
      <div className='p-2'>
        Home
      </div>
   </ClientOnly>
  )
}
