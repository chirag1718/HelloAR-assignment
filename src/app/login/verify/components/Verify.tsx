"use client";
import React, { useEffect, useRef, useState } from "react";

const Verify = () => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // this function here handles the logic for changes in input field
  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[index] = value.substring(value.length - 1);

    if (!value && index > 0) {
      setActiveIndex(index - 1);
    } else if (index < 5 && value) {
      setActiveIndex(index + 1);
    }

    setOtp(newOTP);
  };

  // this function here handles the logic for deleting otp digit one by one per input box using backspace key
  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index >= 0) {
      e.preventDefault();
      const newActiveIndex = index > 0 ? index - 1 : 0;
      setActiveIndex(newActiveIndex);

      const newOTP: string[] = [...otp];
      newOTP[index] = "";
      setOtp(newOTP);
    }
  };
  // this function here handles the logic for deleting otp digit one by one per input box using delete key
  const handleDelete = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Delete" && index >= -1) {
      e.preventDefault();
      const newActiveIndex = index > -1 ? index + 1 : 0;
      setActiveIndex(newActiveIndex);

      const newOTP: string[] = [...otp];
      newOTP[index] = "";
      setOtp(newOTP);
    }
  };

  // this function handles the logic for pasting opt in all the respective boxes
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const clipboardData = e.clipboardData.getData("text");
    const newOTP: string[] = new Array(6)
      .fill("")
      .map((_, index) => clipboardData[index] || "");
    setOtp(newOTP);
  };

  // the useEffect here is used to change the focus of input box
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeIndex]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 xs:max-w-[240px] sm:max-w-[280px] w-[414px] ">
      {/* texts */}
      <div className="flex flex-col xs:text-center sm:text-center justify-center gap-2">
        <p className="text-fs38 font-medium text-text-primary-purple">
          OTP Verification
        </p>
        <p className="text-fs12 ">
          We have sent and OTP to +919889898989. Please enter the code received
          to verify.
        </p>
      </div>
      {/* input field and submit button */}
      <form action="">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center justify-between xs:gap-4 sm:gap-5 xs:max-w-[240px] sm:max-w-[280px] w-[414px] ">
            {/* verify otp bx */}
            {otp.map((_, index) => {
              return (
                <input
                  ref={index === activeIndex ? inputRef : null}
                  key={index}
                  type="number"
                  autoComplete="one-time-code"
                  inputMode="numeric"
                  min={0}
                  max={1}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => {
                    handleBackspace(e, index), handleDelete(e, index);
                  }}
                  onPaste={handlePaste}
                  value={otp[index]}
                  className="xs:h-12 xs:w-12 sm:h-14 sm:w-14 h-20 w-20 text-center border rounded-lg outline-none  focus:border-highlight-active-purple"
                />
              );
            })}
          </div>
          {/* button */}
          <div>
            <button
              type="submit"
              className="flex items-center justify-center h-14 xs:w-[240px] sm:w-[280px] w-[414px] rounded-xl bg-btn-primary-purple"
            >
              <p className="text-fs18 font-bold text-white">Verify</p>
            </button>
          </div>
        </div>
      </form>

      {/* resend opt and use another phone number */}
      <div className="flex flex-col items-center justify-center gap-4 text-fs16 text-text-tertiary-gray">
        <button type="button" className="underline">
          Resend OTP
        </button>
        <button type="button" className="underline">
          Use another number
        </button>
      </div>
    </div>
  );
};

export default Verify;
