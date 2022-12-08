export function Footer() {
  return (
    <div class='bg-white pt-4 sm:pt-10 lg:pt-12'>
      <footer class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div class='flex flex-col items-center border-t pt-6'>
          <div class='my-5'>
            <a href='#typeform' class='inline-block w-32 mr-8'>
              <img
                src='/assets/google-play@2x.png'
                alt='Google Play'
                class='w-fit'
              />
            </a>
            <a href='#typeform' class='inline-block w-32'>
              <img
                src='/assets/app-store@2x.png'
                alt='AppStore'
                class='w-fit'
              />
            </a>
          </div>
          <div class='flex gap-4 mb-5'>
            <a
              href='https://www.instagram.com/iggy_app/'
              target='_blank'
              class='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
            >
              <svg
                class='w-5 h-5'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
              </svg>
            </a>

            <a
              href='https://www.facebook.com/Iggyapp/'
              target='_blank'
              class='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
            >
              <img src='/assets/facebook.svg' alt='facebook' className='w-5' />
            </a>
          </div>
        </div>

        <a
          className='mt-8 text-sm text-center text-gray-400'
          href='mailto:contact.iggyapp@gmail.com'
        >
          contact.iggyapp@gmail.com
        </a>

        <div class='text-gray-400 text-sm text-center py-8'>
          © 2022 - Iggy App. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
