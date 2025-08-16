import Marquee from 'react-fast-marquee'


const MarqueeComponent = () => {
  return (
    <div className='border p-2 bg-black'>
        <Marquee autoFill >
            <div className='ml-14 text-2xl font-[Megatron]'>

            NEW COLLECTION
            </div>
            </Marquee></div>
  )
}

export default MarqueeComponent