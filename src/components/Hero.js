import '../App.css';

export function Hero() {
  return (
    <div class='bg-white h-screen'>
      <div class='max-w-screen-2xl px-4 md:px-8 mx-auto h-full'>
        <section class='flex flex-col justify-center lg:flex-row lg:justify-between items-center gap-6 sm:gap-10 md:gap-16 h-full'>
          <div class='xl:w-5/12 flex flex-col justify-between'>
            <div class='sm:text-center lg:text-left lg:py-12 xl:py-24'>
              <h1 class='text-gray-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 font-dosis'>
                Deviens son meilleur ami !
              </h1>

              <p class='text-gray-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6'>
                Accompagnez et responsabilisez votre enfant au bien-être et à la
                santé de votre animal de compagnie grâce à un suivi quotidien
                personnalisé via une application ludique !
              </p>

              <div class='flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5'>
                <a
                  href='#funcs'
                  class='inline-block bg-iggy-green hover:bg-iggy-green active:bg-iggy-green focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'
                >
                  Plus d'informations
                </a>
                <a
                  href='mailto:contact.iggyapp@gmail.com'
                  class='inline-block border border-iggy-green focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center text-iggy-green rounded-lg outline-none transition duration-100 px-8 py-3'
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>

          <iframe
            src='https://embed.lottiefiles.com/animation/6732'
            class='w-1/2 lg:h-5/6'
          ></iframe>
        </section>
      </div>
    </div>
  );
}
