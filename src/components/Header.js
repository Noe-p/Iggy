export function Header() {
  return (
    <header class='w-full px-8 flex absolute top-0 justify-center lg:justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16'>
      <a
        href='/'
        class='inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5'
        aria-label='logo'
      >
        <img src='/assets/logo.png' class='h-auto w-40' />
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
    </header>
  );
}
