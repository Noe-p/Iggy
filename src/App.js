import { Sidetab } from '@typeform/embed-react';
import './App.css';
import {
  About1,
  About2,
  Footer,
  Header,
  Mockup1,
  Mockup2,
  Mockup3,
  Stat,
  Testimonials,
} from './components';

function App() {
  return (
    <div className='App'>
      <Header />
      <div class='bg-white py-6 sm:py-8 lg:pt-32 lg:pb-0'>
        <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
          <h2 class='text-gray-800 text-2xl lg:text-3xl font-bold mb-4 md:mb-6'>
            Quelques fonctionnalités
          </h2>
        </div>
      </div>
      <Mockup1 />
      <Mockup2 />
      <Mockup3 />
      {/* <CallToAction /> */}
      <div class='bg-white py-6 sm:py-8 lg:py-8'>
        <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
          <p class='text-iggy-green lg:text-lg font-semibold mb-2 md:mb-3'>
            Un peu plus de détails
          </p>

          <h2 class='text-gray-800 text-2xl lg:text-3xl font-bold mb-4 md:mb-6'>
            Que faisons nous ?
          </h2>
        </div>
      </div>
      <About1 />
      <About2 />
      <Stat />
      <Testimonials />
      <Sidetab
        id='LCa7UPQJ'
        buttonText='Rester informé'
        style={{ width: '100%', background: 'red' }}
      />
      <Footer />
    </div>
  );
}

export default App;
