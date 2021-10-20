import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <Seo title="About Us" />
    <h1>Services page</h1>
    <h2>You really get around, huh?</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ullam
      voluptatum? Qui fugit at corrupti quo nobis veritatis omnis dignissimos.
      Doloribus quaerat earum vel! Cumque sequi soluta deleniti velit delectus
      quidem pariatur nemo iste, ea, libero laborum sunt, iure saepe.
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quidem
      nostrum facere debitis, id corrupti quaerat sint repudiandae odit
      doloremque at ducimus ipsum beatae aliquid nobis hic corporis amet ratione
      itaque et a aliquam explicabo aperiam. Officiis consequatur voluptate
      quis.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServicesPage
