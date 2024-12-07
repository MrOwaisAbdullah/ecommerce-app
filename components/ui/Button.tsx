import React from 'react'

interface BtnProps{
    btnText: string;
    color: string;
}

const Button: React.FC<BtnProps> = ({btnText, color}) => {
  return (
    <button className={`text-nowrap py-4 px-8 lg:px-12 bg-${color} text-sm lg:text-base text-center rounded text-white font-medium`}>
        {btnText}
    </button>
)
}

export default Button