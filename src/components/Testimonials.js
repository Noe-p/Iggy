import { Title } from './Title';

export function Testimonials() {
  return (
    <div class='max-w-screen-xl px-4 md:px-8 mx-auto lg:my-32'>
      <Title anchor='avis'>Vos besoins</Title>
      <div class='grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 lg:divide-x'>
        <div class='flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8'>
          <div class='text-gray-600 text-center'>
            "J'aimerais que mes enfants s'occupe du chat sans que j'ai à y
            penser"
          </div>

          <div class='flex flex-col sm:flex-row items-center gap-2 md:gap-3'>
            <div class='w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
              <img
                src='/assets/karine.jpeg'
                loading='lazy'
                alt='Photo by Radu Florin'
                class='w-full h-full object-cover object-center'
              />
            </div>

            <div>
              <div class='text-iggy-green text-sm md:text-base font-bold text-center sm:text-left'>
                Karine Dubois
              </div>
              <p class='text-gray-500 text-sm md:text-sm text-center sm:text-left'>
                Cheffe de projet
              </p>
            </div>
          </div>
        </div>

        <div class='flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8'>
          <div class='text-gray-600 text-center'>
            "Notre chien est très expressif mais nous ne comprenons pas toujours
            ses expressions"
          </div>

          <div class='flex flex-col sm:flex-row items-center gap-2 md:gap-3'>
            <div class='w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
              <img
                src='/assets/richard.jpeg'
                loading='lazy'
                alt='Photo by christian ferrer'
                class='w-full h-full object-cover object-center'
              />
            </div>

            <div>
              <div class='text-iggy-green text-sm md:text-base font-bold text-center sm:text-left'>
                Richard Beaulieu
              </div>
              <p class='text-gray-500 text-sm md:text-sm text-center sm:text-left'>
                Père de famille
              </p>
            </div>
          </div>
        </div>

        <div class='flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8'>
          <div class='text-gray-600 text-center'>
            “Mon fils a 8 ans, il adore notre chien mais je ne peux pas encore
            lui confier certaines tâches”
          </div>

          <div class='flex flex-col sm:flex-row items-center gap-2 md:gap-3'>
            <div class='w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg'>
              <img
                src='/assets/arthur.jpeg'
                loading='lazy'
                alt='Photo by Ayo Ogunseinde'
                class='w-full h-full object-cover object-center'
              />
            </div>

            <div>
              <div class='text-iggy-green text-sm md:text-base font-bold text-center sm:text-left'>
                Arthur Lapierre
              </div>
              <p class='text-gray-500 text-sm md:text-sm text-center sm:text-left'>
                Professeur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
