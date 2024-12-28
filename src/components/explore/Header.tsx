import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  name: string;
  url: string;
  color?: string;
}
export const Header = ({ name, url, color }: Props) => {
  return (
    <header
      className={`bg-${color}-500 text-watercourse-50 w-full h-20 rounded-b-2xl md:rounded-b-full flex items-center justify-center px-10 text-xl lg:text-2xl`}
    >
      <Link href={url}></Link>
      <FaArrowLeft className=" ml-5" />
      <span className="w-full flex justify-center">{name}</span>
    </header>
  );
};
