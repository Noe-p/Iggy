export function Stat() {
  return (
    <div class='max-w-screen-lg px-4 md:px-8 mx-auto lg:mb-32'>
      <div class='mb-8 md:mb-12'>
        <p class='max-w-screen-md text-gray-500 md:text-lg text-center mx-auto'>
          En France, nous apportons énormément d'attention aux animaux de
          compagnie, vous faites ou pouvez faire partie d'une très grande
          famille !
        </p>
      </div>

      <div class='grid grid-cols-2 md:grid-cols-4 bg-iggy-green rounded-lg gap-6 md:gap-8 p-6 md:p-8'>
        <div class='flex flex-col items-center'>
          <div class='text-white text-xl sm:text-2xl md:text-3xl font-bold'>
            +30M
          </div>
          <div class='text-white text-sm sm:text-base'>de propriétaires</div>
        </div>

        <div class='flex flex-col items-center'>
          <div class='text-white text-xl sm:text-2xl md:text-3xl font-bold'>
            7.8M
          </div>
          <div class='text-white text-sm sm:text-base'>
            aimeraient en avoir un
          </div>
        </div>

        <div class='flex flex-col items-center'>
          <div class='text-white text-xl sm:text-2xl md:text-3xl font-bold'>
            70%
          </div>
          <div class='text-white text-sm sm:text-base'>
            aiment comme un proche
          </div>
        </div>

        <div class='flex flex-col items-center'>
          <div class='text-white text-xl sm:text-2xl md:text-3xl font-bold'>
            32%
          </div>
          <div class='text-white text-sm sm:text-base'>foyers avec enfants</div>
        </div>
      </div>
    </div>
  );
}
