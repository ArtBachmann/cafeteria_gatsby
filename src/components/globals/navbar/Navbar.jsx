import React from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"

const NavBar = () => {
  return (
    <nav>
      <NavbarHeader />
      <NavbarLinks />
      <NavbarIcons />
    </nav>
  )
}

export default NavBar
