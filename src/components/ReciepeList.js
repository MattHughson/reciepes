import React from 'react'


import {Link} from 'gatsby'
import {GatsbyImage} from "gatsby-plugin-image"

const ReciepeList = ({recipes = [] }) => {
  return (
    <div className="recipes-list">{
     recipes.map(recipe => {
      const {id, title, prepTime, cookTime,image} = recipe
      return(
       <div>

        <Link to= {`/${title}`} key ={id} className='recipe'>
         <GatsbyImage image={image.gatsbyImageData} alt={title}
         className='recipe-img'/>
        </Link>
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
