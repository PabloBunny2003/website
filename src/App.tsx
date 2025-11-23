import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Organigram from './components/Organigram';
import AttentionAreas from './components/AttentionAreas';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <About />
        <Philosophy />
        <Organigram />
        <AttentionAreas />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
