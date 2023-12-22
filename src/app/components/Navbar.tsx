import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-normal gap-2 h-20 md:h-[102px] lg::h-[102px] xl:h-[102px] 2xl:h-[102px]  w-full border-b py-4 px-14 xs:px-5">
      {/* bread crumbs */}
      <div className="xs:hidden sm:hidden flex items-start justify-normal gap-2 text-fs14">
        <span className="cursor-pointer text-gray-400">First-level Menu</span>
        <span className="text-gray-400">/</span>
        <span className="cursor-pointer text-gray-400">Second-level Menu</span>
        <span className="text-gray-400">/</span>
        <span className="cursor-pointer">Current Page</span>
      </div>
      {/* header and buttons */}
      <div className="flex items-center justify-between w-full">
        <p className="text-fs20 font-medium">Songs</p>
        <button className="flex items-center justify-center h-8 w-24 rounded-sm transition-all duration-150 ease-in hover:scale-[1.01] active:scale-[0.98] bg-btn-secondary-yellow">
          <p className="text-fs14 font-normal scale-100">Add Songs</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
