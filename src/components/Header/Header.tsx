/** @jsxImportSource theme-ui */
import { ThemeUIStyleObject } from "theme-ui"

import DesktopNav from "components/Header/DesktopNav"

// Styles
const headerStyles: ThemeUIStyleObject = {
  py: 3,
  bg: "#f5f5f5"
}

const Header = () => {
  return (
    <header sx={headerStyles}>
      <DesktopNav />
    </header>
  )
}

export default Header
