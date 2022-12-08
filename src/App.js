import { Widget } from '@typeform/embed-react';

import ReactGA from 'react-ga';
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
const TRACKING_ID = 'G-QKKQLNH826'; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

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
