import { ReactNode } from "react"

import Header from "components/Header/Header"

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
