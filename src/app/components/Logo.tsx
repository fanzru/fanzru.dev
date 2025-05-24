import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center w-7 h-7 rounded-md bg-[#9333EA] mr-2">
        <span className="font-bold text-sm text-white">f</span>
      </div>
      <div className="flex items-baseline">
        <span className="font-bold text-xl text-white">fanzru</span>
        <span className="font-bold text-xl text-[#9333EA]">dev</span>
      </div>
    </div>
  );
};

export default Logo;
