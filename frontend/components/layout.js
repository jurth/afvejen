import Nav from "./nav/nav"

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    {children}
  </>
)

export default Layout
