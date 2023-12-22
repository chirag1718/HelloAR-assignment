import { Trash, Play, Pause } from "lucide-react";
import React from "react";

const SongList = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  return (
    <div className="h-full w-full p-6 bg-red-0">
      <table className="h-auto w-full table relative">
        <thead>
          <tr className="h-10 w-full border-b bg-white">
            <th className="text-left pl-8">SONG NAME</th>
            <th className="xs:hidden sm:hidden">SOURCE</th>
            <th className="xs:hidden sm:hidden">ADDED ON</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((_, index) => {
            return (
              <tr className="h-24 xs:h-32 w-full border-b" key={index}>
                <td>
                  <div className="flex xs:flex-col xs:justify-center items-center gap-4">
                    <div className="h-[72px] w-[72px] min-h-[72px] min-w-[72px] bg-red-500"></div>
                    <p className="xs:text-center">Song name</p>
                  </div>
                </td>
                <td className="text-center xs:hidden sm:hidden">
                  <p>YouTube</p>
                </td>
                <td className="text-center xs:hidden sm:hidden">
                  20th Jan 2023
                </td>
                <td className="w-32 xs:w-14 text-center">
                  <div className="flex items-center justify-center h-full w-full">
                    <p className="flex items-center justify-center h-10 w-10 xs:h-8 xs:w-8 rounded-full bg-btn-secondary-yellow">
                      <Play color="white" className="cursor-pointer h-5 w-5" />
                    </p>
                  </div>
                </td>
                <td className="w-20 xs:hidden sm:hidden">
                  <span className="flex items-center justify-center ">
                    <Trash className="cursor-pointer" />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;
