import React from "react"
import Layout from "../components/Layout"
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'
const About = () => {
  return (
  <Layout>
    <main className='page'>

      <section className='about-page'>
        <article>
          <h2>I'm a baby cloring boke poke txidery</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque est culpa officiis sit incidunt tempore a porro reprehenderit repudiandae nesciunt. Sed asperiores sequi libero numquam repudiandae inventore deleniti optio aliquam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis accusamus commodi rem illo, vel facere repellendus laborum accusantium ad architecto a eveniet ducimus ab tempora debitis aspernatur doloribus? Commodi.</p>
          <Link to='/contact' className='btn'>
            contact
          </Link>
        </article>
<StaticImage scr="../Assets/images/about.jpeg" alt="person"/>
      </section>
    </main>
    <h1>About</h1>
    </Layout>
    )
}

export default About
