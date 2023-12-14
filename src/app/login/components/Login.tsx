import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 xs:max-w-[240px] sm:max-w-[280px] w-[414px] ">
      {/* texts */}
      <div className="flex flex-col justify-center gap-2">
        <p className="text-fs38 font-medium text-text-primary-purple">
          Sign In
        </p>
        <p className="text-fs12">
          Please enter your mobile number to login. We will send an OTP to
          verify your number.
        </p>
      </div>
      {/* input field and submit button */}
      <form action="">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-4 h-14 px-3 xs:max-w-[240px] sm:max-w-[280px] w-[414px] rounded-lg border ">
            {/* select country code */}
            <div className="flex items-center gap-[3px] h-full pt-[2px] w-24 text-fs18 xs:text-fs16  cursor-pointer">
              <span>
                <Image
                  src="/images/login/indian-flag.svg"
                  width={26}
                  height={17}
                  alt="indian flag icon"
                />
              </span>
              <span>
                <ChevronDown size={10} />
              </span>
              <span>+91</span>
            </div>
            <input
              type="text"
              placeholder="Phone number"
              className="h-full w-full outline-none text-fs18 xs:text-fs16"
            />
          </div>
          {/* button */}
          <div>
            <button
              type="submit"
              className="flex items-center justify-center h-14 xs:w-[240px] sm:w-[280px] w-[414px] rounded-xl bg-btn-primary-purple"
            >
              <p className="text-fs18 font-bold text-white">Sign In</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
