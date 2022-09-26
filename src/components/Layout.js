import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../Assets/css/main.css"
import Images from "../examples/images"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Images />
      {children}
      <Footer />
    </>
  )
}

export default Layout
