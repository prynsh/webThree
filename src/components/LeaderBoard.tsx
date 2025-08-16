// import { leaderboardData } from '@/data'
// import skull from "../assets/skull.png"

// const LeaderBoard = () => {
//     return (
//         <div className=' p-20 bg-gray-900'>
//             <div className='flex justify-center'>
//                 <div className='font-[Atomos-Regular] text-8xl'>
//                     THE LEAGUE
//                 </div>

//             </div>
//             <div className='flex justify-center py-20'>
//                 <div className="bg-[#00120A] border  border-cyan-400 rounded-lg p-10 w-full max-w-5xl">
//                     <div className="space-y-5 items-center">
//                         {leaderboardData.map((item, index) => (
//                             <div key={item.id}>
//                                 <div className="flex items-center py-4 px-2">
//                                     {/* Left side - Icon and Name */}
//                                     <div className="flex items-center gap-4 flex-1">
//                                         <div className="w-8 h-8 flex items-center justify-center">
//                                             <div className="w-8 h-8 flex items-center justify-center">
//                                                 <img
//                                                     src={item.image}
//                                                     alt={item.name}
//                                                     className="  object-cover"
//                                                 />
//                                             </div>

//                                         </div>
//                                         <span className="text-white font-[Voltec] text-[2rem] tracking-wider">{item.name}</span>
//                                     </div>

//                                     <div className="flex-1 items-center gap-5 press-start-2p-regular flex justify-center">
//                                         <span className="text-white font-bold text-lg">{item.score}</span>
//                                             <div className="w-6 h-6 flex items-center justify-center">
//                                         <img src={skull}></img>
//                                             </div>
//                                     </div>

//                                     <div className="flex items-center gap-6 flex-1 justify-end">
//                                         <div className="w-8 h-8 flex items-center justify-center">
//                                             <div className="w-6 h-6 flex items-center justify-center">
//                                             </div>
//                                         </div>

//                                         <span className="text-white press-start-2p-regular  min-w-[80px] text-right">
//                                             {item.price ? `${item.price} SOL` : ""}
//                                         </span>
//                                     </div>
//                                 </div>
//                                 {index < leaderboardData.length - 1 && <div className="h-px bg-orange-500 m-2"></div>}
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default LeaderBoard


import { leaderboardData } from "@/data"
import skull from "../assets/skull.png"

const LeaderBoard = () => {
  return (
    <div className=" p-20 bg-gray-900">
      <div className="flex justify-center">
        <div className="font-[Atomos-Regular] text-8xl">THE LEAGUE</div>
      </div>
      <div className="flex justify-center py-20">
        <div className="bg-[#00120A] border  border-cyan-400 rounded-lg p-10 w-full max-w-5xl">
          <div className="space-y-5 items-center">
            {leaderboardData.map((item, index) => (
              <div key={item.id}>
                <div className="flex items-center py-4 px-2">
                  {/* Left side - Icon and Name */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <img src={item.image || "/placeholder.svg"} alt={item.name} className="  object-cover" />
                      </div>
                    </div>
                    <span className="text-white font-[Voltec] text-[2rem] tracking-wider">{item.name}</span>
                  </div>

                  <div className="flex-1 items-center gap-5 press-start-2p-regular flex justify-center">
                    <span className="text-white font-bold text-lg">{item.score}</span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img src={skull || "/placeholder.svg"}></img>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 flex-1 justify-end">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <div className="w-6 h-6 flex items-center justify-center"></div>
                    </div>

                    <span className="text-white press-start-2p-regular  min-w-[80px] text-right">
                      {item.price ? `${item.price} SOL` : ""}
                    </span>
                  </div>
                </div>
                <div className="h-px bg-orange-500 m-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoard


