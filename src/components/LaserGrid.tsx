
import grid_image from "../assets/grid_image.png"
const LaserGrid = () => {
    return (
        <div>

            <div><div className="left-0 right-0 h-2">
                <div className="relative w-full h-full">
                    <div
                        className="absolute inset-0 bg-red-500 opacity-90"
                        style={{
                            boxShadow: "0 0 20px #ef4444, 0 0 40px #ef4444, 0 0 60px #ef4444",
                        }}
                    />
                    <div
                        className="absolute inset-0 bg-orange-300 opacity-70"
                        style={{
                            height: "50%",
                            top: "25%",
                            boxShadow: "0 0 10px #fdba74",
                        }}
                    />
                </div>
            </div>
            </div>
            <div className='flex justify-center'>
            <img  className='w-full' src={grid_image}></img>
            </div>
        </div>
    )
}

export default LaserGrid

