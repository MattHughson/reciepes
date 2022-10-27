import React from "react"
import { StaticQuery, graphql } from "gatsby"

const fetchData = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            author
            description
            simpleData
            title
            complexData {
              age
            }
            person {
              age
              name
            }
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default fetchData
