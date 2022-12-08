export function Header(){
    return (
        <header class='w-full px-8 flex absolute top-0 justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16'>
        <a
          href='/'
          class='inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5'
          aria-label='logo'
        >
          <img src='/assets/logo-Horizontal.svg' class='h-auto w-40' />
        </a>

        <nav class='hidden lg:flex gap-12'>
          <a
            href='/#feature'
            class='text-gray-600 hover:text-iggy-green active:text-iggy-green text-lg font-semibold transition duration-100'
          >
            Fonctionnalités
          </a>
          <a
            href='#chiffre'
            class='text-gray-600 hover:text-iggy-green active:text-iggy-green text-lg font-semibold transition duration-100'
          >
            Les chiffres
          </a>
          <a
            href='#avis'
            class='text-gray-600 hover:text-iggy-green active:text-iggy-green text-lg font-semibold transition duration-100'
          >
            Les avis
          </a>
        </nav>

        {/* <a
          href='#'
          class='hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'
        >
          Nous contacter
        </a> */}

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
    )
}