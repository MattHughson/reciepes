/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:'Simply Recipes',
    description:'Nice and clean recipes site',
    author:"@mattHughson",
    person:{
      name:'Matt', age:32},
      simpleData:[
      'Matt', "32"
      ],
      complexData:[{
      name:'Matt', age:32},{
      name:'Matt', age:37}]
    
  },
  plugins: [
     {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ldjp2y8x220z`,
      
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    }
   `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
`gatsby-plugin-styled-components`,
{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/Assets/images`,
      }},

]
}