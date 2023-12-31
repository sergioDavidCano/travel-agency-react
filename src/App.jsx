import './App.scss';
import 'aos/dist/aos.css';
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './components/home/Home'
import { Main } from './components/main/Main'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  )
}

export default App
