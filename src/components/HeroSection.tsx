import StartGameButton from "./StartButton";

export default function HeroSection () {
  return (
    <main className=" relative flex items-center justify-center mx-30  min-w-[1147px] h-[648px] ">
      <div className="absolute top-8 left-8 text-[0.5rem]">
        <div className="border-l-2 border-t-2  w-4 h-4 relative">
          <div className="absolute top-2 left-2 flex-col">
            <div className="flex">DSP:<span className="text-[#21E786]"> 1701X979</span></div>
            <div>FPS: <span className="text-[#21E786]">67.90</span></div>
          </div>
        </div>
      </div>
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-[0.5rem] p-2 text-white">///: <span className="text-[#21E786]">0.20</span></div>
      <div className="absolute top-8 right-8  text-[0.5rem] ">
        <div className="border-r-2 border-t-2  w-4 h-4 relative">
          <div className="absolute top-2 right-2 flex flex-col items-end whitespace-nowrap">
            <div className="flex items-center">
              <span className="text-[#21E786]">10-08-2025</span>
              <span>:DATE</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#21E786]">02:56:20</span>
              <span>:TIME</span>
            </div>
          </div>

        </div>
      </div>
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-[0.5rem] p-2 text-white"><span className="text-[#21E786]">0.49</span> :\\\</div>

      <div className="absolute bottom-8 left-8 text-[0.5rem] text-[Orbitron]">
        <div className="border-l-2 border-b-2  w-4 h-4 relative">
          <div className="absolute bottom-2 left-2 flex-col">
            <div className="flex">EVO: <span className="text-[#21E786]">Alpha</span></div>
            <div className="flex">VERS: <span className="text-[#21E786]">01.08.04</span></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8  text-[0.5rem] text-right">
        <div className="border-r-2 border-b-2  w-4 h-4 relative">
          <div className="absolute bottom-2 right-2 flex flex-col items-end gap-1 whitespace-nowrap">
            <div className="flex items-center gap-1">
              <span className="text-[#21E786]">74.906</span>
              <span>:LOG</span></div>
            <div className="flex items-center gap-1">
              <span className="text-[#21E786]">Win11 Chrome/138.0.0.0</span>
              <span>:SYS</span></div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className=" font-[Atomos] text-[5.25rem] text-white  tracking-wider">
          EXPLORE NFT COLLECTION
        </p>
        <p className="text-white font-[Voltec] text-[1.75rem]">
          A collection of 2525 highly-fashionable NFTs on the ETH Blockchain. Unique, <br /> metaverse-ready, and designed to
          benefit their holders.
        </p>
        <div className="flex justify-center pt-10">
          <StartGameButton />
        </div>
      </div>
    </main>
  )
}
