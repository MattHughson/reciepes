import React from "react"
import { StaticQuery, graphql } from "gatsby"

const fetchData = () => {
  const data = useStaticQuery(graphql`
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
    `)
   

return (
<div>
 <h1>{data.site.siteMetadata.person.name}</h1>
 <div>
  {data.site.siteMetadata.complexData.map((item,index) => { 
   return (<p key={index}>{item.name}</p>)
  })}
 </div>
</div>
)
}

export default fetchData
