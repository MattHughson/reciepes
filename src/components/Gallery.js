import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'


const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: {grayscale: true}
            width:200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {nodes.map((image,idex) => {
        const {name} = image
        return(
          <article key={index}>
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} />
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
`

export default Gallery
