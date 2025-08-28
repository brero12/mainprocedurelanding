import AppTheme from './theme/AppTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import './App.css'

function App(props: { disableCustomTheme?: boolean }) {

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      
      <AppAppBar />
      <Hero />
      <div>
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  )
}

export default App
