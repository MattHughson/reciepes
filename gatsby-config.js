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
      'Matt', 32
      ],
      complexData:[{
      name:'Matt', age:32},{
      name:'Matt', age:37}]
    
  }
  plugins: [
   `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
`gatsby-plugin-styled-components`
   
  ],
}
