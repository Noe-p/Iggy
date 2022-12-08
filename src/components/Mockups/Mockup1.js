import { useState } from 'react';

export function Mockup1() {
  const [imageUrl, setImageUrl] = useState('mockup1');

  // function changerImageUrl() {
  //   console.log(imageUrl);
  //   switch (imageUrl) {
  //     case 'photo1':
  //       setImageUrl('photo2');
  //     case 'photo2':
  //       setImageUrl('photo3');
  //     case 'photo3':
  //       setImageUrl('photo1');
  //   }
  // }

  // function timer() {
  //   const timer = setTimeout(() => {
  //     changerImageUrl();
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }
  // useEffect(() => {
  //   timer();
  // }, [imageUrl]);

  return (
    <div class=' bg-white py-6 sm:py-8 bg-pets-pattern'>
      <div class=' max-w-screen-xl px-4 md:px-8 mx-auto'>
        <div class='grid md:grid-cols-2 gap-8 lg:gap-12'>
          <img
            src={`/assets/${imageUrl}.png`}
            loading='lazy'
            alt='Photo by Martin Sanchez'
            class='object-cover object-center w-full h-full hidden sm:block'
            id='img'
          />

          <img
            src={`/assets/mockup1.png`}
            loading='lazy'
            alt='Photo by Martin Sanchez'
            class='object-cover object-center w-full h-full sm:hidden'
            id='img'
          />

          <div class='features bg-white rounded-xl shadow-sm'>
            <div
              className={`feature  p-5  ${
                imageUrl === 'mockup1' ? 'opacity-100' : 'md:opacity-30'
              }`}
              onMouseOver={() => setImageUrl('mockup1')}
            >
              <p class='text-iggy-green font-bold  text-center md:text-left'>
                Personnalisation
              </p>
              <h3 class='text-gray-800 text-2xl sm:text-3xl font-dosis font-bold text-center md:text-left mb-4 md:mb-6'>
                Ajouter vos animaux
              </h3>
              <p class='text-gray-500 sm:text-lg  md:text-left'>
                Afin de personnaliser au mieux votre expérience sur
                l’application, il vous faudra rentrer vos animaux sur
                l’application. Quelques données tels que son petit nom, sa date
                de naissance, sa race et son sexe vous seront demandé.
              </p>
            </div>

            <div>
              <img
                src={`/assets/mockup2.png`}
                loading='lazy'
                alt='Photo by Martin Sanchez'
                class='object-cover object-center w-full h-full sm:hidden'
                id='img'
              />
            </div>

            <div
              className={`feature mt-5 bg-white p-5 rounded-xl ${
                imageUrl === 'mockup2' ? 'opacity-100' : 'md:md:opacity-30'
              }`}
              onMouseOver={() => setImageUrl('mockup2')}
            >
              <p class='text-iggy-green font-bold text-center md:text-left'>
                Automatisation
              </p>
              <h3 class='text-gray-800 font-dosis text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>
                Intégrez des tâches récurrentes
              </h3>
              <p class='text-gray-500 sm:text-lg md:text-left'>
                Choisissez les tâches que vous souhaitez déléguer à votre
                enfant. Nous vous suggérons les tâches basiques pour séduire
                tout compagnon, à vous de les sélectionner et les personnaliser.
              </p>
            </div>

            <div>
              <img
                src={`/assets/mockup3.png`}
                loading='lazy'
                alt='Photo by Martin Sanchez'
                class='object-cover object-center w-full h-full sm:hidden'
                id='img'
              />
            </div>

            <div
              className={`feature  mt-5 bg-white p-5 rounded-xl ${
                imageUrl === 'mockup3' ? 'opacity-100' : 'md:md:opacity-30'
              }`}
              onMouseOver={() => setImageUrl('mockup3')}
            >
              <p class='text-iggy-green font-bold text-center md:text-left'>
                Sécurité
              </p>
              <h3 class='text-gray-800 font-dosis text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>
                Un contrôle de sûreté
              </h3>
              <p class='text-gray-500 sm:text-lg md:text-left'>
                Afin de s'assurer que tout va bien à la maison, en tant que
                parent, les actions entreprises par vos enfants vous sont
                notifiées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
