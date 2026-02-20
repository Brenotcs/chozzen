import { Navigation } from './components/Navigation';
import { Cursor } from './components/Cursor';
import { Hero } from './components/Hero';
import { Bio } from './components/Bio';
import { Music } from './components/Music';
import { Experience } from './components/Experience';
import { Visual } from './components/Visual';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Cursor />
      <Navigation />
      <Hero />
      <Bio />
      <Music />
      <Experience />
      <Visual />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
