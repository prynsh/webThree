import React from 'react'
import grid_image from "../assets/grid_image.png"
const LaserGrid = () => {
    return (
        <div>

            <div><div className="left-0 right-0 h-2">
                <div className="relative w-full h-full">
                    {/* Main laser beam */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-90"
                        style={{
                            boxShadow: "0 0 20px #ef4444, 0 0 40px #ef4444, 0 0 60px #ef4444",
                        }}
                    />
                    {/* Bright core */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-70"
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

