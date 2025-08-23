"use client";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
//import { FaXTwitter } from "react-icons/fa6"; // New X (Twitter) logo
import { FaTelegram } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
     <footer className="bg-[#071026] text-orange-100 text-center py-8 px-4">
  <h1 className="text-xl" >Follow Us</h1>
  <div className="max-w-[600px] mx-auto">


    <div className="mt-10 flex justify-center gap-5 text-2xl">
      <a href="https://t.me/+vV2dBaEmfBkyZDFk
" className="cursor-pointer transition-transform duration-300 text-orange-100 no-underline select-none hover:scale-130 hover:text-[#9bb6e0]">    <FaTelegram/>  </a>
      <a href="https://www.facebook.com/cssf.unaab" className="cursor-pointer transition-transform duration-300 text-orange-100 no-underline select-none hover:scale-130 hover:text-[#9bb6e0]">     <FaFacebookF />  </a>
      <a href="https://www.instagram.com/cssf_unification_funaab?igsh=YzljYTk1ODg3Zg==" className="cursor-pointer transition-transform duration-300 text-orange-100 no-underline select-none hover:scale-130 hover:text-[#9bb6e0]">         <FaInstagram /></a>
         <a href="#" className="cursor-pointer transition-transform duration-300 text-orange-100 no-underline select-none hover:scale-130 hover:text-[#9bb6e0]">        <SiTiktok />  </a>
    </div>



    <p className="mt-4 text-sm text-orange-100">
      © 2025 PIZZA HEAVEN. All rights reserved.
    </p>

  </div>
</footer>
    </>
  );
}











