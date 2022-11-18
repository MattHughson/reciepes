import React from 'react'
import Taglist from './TagList'
import ReceipeList from './ReceipeList'
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
  console.log('query results', data)
  return (
    <div>
      <h4>All receipes</h4>
      <Taglist/>
      <ReceipeList/>
    </div>
  )
}

export default AllReceipes
