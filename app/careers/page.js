import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CareersHero from '../components/careers/CareersHero'
import WhyAhanaCareer from '../components/careers/WhyAhanaCareer'
import JobOpenings from '../components/careers/JobOpenings'
import EmployeeTestimonials from '../components/careers/EmployeeTestimonials'

export const metadata = {
  title: 'Careers - Ahana',
  description: 'Join our team and build your career with Ahana',
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CareersHero />
      <WhyAhanaCareer />
      <JobOpenings />
      <EmployeeTestimonials />
      <Footer />
    </main>
  )
}
