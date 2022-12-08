import { Title } from './Title';

export function Testimonials() {
  return (
    <div class='max-w-screen-xl px-4 md:px-8 mx-auto lg:my-32'>
      <Title anchor='avis'>Vos besoins</Title>
      <div class='grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 lg:divide-x'>
        <div class='flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8'>
          <div class='text-gray-600 text-center'>
            “Mon fils a 8 ans, il adore notre chien mais je ne peux pas encore
            lui confier certaines tâches”
          </div>

          <div class='flex flex-col sm:flex-row items-center gap-2 md:gap-3'>
            <div class='w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
              <img
                src='https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112'
                loading='lazy'
                alt='Photo by Radu Florin'
                class='w-full h-full object-cover object-center'
              />
            </div>

            <div>
              <div class='text-iggy-green text-sm md:text-base font-bold text-center sm:text-left'>
                Arthur LAPIERRE
              </div>
            </div>
          </div>
        </div>

        <div class='flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8'>
          <div class='text-gray-600 text-center'>
            “This is a section of some simple filler text, also known as
            placeholder text.”
          </div>

          <div class='flex flex-col sm:flex-row items-center gap-2 md:gap-3'>
            <div class='w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
              <img
                src='https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112'
                loading='lazy'
                alt='Photo by christian ferrer'
                class='w-full h-full object-cover object-center'
              />
            </div>

            <div>
              <div class='text-iggy-green text-sm md:text-base font-bold text-center sm:text-left'>
                Alice DUBOIS
              </div>
            </div>
          </div>
        </div>

        <div class='flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8'>
          <div class='text-gray-600 text-center'>
            “This is a section of some simple filler text, also known as
            placeholder text.”
          </div>

          <div class='flex flex-col sm:flex-row items-center gap-2 md:gap-3'>
            <div class='w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
              <img
                src='https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500'
                loading='lazy'
                alt='Photo by Ayo Ogunseinde'
                class='w-full h-full object-cover object-center'
              />
            </div>

            <div>
              <div class='text-iggy-green text-sm md:text-base font-bold text-center sm:text-left'>
                Richard BEAULIEU
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
