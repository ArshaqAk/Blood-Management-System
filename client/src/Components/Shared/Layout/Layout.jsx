import React from 'react'

function Layout({ children }) {
  return (
    <>
       {/* <div className="header">Header</div> */}
       <div className="content">{children}</div> 
    </>
  )
}

export default Layout