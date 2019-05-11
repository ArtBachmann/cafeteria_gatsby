import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"
import { styles, NavbarButton } from "../../../utils"

class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <NavbarButton>Cafeteria Gatsby</NavbarButton>
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

export default NavbarHeader
