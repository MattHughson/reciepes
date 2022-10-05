import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
 

const Images = () => {
  return (
    <Wrapper>
      <article>

      <StaticImage
        to="/Users/matt/Documents/projects/Gatsby/reciepes/src/Assets/images/recipe-1.jpeg"
        alt="BIG"
        placeholder="tracedSVG"
        layout='constrained'
        className="example-img"
        as="section"
      >
        images
      </StaticImage>
      </article>
      <article>

      <StaticImage
        to="/Users/matt/Documents/projects/Gatsby/reciepes/src/Assets/images/recipe-1.jpeg"
        alt="BIG"
        placeholder="blurred"
        layout='fixed'
        className="example-img"
        as="div"
      >
        images
      </StaticImage>
      </article>
      <article>

      <StaticImage
        to="/Users/matt/Documents/projects/Gatsby/reciepes/src/Assets/images/recipe-1.jpeg"
        alt="BIG"
        placeholder="tracedSVG"
        layout='fixed'
        className="example-img"
        as="section"
      >
        images
      </StaticImage>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
width: 70vw;
margin:0 auto;
display:grid;
text-align:center;
gap:2rem;
article:{
  border: 2px solid red;

}
.example-img:{
  border-radius:1rem;

}
@media (min-width:992px){
  grid-template-columns:1fr 1fr 1fr;
}
`
export default Images
