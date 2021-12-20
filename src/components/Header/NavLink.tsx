/** @jsxImportSource theme-ui */
import { ThemeUIStyleObject } from "theme-ui"
import { theme } from "utils/theme"
import Link from "next/link"

import { IMyLink } from "config/myTypes"

// Styles
const navLinkStyles: ThemeUIStyleObject = {
  py: 1,
  fontFamily: "heading",
  fontWeight: 500,
  ...theme?.links?.smoothUnderLine
}

interface NavLinkProps extends IMyLink {
  className?: string
}
const NavLink = ({ text, url, className }: NavLinkProps) => {
  return (
    <Link href={url}>
      <a className={className} sx={navLinkStyles}>
        {text}
      </a>
    </Link>
  )
}

export default NavLink
