"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <div>
      {/* auth routes */}
      {pathName.includes("/login") || pathName.includes("/login/verify") ? (
        <div className="flex items-center justify-center h-screen w-screen ">
          {children}
        </div>
      ) : (
        // non auth routes
        <div className="h-screen w-screen">
          <div className="flex h-full">
            <Sidebar />
            <div className="flex flex-col justify-between h-full w-full">
              <Navbar />
              <div className="h-full overflow-y-scroll">{children}</div>
              <Player />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutProvider;
