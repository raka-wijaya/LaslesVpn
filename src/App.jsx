import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './pages/Hero'
import GetStarted from './pages/GetStarted'
import AboutUs from './pages/AboutUs'
import Features from './pages/Features'
import PricingSection from './pages/Section'
import TampilanTestimoni from './pages/Tampilan'
import Message from './pages/MessagePayment'
import NotFoundMessage from './pages/Message404'

function App() {


  return (
    <BrowserRouter >
    <Navbar />
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/getstarted" element={<GetStarted />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<PricingSection />} />
      <Route path="/testimonials" element={<TampilanTestimoni />} />
      <Route path="/message" element={<Message />} />
      <Route path="*" element={<NotFoundMessage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
