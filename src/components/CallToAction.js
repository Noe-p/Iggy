export function CallToAction() {
  return (
    <div class='bg-white py-6 sm:py-8 lg:py-12'>
      <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div class='flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg gap-4 p-4 md:p-8'>
          <div>
            <h2 class='bg-iggy-green text-xl md:text-2xl font-bold'>
              Comment trouvez-vous Iggy ?
            </h2>
            <p class='text-gray-600'>No Credit Card required</p>
          </div>
          <div>
            <a
              href='#'
              class='mr-10 inline-block bg-iggy-green hover:bg-iggy-green active:bg-iggy-green focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'
            >
              Intéressant 🤩
            </a>
            <a
              href='#'
              class='inline-block bg-iggy-green hover:bg-iggy-green active:bg-iggy-green focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'
            >
              Pas ouf 😐
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
