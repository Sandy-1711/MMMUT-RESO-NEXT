import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './(components)/Navbar/Navbar'
import Footer from './(components)/Footer/Footer'
import Copyright from './(components)/Copyright/Copyright'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MMMUT-RESO',
  description: 'The only place to study - MMMUT-RESO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Copyright />
      </body>
    </html>
  )
}
