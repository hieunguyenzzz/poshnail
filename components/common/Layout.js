import Container from './Container'
import { Header } from './Header'
const Layout = ({ pageProps, children }) => {
  return (
    <div className="flex flex-col w-full fit bg-base-200">
      <Header pageProps={pageProps} />
      <main className="flex-1 fit">
        <a className="hidden" href="#top">
          top
        </a>
        {children}
      </main>
      <footer className="mt-6">
        <Container className="py-8 text-sm text-center ">
          {pageProps.copyright}
        </Container>
      </footer>
    </div>
  )
}
export default Layout
