import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const getData =`
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

function fetchData() {
 const {site:{siteMetadata:{title}}} = useStaticQuery(getData)

  return (
    <div>
      title
    </div>
  )
}

export default fetchData
