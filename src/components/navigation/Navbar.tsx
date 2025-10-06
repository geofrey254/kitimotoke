'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { CgMenuLeft } from 'react-icons/cg'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone } from 'react-icons/fa'
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { RiCloseLargeFill } from 'react-icons/ri'
import { MdRestaurantMenu } from 'react-icons/md'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden'
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Menus', href: '/' },
    { name: 'Shop', href: '/' },
    { name: 'About', href: '/' },
    { name: 'Contact', href: '/' },
  ]

  return (
    <nav
      className={`fixed w-full flex justify-between items-center px-6 lg:px-12 py-4 ${
        scrolled
          ? 'bg-[#990000]/30 backdrop-blur-xl shadow-lg border-b border-white/10'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      } transition-all duration-500 z-50`}
    >
      {/* Logo */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#feeede] to-white opacity-0 group-hover:opacity-30 blur transition duration-300 rounded-full"></div>
        <Image
          src="/weblogowhite.png"
          alt="Kitimoke Logo"
          width={80}
          height={80}
          className="relative transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="relative px-5 py-2 font-semibold text-white text-sm uppercase tracking-wide group overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#feeede]">
              {item.name}
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#feeede] to-white transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3">
        <button
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold uppercase text-xs md:text-sm tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
            scrolled
              ? 'bg-[#feeede] text-[#990000] hover:bg-white shadow-lg'
              : 'bg-[#990000] text-[#feeede] hover:bg-[#aa0000] shadow-xl shadow-[#990000]/50'
          }`}
        >
          <MdRestaurantMenu size={18} />
          <span>Order Now</span>
        </button>

        <button
          className="md:hidden p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95"
          onClick={toggleMenu}
        >
          <CgMenuLeft size={26} className="text-[#feeede]" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={toggleMenu}
          ></div>

          {/* Menu Panel */}
          <div className="absolute top-0 left-0 w-[85%] max-w-sm h-full bg-gradient-to-br from-[#990000] via-[#aa0000] to-[#990000] shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="relative h-full flex flex-col p-6 overflow-y-auto">
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:rotate-90 transform"
                  onClick={toggleMenu}
                >
                  <RiCloseLargeFill size={24} className="text-[#feeede]" />
                </button>
              </div>

              {/* Logo */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#feeede]/20 blur-xl rounded-full"></div>
                  <Image
                    src="/weblogowhite.png"
                    alt="Kitimoke Logo"
                    width={110}
                    height={110}
                    className="relative"
                  />
                </div>
              </div>

              {/* Nav Links */}
              <ul className="flex flex-col gap-2 mb-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-4 rounded-xl font-semibold text-white text-base uppercase tracking-wide bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 transition-all duration-300 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item.name}
                      </span>
                      <span className="text-[#feeede] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-[#feeede] text-sm p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <FaMapMarkerAlt className="mt-0.5 flex-shrink-0" size={16} />
                  <span>Dagoretti Market, Opposite Coop Bank, Nairobi</span>
                </div>
                <a
                  href="mailto:info@kitimoke.com"
                  className="flex items-center gap-3 text-[#feeede] text-sm p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <FaEnvelope className="flex-shrink-0" size={16} />
                  <span className="group-hover:text-white transition-colors">
                    kitimotoke@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-[#feeede] text-sm p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <FaPhone className="flex-shrink-0" size={16} />
                  <span className="group-hover:text-white transition-colors">(254) 742-954513</span>
                </a>
              </div>

              {/* Social Media */}
              <div className="mt-auto pt-6 border-t border-white/20">
                <p className="text-[#feeede] text-xs uppercase tracking-wider mb-3 text-center font-semibold">
                  Follow Us
                </p>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: FaFacebook, href: 'https://facebook.com' },
                    { icon: FaInstagram, href: 'https://instagram.com' },
                    { icon: FaTwitter, href: 'https://twitter.com' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-[#feeede] text-[#feeede] hover:text-[#990000] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
