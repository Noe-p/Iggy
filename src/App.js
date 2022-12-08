import { Widget } from '@typeform/embed-react';

import './App.css';
import {
  Footer,
  Hero,
  Header,
  Mockup1,
  CallToAction,
  Stat,
  Testimonials,
  Title,
} from './components';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Title anchor='feature'>Fonctionnalités</Title>
      <Mockup1 />
      <CallToAction />
      <Stat />
      <Testimonials />
      <Widget id='LCa7UPQJ' height={400} disableScroll={true}></Widget>
      <Footer />
    </div>
  );
}

export default App;
