import React from 'react'


import {Link} from 'gatsby'
import {GatsbyImage} from "gatsby-plugin-image"

const ReciepeList = ({recipes = [] }) => {
  return (
    <div className="recipes-list">{
     recipes.map(recipe => {
      const {id, title, prepTime, cookTime} = recipe
      return(
       <div>

        <p key ={id}>{title}</p>
        <p key ={id}>{prepTime}</p>
        <p key ={id}>{cookTime}</p>
       </div>
      
      )
     })
    }
    
    
    </div>
  )
}

export default ReciepeList
