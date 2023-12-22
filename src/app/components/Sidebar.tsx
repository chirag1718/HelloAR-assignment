import { Disc3, LayoutDashboard, LogOut } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center gap-5 h-full xs:w-20 sm:w-20 md:w-44 w-64 border-r py-8 ">
      {/* logo */}
      <div className="flex xs:items-start sm:items-start items-center justify-center gap-2 h-20 w-full xs:px-1 sm:px-1 px-4">
        <span className="">
          <Disc3 size={30} className="text-text-primary-purple animate-spin " />
        </span>

        <span className="xs:hidden sm:hidden md:text-fs24 text-fs36 font-bold text-text-primary-purple">
          Discology
        </span>
      </div>
      {/* sidebar items */}
      <div className="h-full w-full flex flex-col justify-between">
        {/* songs */}
        <div className="flex items-center xs:justify-center sm:justify-center gap-3 h-10 w-full px-2 cursor-pointer transition-all duration-150 ease-in hover:bg-highlight-primary-blue group isActive hover:border-r-4 xs:hover:border-r-2 hover:border-highlight-secondary-blue active:bg-highlight-primary-blue xs:active:border-r-2 active:border-r-4 active:border-highlight-secondary-blue ">
          <span>
            <LayoutDashboard size={24} />
          </span>
          <p className="xs:hidden sm:hidden text-fs14 group-[.isActive] font-normal group-hover:text-highlight-secondary-blue">
            Songs
          </p>
        </div>
        {/* logout */}
        <div className="flex items-center xs:justify-center sm:justify-center gap-3 h-10 w-full px-2 cursor-pointer transition-all duration-150 ease-in hover:bg-highlight-primary-blue group isActive hover:border-r-4 xs:hover:border-r-2 hover:border-highlight-secondary-blue active:bg-highlight-primary-blue xs:active:border-r-2 active:border-r-4 active:border-highlight-secondary-blue ">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C7.10678 20 5.38518 19.4119 3.63546 17.6636C3.24478 17.2732 3.24453 16.6401 3.6349 16.2494C4.02527 15.8587 4.65843 15.8585 5.04911 16.2488C6.38722 17.5859 7.5996 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C8.14254 2 6.38484 2.63374 4.97137 3.77764C4.54206 4.12508 3.91239 4.05871 3.56495 3.6294C3.21752 3.20009 3.28389 2.57041 3.7132 2.22297C5.47953 0.793501 7.68033 0 10 0ZM10.6129 5.2097L10.7071 5.29289L14.7071 9.29289C14.7356 9.32136 14.7623 9.35153 14.7872 9.38325L14.7071 9.29289C14.7425 9.32829 14.7747 9.36567 14.8037 9.40469C14.8215 9.42887 14.8383 9.45372 14.8539 9.47934C14.8614 9.49139 14.8685 9.50361 14.8753 9.51594C14.8862 9.53571 14.8966 9.55611 14.9063 9.5769C14.9143 9.5939 14.9218 9.6112 14.9288 9.62866C14.9367 9.64842 14.9439 9.6682 14.9505 9.68826C14.9553 9.70315 14.9599 9.71854 14.9642 9.73401C14.9702 9.75556 14.9754 9.77725 14.9798 9.79921C14.9833 9.81662 14.9864 9.83405 14.989 9.85153C14.992 9.87148 14.9945 9.89211 14.9963 9.91294C14.9978 9.93174 14.9989 9.94973 14.9995 9.96775C14.9998 9.97779 15 9.98887 15 10L14.9995 10.0332C14.9989 10.0506 14.9979 10.0679 14.9964 10.0852L15 10C15 10.0506 14.9962 10.1004 14.989 10.149C14.9864 10.1659 14.9833 10.1834 14.9798 10.2007C14.9754 10.2227 14.9702 10.2444 14.9643 10.2658C14.9599 10.2815 14.9553 10.2969 14.9503 10.3121C14.9439 10.3318 14.9367 10.3516 14.9289 10.3711C14.9218 10.3888 14.9143 10.4061 14.9063 10.4232C14.8966 10.4439 14.8862 10.4643 14.8751 10.4843C14.8685 10.4964 14.8614 10.5086 14.854 10.5207C14.8383 10.5463 14.8215 10.5711 14.8037 10.5952C14.7993 10.6012 14.7948 10.6071 14.7903 10.6129C14.7849 10.6197 14.7826 10.6226 14.7803 10.6254L14.7071 10.7071L10.7071 14.7071C10.3166 15.0976 9.68342 15.0976 9.29289 14.7071C8.93241 14.3466 8.90468 13.7794 9.2097 13.3871L9.29289 13.2929L11.585 11H1C0.447715 11 0 10.5523 0 10C0 9.48716 0.38604 9.06449 0.883379 9.00673L1 9H11.585L9.29289 6.70711C8.93241 6.34662 8.90468 5.77939 9.2097 5.3871L9.29289 5.29289C9.65338 4.93241 10.2206 4.90468 10.6129 5.2097Z"
                fill="#545454"
              />
            </svg>
          </span>
          <p className="xs:hidden sm:hidden text-fs14 group-[.isActive] font-normal group-hover:text-highlight-secondary-blue">
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
