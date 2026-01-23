import GeneralError from './GeneralError'
import ReactErrorBoundary from '../../entrypoints/ReactErrorBoundary'

const Layout = ({ children }) => {
  return (
    <ReactErrorBoundary fallback={<GeneralError />}>
      <main className="h-screen w-full overflow-auto">
        <article className="h-full">{children}</article>
      </main>
    </ReactErrorBoundary>
  )
}

export default Layout
