import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/bcg/homeBcg2.jpg"
import QuickInfo from "../HomePageComponents/QuickInfo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Cafeteria Gatsby.js Produced with React.js, Contentful, Netlify and Github"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <HomeHeader img={img}>
      <Banner
        title="cafeteria gatsby.js"
        subtitle="Produced with React.js, Contentful, Netlify and Github"
      >
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
