'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { MdRestaurantMenu } from 'react-icons/md'
import { FaClock, FaMapMarkerAlt, FaPlay } from 'react-icons/fa'
import { IoSparkles } from 'react-icons/io5'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg1.jpg"
          alt="Delicious restaurant cuisine"
          fill
          className="object-cover"
          priority
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

        {/* Animated accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#990000]/40 via-transparent to-transparent mix-blend-multiply"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#feeede]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-[#990000]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
    </section>
  )
}
