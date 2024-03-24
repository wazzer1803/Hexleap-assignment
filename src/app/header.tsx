"use client";


import { ModeToggle } from "./mode-toggle";
import Link from "next/link";


export function Header() {


  return (
    <div className="border-b border-2 rounded-lg shadow-lg shadow-slate-100 dark:shadow-slate-50">
      <div className="h-16 container flex justify-between items-center font-bold text-2xl ">
        <Link href="/">HexLeap</Link>


        <div className="flex gap-4 items-center border-black border-2 dark:border-white rounded-lg">
         
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}