import Header from './components/layout/Header'
import Hero from './components/home/Hero'
import WeInnovate from './components/home/WeInnovate'
import DataAtCore from './components/home/DataAtCore'
import Industries from './components/home/Industries'
import WeEvolve from './components/home/WeEvolve'
import ClientLogos from './components/home/ClientLogos'
import Testimonials from './components/home/Testimonials'
import WeBuild from './components/home/WeBuild'
import Ecosystem from './components/home/Ecosystem'
import WeEmpower from './components/home/WeEmpower'
import ContactForm from './components/home/ContactForm'
import Features from './components/home/Features'
import Stats from './components/home/Stats'
import Gallery from './components/home/Gallery'
import Pricing from './components/home/Pricing'
import Partners from './components/home/Partners'
import Footer from './components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WeInnovate />
      <DataAtCore />
      <Industries />
      <WeEvolve />
      <ClientLogos />
      <Testimonials />
      <WeBuild />
      <Ecosystem />
      <WeEmpower />
      <ContactForm />
      {/* <Features /> */}
      {/* <Stats /> */}
      {/* <Gallery /> */}
      {/* <Pricing /> */}
      {/* <Partners /> */}
      <Footer />
    </main>
  )
}
