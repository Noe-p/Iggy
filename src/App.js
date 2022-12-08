import { Widget } from '@typeform/embed-react';

import './App.css';
import {
  CallToAction,
  Footer,
  Header,
  Hero,
  Mockup1,
  Stat,
  Testimonials,
  Title,
} from './components';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Title anchor='feature'>Iggy vous aide à ... </Title>
      <Mockup1 />
      <CallToAction />
      <Stat />
      <Testimonials />
      <div id='typeform'>
        <Widget id='LCa7UPQJ' height={400} disableScroll={true}></Widget>
      </div>
      <Footer />
    </div>
  );
}

export default App;
