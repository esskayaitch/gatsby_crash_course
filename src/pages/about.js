import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About Us" />
    <h1> About page</h1>
    <h2>Glad you made it.</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ullam
      voluptatum? Qui fugit at corrupti quo nobis veritatis omnis dignissimos.
      Doloribus quaerat earum vel! Cumque sequi soluta deleniti velit delectus
      quidem pariatur nemo iste, ea, libero laborum sunt, iure saepe.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
