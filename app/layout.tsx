import {
  FunctionComponent,
  PropsWithChildren,
  ReactElement
} from 'react'
import {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {NextFont} from 'next/dist/compiled/@next/font'
import {ToastContainer} from 'react-toastify'
export const metadata: Metadata = {}
const inter: NextFont = Inter({
  subsets: [
    'latin'
  ]
})
const RootLayout: FunctionComponent<PropsWithChildren> = ({children}): ReactElement => (
  <html lang='en'>
    <body className={inter.className}>
      <main>
        {children}
      </main>
      <ToastContainer/>
    </body>
  </html>
)
export default RootLayout