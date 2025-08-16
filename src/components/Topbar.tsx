

const Topbar = () => {
    return (
        <div className='flex justify-between p-5'>
            <div className='text-2xl font-[Voltec]'>
                EXYZ
            </div>
            <div className='text-2xl font-[Voltec]'>
                Leaderboard
            </div>
            <div className="relative inline-block font-extrabold font-[Orbitron] text-xs px-8 py-2 text-white">
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white" />
                <div className=''>
                    
                CONNECT WALLET
                </div>
            </div>

        </div>
    )
}

export default Topbar