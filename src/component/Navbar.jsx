import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="flex flex-wrap mx-2 w-10 h-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <a href="https://www.facebook.com/"><FaFacebook /></a>
        <a href="https://www.instagram.com/rizz.rf/"><FaInstagram /></a>
        <a href="https://x.com/"><FaSquareXTwitter /></a>
        <a href="https://open.spotify.com/"><FaSpotify /></a>
        <a href="https://id.pinterest.com/"><FaPinterest /></a>
        <a href="https://www.youtube.com/"><FaYoutube /></a>
        <a href="https://www.tiktok.com/"><FaTiktok /></a>
      </div>
    </nav>
  );
};

export default Navbar;