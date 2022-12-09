import { Widget } from '@typeform/embed-react';
import TagManager from 'react-gtm-module'
import HubspotForm from 'react-hubspot-form'


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
      <Title anchor='feature'>Iggy vous aide à ...</Title>
      <Mockup1 />
      <CallToAction />
      <Stat />
      <Testimonials />
      <div className="flex justify-center flex-col content-center w-3/4 lg:w-1/2 mx-auto">
      <Title anchor='contact'>Testez Iggy en avant-première</Title>
        <div className='my-5 lg:my-0'>
        <HubspotForm
          portalId='26697104'
          formId='c710d628-fb8b-43bd-b160-31d0838865a2'
          onSubmit={() => console.log('Submit!')}
          onReady={(form) => console.log('Form ready!')}
          loading={<div>Loading...</div>}
        />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
