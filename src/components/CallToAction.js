export function CallToAction() {
  return (
    <div class='bg-white py-6 sm:py-8 lg:py-12'>
      <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div class='flex flex-col sm:flex-row justify-between items-center bg-iggy-green rounded-lg gap-4 p-4 md:p-8'>
          <div>
            <h2 class='text-white text-xl md:text-2xl font-bold'>
              Adoptez Iggy depuis différents stores !
            </h2>
            <p class='text-gray-100'>Iggy est encore un peu timide et en cours de développement :)</p>
          </div>
          <div class="opacity-50 pointer-events-none">
            <a
              href='#'
              class='inline-block w-40 mr-8'
            >
              <img src="/assets/google-play@2x.png" alt="Google Play" class="w-fit"/>
            </a>
            <a
              href='#'
              class='inline-block w-40'
            >
              <img src="/assets/app-store@2x.png" alt="AppStore" class="w-fit"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
