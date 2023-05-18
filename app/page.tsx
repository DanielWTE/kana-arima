import Welcomer from '@/components/welcomer'
import About from '@/components/aboutme'
import Info from '@/components/atAGlance'
import Pictures from '@/components/pictures'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <section>
        <Welcomer />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Info />
      </section>
      <section>
        <Pictures />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}