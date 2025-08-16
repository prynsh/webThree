import { leaderboardData } from "@/data/data"
import skull from "../assets/skull.png"

const LeaderBoard = () => {
  return (
    <div className="p-20 bg-[#000D18]">
      <div className="flex justify-center">
        <div className="font-[Atomos-Regular] text-8xl">THE LEAGUE</div>
      </div>

      <div className="flex justify-center py-20">
        <div className="bg-[#00120A] border border-white rounded-lg p-10 w-[73.6rem]">
          <div className="space-y-5 items-center">
            {leaderboardData.map((item) => (
              <div key={item.id}>
                <div className="flex items-center justify-between py-4 px-2">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-white font-[Voltec] text-[2rem] tracking-wider">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-40">
                    <div className="flex items-center gap-2 press-start-2p-regular min-w-[100px] justify-end">
                      <span className="text-white font-bold text-lg">{item.score}</span>
                      <img src={skull || "/placeholder.svg"} className="w-6 h-6" />
                    </div>
                    <span className="text-white press-start-2p-regular min-w-[100px] text-right">
                      {item.price ? `${item.price} SOL` : ""}
                    </span>
                  </div>
                </div>
                <div className="h-[0.27rem] bg-[#FF6348] m-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoard
