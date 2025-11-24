import React from "react";

const Rules = ({ onClose }) => {
  return (
    // full-screen overlay
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60">
      {/* white card */}
      <div className="bg-white w-full h-full lg:h-fit md:h-fit sm:h-fit px-9 py-7 rounded-lg shadow-lg lg:max-w-[400px] md:max-w-[400px] sm:max-w-[400px]">
        <div className="flex items-center justify-center lg:justify-between md:justify-between sm:justify-between mb-10">
          <h1 className="lg:mb-0 md:mb-0 sm:mb-0 mb-[15%] lg:mt-0 md:mt-0 sm:mt-0 mt-[10%] text-3xl uppercase text-(--Navy-900) font-bold"> Rules</h1>

          <button onClick={onClose}>
            <img
              className="lg:relative md:relative sm:relative absolute bottom-[15%] right-[50%] cursor-pointer"
              src="/assets/icon-close.svg"
              alt="close"
            />
          </button>
        </div>

        <div className="flex items-center justify-center">
          <img src="/assets/image-rules.svg" alt="rules" />
        </div>
      </div>
    </div>
  );
};

export default Rules;
