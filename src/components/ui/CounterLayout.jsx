import Link from 'next/link'

const CounterLayout = ({children, path = "/", onclick, count = 0}) => {
  console.log(path)
  return (
    <Link href={path} className='relative' onClick={onclick}>
        {children}
        <span className='bg-[#646b5d] absolute w-4 lg:w-6 h-4 lg:h-6 top-0 -right-1 rounded-full centred text-white text-[8px] lg:text-[15px] cursor-pointer'>{count}</span>
    </Link>
  )
}

export default CounterLayout