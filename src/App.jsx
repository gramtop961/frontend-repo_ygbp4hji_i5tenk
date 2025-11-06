import Navbar from './components/Navbar'
import AnimatedHero from './components/AnimatedHero'
import ProjectGrid from './components/ProjectGrid'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function SectionDivider() {
  return <div className="mx-auto my-6 h-px w-[90%] max-w-6xl bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main id="main">
        <AnimatedHero />
        <SectionDivider />
        <ProjectGrid />
        <SectionDivider />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
