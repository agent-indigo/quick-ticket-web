import {
  FunctionComponent,
  PropsWithChildren,
  ReactElement
} from 'react'
import {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {NextFont} from 'next/dist/compiled/@next/font'
import {ToastContainer} from 'react-toastify'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContextProvider from '@/components/ContextProvider'
export const metadata: Metadata = {}
const inter: NextFont = Inter({
  subsets: [
    'latin'
  ]
})
const RootLayout: FunctionComponent<PropsWithChildren> = ({children}): ReactElement => (
  <ContextProvider>
    <html lang='en'>
      <body className={inter.className}>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
        <ToastContainer/>
      </body>
    </html>
  </ContextProvider>
)
export default RootLayout