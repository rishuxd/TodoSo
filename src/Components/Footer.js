import React from 'react'

export default function Footer() {
  let footerStyle = {
    position: "relative",
    top: "100vh",
    width: "100%"
  }
  return (
    
    <div className='bg-dark text-light py-2' style={footerStyle}>
      <p className="text-center">
        Copyright &copy; TodoSo
      </p>
    </div>
  )
}
