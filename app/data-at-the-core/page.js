import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import DataCoreHero from '../components/data-core/DataCoreHero'
import DataCoreHero2 from '../components/data-core/DataCoreHero2'
import WhyAhana from '../components/data-core/WhyAhana'
import TechnologyStack from '../components/data-core/TechnologyStack'
import SuccessStories from '../components/data-core/SuccessStories'
import OurClients from '../components/data-core/OurClients'
import FeatureInsights from '../components/data-core/FeatureInsights'
import ContactForm from '../components/home/ContactForm'

export default function DataAtTheCore() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* <DataCoreHero /> */}
      <DataCoreHero2 />
      <WhyAhana />
      <TechnologyStack />
      <SuccessStories />
      <OurClients />
      <FeatureInsights />
      <ContactForm />
      <Footer />
    </main>
  )
}
