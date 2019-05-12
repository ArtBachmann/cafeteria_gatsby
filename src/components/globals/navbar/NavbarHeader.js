import React from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"
import { styles, NavbarButton } from "../../../utils"

export default function NavbarHeader({ handleNavbar }) {
  return (
    <HeaderWrapper>
      <Link to="/">
        <NavbarButton>Cafeteria Gatsby.js</NavbarButton>
      </Link>
      <FaAlignRight
        className="toggle-icon"
        onClick={() => {
          handleNavbar()
        }}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
  @media (min-width: 760px) {
    .toggle-icon {
      display: none;
    }
  }
`
