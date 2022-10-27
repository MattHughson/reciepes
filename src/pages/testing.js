import React from 'react'
import {graphql} from 'gatsby'
const testing = (props) => {
const {siteMetadata:{author}} = props.data.site
console.log('test', author)
  return (
    <div>
      <h1>auhor: ${author}</h1>
    </div>
  )
}
export const data = graphql`
{
  site {
    siteMetadata {
      author
      description
      simpleData
      title
      complexData {
        age
        name
      }
      person {
        age
        name
      }
    }
  }
}`
export default testing

