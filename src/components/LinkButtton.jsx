import React from 'react'

const variants = {
  primary: "bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
}

function LinkButton({ text, link, variant }) {
  const style = variants[variant] || variants["primary"]
  return (
   <a href= {link} className={style} >
    {text}
   </a>
  )
}

export default LinkButton
