import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/bcg/homeBcg2.jpg"
import QuickInfo from "../HomePageComponents/QuickInfo"
import Gallery from "../HomePageComponents/Gallery"
import Menu from "../HomePageComponents/Menu"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Cafeteria Gatsby.js React.js, GraphQL, Contentful, Netlify and Github"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <HomeHeader img={img}>
      <Banner
        title="cafeteria gatsby.js"
        subtitle="Developed with React.js, GraphQL, Contentful, Netlify and Github"
      >
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage
