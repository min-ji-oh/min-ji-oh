import { GNB_LIST } from './contants'
import Link from 'next/link'

const Gnb = () => {
  return (
    <div className='bg-white absolute top-20 min_tablet:border-l right-0 z-10 mob:w-full min_tablet:w-[400px] h-[calc(100vh-80px)] px-10'>
      <ul className='flex flex-col gap-4'>
        {GNB_LIST.map((item, index) => {
          return (
            <li key={item.name + index} className='text-lg font-bold uppercase'>
              <Link href={item.href}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Gnb
