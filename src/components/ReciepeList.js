import React from 'react'


import {Link} from 'gatsby'
import {GatsbyImage} from "gatsby-plugin-image"

const ReciepeList = ({recipes = [] }) => {
  return (
    <div className="recipes-list">{
     recipes.map((recipe=> {
      return <p>recipe.title</p>
     })}
    
    </div>
  )
}

export default ReciepeList
