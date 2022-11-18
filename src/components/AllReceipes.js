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
  // accessing the array
 const recipes = data.allContentfulRecipe.nodes
  return (
    <section className='recipes-container'>
      <Taglist recipe={recipes}/>
      <ReceipeList recipe={recipes}/>
    </section>
  )
}

export default AllReceipes
