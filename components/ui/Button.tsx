"use client"
import React from 'react'

interface BtnProps{
    btnText: string;
    color: string;
    hover?: string;
}

const Button: React.FC<BtnProps> = ({btnText, color, hover}) => {
  return (
    <button className={`text-nowrap py-3 px-8 lg:px-12 bg-${color} hover:bg-${hover || "accent"} text-sm lg:text-base text-center rounded text-white font-medium`}>
        {btnText}
    </button>
)
}

export default Button