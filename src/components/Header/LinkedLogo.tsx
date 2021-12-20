/** @jsxImportSource theme-ui */
import { Box, Heading } from "theme-ui"
import Link from "next/link"

const LinkedLogo = () => {
  return (
    <Link href="/">
      <a
        sx={{
          cursor: "pointer",
          textDecoration: "none"
        }}
      >
        <Heading as="h4" variant="styles.h4">
          Frontend Roadmap
        </Heading>
      </a>
    </Link>
  )
}

export default LinkedLogo
