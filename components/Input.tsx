import React from "react";

interface InputProps {
  placeHolder?: string;
  value?: string;
  type?: string;
  disbaled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeHolder,
  value,
  type,
  disbaled,
  onChange,
}) => {
  return (
    <input
      disabled={disbaled}
      onChange={onChange}
      value={value}
      placeholder={placeHolder}
      className="w-full p-4 text-lg bg-black border-2 border-beutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed"
    />
  );
};

export default Input;
