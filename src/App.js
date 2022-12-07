import { Sidetab, Widget } from '@typeform/embed-react';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import {
  About2,
  Footer,
  Header,
  Mockup1,
  Mockup2,
  Mockup3,
  Stat,
  Testimonials,
  Title,
} from './components';

function App() {
  return (
    <div className='App'>
      <Header />
      <Title anchor='feature'>Fonctionnalités</Title>
      <Mockup1 />
      {/*<Mockup2 />
       <Mockup3 />
      <CallToAction />
      <div class='bg-white py-6 sm:py-8 lg:py-8'>
        <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>

          <h2 class='text-gray-800 text-2xl lg:text-5xl font-bold mb-4 md:mb-6 font-gilroy'>
            Que faisons nous ?
          </h2>
        </div>
      </div>
      */}
      
      <Stat />
      <Testimonials />
      <Sidetab
        id='LCa7UPQJ'
        buttonText='Rester informé'
        style={{ width: '100%' }}
      />
      <Widget id='LCa7UPQJ' height={400} disableScroll={true}></Widget>
      <Footer />
    </div>
  );
}

export default App;
