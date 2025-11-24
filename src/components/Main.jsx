import React from 'react'

const Main = ({ onPick }) => {
    return (
        <div>
            <img className='relative w-[280px] h-[220px] lg:w-[320px] lg:h-[280px] md:w-[320px] md:h-[280px] sm:w-[320px] sm:h-[280px]' src="src\assets\bg-triangle.svg" alt="triangle" />

            <div className='absolute lg:top-[290px] md:top-[27%] sm:top-[27%] top-[250px] flex items-center md:gap-10 sm:gap-10 gap-13'>
                <button onClick={() => onPick("paper")} className="hover:scale-105 duration-300 cursor-pointer lg:translate-x-[-45px] md:translate-x-[-45px] sm:translate-x-[-45px] -translate-x-2.5 flex items-center justify-center lg:h-42 lg:w-42 md:h-42 md:w-42 sm:h-42 sm:w-42 w-30 h-30 rounded-full bg-gradient-to-b from-[hsl(230,89%,65%)] to-[hsl(229,64%,46%)] shadow-[0_8px_0_hsla(229,64%,46%,0.7)]">
                <div className=" flex items-center justify-center lg:h-30 lg:w-30 md:h-30 md:w-30 sm:h-30 sm:w-30 w-22 h-22 rounded-full bg-slate-100 shadow-[inset_0_6px_0_rgba(0,0,0,0.15)] ">
                    <img src="src/assets/icon-paper.svg" alt="paper" className="lg:h-15 lg:w-15 md:h-15 md:w-15 sm:h-15 sm:w-15 w-12 h-12" />
                </div>
            </button>

            <button onClick={() => onPick("scissors")} className="hover:scale-105 duration-300 cursor-pointer flex items-center justify-center lg:h-42 lg:w-42 md:h-42 md:w-42 sm:h-42 sm:w-42 w-30 h-30 rounded-full bg-gradient-to-b from-[hsl(39,89%,49%)] to-[hsl(28,76%,44%)] shadow-[0_8px_0_hsla(28,76%,44%,0.7)]">
                <div className=" flex items-center justify-center lg:h-30 lg:w-30 md:h-30 md:w-30 sm:h-30 sm:w-30 w-22 h-22 rounded-full bg-slate-100 shadow-[inset_0_6px_0_rgba(0,0,0,0.15)] ">
                    <img src="src/assets/icon-scissors.svg" alt="scissors" className="lg:h-15 lg:w-15 md:h-15 md:w-15 sm:h-15 sm:w-15 w-12 h-12" />
                </div>
            </button>
            </div>

            <button onClick={() => onPick("rock")} className="cursor-pointer hover:scale-105 duration-300 translate-x-20 lg:-translate-y-35 md:-translate-y-35 sm:-translate-y-35 -translate-y-30 flex items-center justify-center lg:h-42 lg:w-42 md:h-42 md:w-42 sm:h-42 sm:w-42 w-30 h-30 rounded-full bg-gradient-to-b from-[hsl(349,71%,52%)] to-[hsl(347,75%,35%)] shadow-[0_8px_0_hsla(347,75%,35%,0.7)]">
                <div className="flex items-center justify-center lg:h-30 lg:w-30 md:h-30 md:w-30 sm:h-30 sm:w-30 w-22 h-22 rounded-full bg-slate-100 shadow-[inset_0_6px_0_rgba(0,0,0,0.15)] ">
                    <img src="src/assets/icon-rock.svg" alt="rock" className="lg:h-15 lg:w-15 md:h-15 md:w-15 sm:h-15 sm:w-15 w-12 h-12" />
                </div>
            </button>

        </div>
    )
}

export default Main