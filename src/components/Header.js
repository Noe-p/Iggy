import '../App.css';

export function Header() {
  return (
    <div className='App'>
      <div class='bg-white pb-6 sm:pb-8 lg:pb-12'>
        <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
          <header class='flex justify-between items-center border-b py-4 md:py-8 mb-8 md:mb-12 xl:mb-16'>
            <a
              href='/'
              class='inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5'
              aria-label='logo'
            >
              <img src='/assets/logo-Horizontal.svg' class='h-auto w-40' />
            </a>

            <nav class='hidden lg:flex gap-12'>
              <a href='#' class='text-iggy-green text-lg font-semibold'>
                Home
              </a>
              <a
                href='#'
                class='text-gray-600 hover:text-iggy-green active:text-iggy-green text-lg font-semibold transition duration-100'
              >
                Fonctionnalités
              </a>
              <a
                href='#'
                class='text-gray-600 hover:text-iggy-green active:text-iggy-green text-lg font-semibold transition duration-100'
              >
                À propos
              </a>
              <a
                href='#'
                class='text-gray-600 hover:text-iggy-green active:text-iggy-green text-lg font-semibold transition duration-100'
              >
                Les chiffres
              </a>
              <a
                href='#'
                class='text-gray-600 hover:text-iggy-green active:text-iggy-green text-lg font-semibold transition duration-100'
              >
                Les avis
              </a>
            </nav>

            <a
              href='#'
              class='hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'
            >
              Nous contacter
            </a>

            <button
              type='button'
              class='inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-6 w-6'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'
                />
              </svg>
              Menu
            </button>
          </header>

          <section class='flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16'>
            <div class='xl:w-5/12 flex flex-col justify-between'>
              <div></div>

              <div class='sm:text-center lg:text-left lg:py-12 xl:py-24'>

                <h1 class='text-gray-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 font-gilroy'>
                  Deviens son meilleur ami !
                </h1>

                <p class='text-gray-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6'>
                Accompagnez et responsabilisez votre enfant au bien-être et à la santé de votre animal de compagnie grâce à un suivi quotidien personnalisé via une application ludique !
                </p>

                <div class='flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5'>
                  <a
                    href='#funcs'
                    class='inline-block bg-iggy-green hover:bg-iggy-green active:bg-iggy-green focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'
                  >
                    Plus d'informations
                  </a>
                </div>
              </div>
            </div>

            <iframe src="https://embed.lottiefiles.com/animation/6732" class='w-1/2 align-center'></iframe>
          </section>
        </div>
      </div>
    </div>
  );
}
