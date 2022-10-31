import React from "react"

import Layout from "../components/Layout"
import {StaticImage}  from 'gatsby-plugin-image'
import FetchData from '../examples/fetchData'
import Gallery from '../components/Gallery'



export default function Home() {
  return (
    <Layout>
      <Gallery/>

    </Layout>
  )
}
