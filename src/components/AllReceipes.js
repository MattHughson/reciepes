import React from 'react'
import Taglist from './TagList'
import ReceipeList from './ReciepeList'
import {graphql, useStaticQuery} from 'gatsby'

const query = graphql`
  {
   allContentfulRecipe(sort: {order: ASC, fields: title}) {
     nodes {
       id
       title
       cookTime
       prepTime
       image {
         title
         gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
       }
     }
   }
 }
 `
 const AllReceipes = () => {
  const data = useStaticQuery(query)
 const recipes = data.allContentfulRecipe.nodes
  return (
    <div>
      <h4>All receipes</h4>
      <Taglist/>
      <ReceipeList/>
    </div>
  )
}

export default AllReceipes
