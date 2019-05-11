import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello from Gatsby</h3>
    {/* <ButtonWrapper>Click Me!</ButtonWrapper> */}
  </Layout>
)

export default IndexPage
