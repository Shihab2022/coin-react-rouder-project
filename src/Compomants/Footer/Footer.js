import React from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaGithub,
  FaTwitter,
  FaAmazon,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col bg-lime-50 py-10 justify-center w-[100%] mt-10 items-center">
      <div className="flex justify-around w-[30%] text-2xl text-slate-500 mb-10">
        <span>
          <FaFacebook></FaFacebook>
        </span>
        <span>
          <FaWhatsapp></FaWhatsapp>
        </span>
        <span>
          <FaGithub></FaGithub>
        </span>
        <span>
          <FaTwitter></FaTwitter>
        </span>
        <span>
          <FaAmazon></FaAmazon>
        </span>
      </div>

      <h1>All Rights Reserved By © Crypto Cafe | 2022-2026</h1>
    </div>
  );
};

export default Footer;
