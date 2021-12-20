/** @jsxImportSource theme-ui */
import { Container } from "theme-ui"

import LinkedLogo from "components/Header/LinkedLogo"
import NavLink from "components/Header/NavLink"

import { navLinks } from "config/navLinks"

const DesktopNav = () => {
  return (
    <nav>
      <Container variant="container1200">
        <ul
          sx={{
            p: 0,
            m: 0,
            display: "flex",
            alignItems: "center",
            listStyle: "none",
            li: {
              ":not(:last-of-type)": {
                mr: 5
              }
            }
          }}
        >
          <li>
            <LinkedLogo />
          </li>
          {navLinks.map((navLink, index) => (
            <li key={`desktop-nav-link:${index}`}>
              <NavLink {...navLink} />
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}

export default DesktopNav
