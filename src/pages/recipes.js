import React from "react"
import AllReceipes from "../components/AllReceipes"
import Layout from "../components/Layout"
import {Link} from 'gatsby'
import {GatsbyImage} from "gatsby-plugin-image"
import ReciepeList from "../components/ReciepeList"

const Recipes = () => {
  return (
  <Layout>
    
    <h1>Recipes</h1>
    <AllReceipes/>
    <ReciepeList/>
    

    </Layout>
    )
}

export default Recipes
