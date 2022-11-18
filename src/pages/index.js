import React from "react"

import Layout from "../components/Layout"

import Gallery from '../components/Gallery'
import AllReceipes from "../components/AllReceipes"



export default function Home() {
  return (
    <Layout>
   <main className="page">

    <AllReceipes/>
    
   </main>

    
    </Layout>
  )
}
