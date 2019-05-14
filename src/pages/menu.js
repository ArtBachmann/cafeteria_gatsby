import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import menuImg from "../images/bcg/menuBcg.jpeg"
import Menu from "../components/HomePageComponents/Menu"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={menuImg}>
      <Banner title="Our Menu" subtitle="Delicious Meals All Day Long" />
    </PageHeader>
    <Menu />
  </Layout>
)

export default MenuPage
