import { Widget } from '@typeform/embed-react';
import TagManager from 'react-gtm-module'


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

const tagManagerArgs = {
  gtmId: 'GTM-NJ8K5H3'
}

TagManager.initialize(tagManagerArgs)

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
