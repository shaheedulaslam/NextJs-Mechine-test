import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Hero from './components/heroSection'
import Body from './components/body'
import Form from './components/form'
import Footer from './components/footer'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className={`${inter.className}`}>
  <Navbar />
  <main className="flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12">
    <Hero />
    <Body />
    <Form />
  </main>
  <Footer />
</div>

  )
}
