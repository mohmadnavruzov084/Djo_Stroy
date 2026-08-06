import { GlobalStyle } from './styles/GlobalStyle'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Contact from './components/Contact'

export default function App() {
  return <>
    <GlobalStyle />
    <main>
      <Hero header={<Header />} />
      <Services />
      <Benefits />
      <Contact />
    </main>
  </>
}
