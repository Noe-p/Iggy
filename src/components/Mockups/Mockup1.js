import {useEffect} from 'react'

export function Mockup1() {

  const images = [
    "/assets/photo1.avif",
    "/assets/photo2.avif",
    "/assets/photo3.avif"
  ]

  const img = document.getElementById("img")

  function changeImage(e){
    img.setAttribute("src",images[e.currentTarget.id])
  }

  return (
    <div class=' bg-white py-6 sm:py-8'>
      <div class=' max-w-screen-xl px-4 md:px-8 mx-auto'>
        <div class='grid md:grid-cols-2 gap-8 lg:gap-12'>
          <div>
            <div class='h-32 overflow-hidden bg-gray-100 rounded-lg shadow-lg md:h-auto'>
              <img
                src= "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=700"
                loading='lazy'
                alt='Photo by Martin Sanchez'
                class='object-cover object-center w-full h-full'
                id="img"
              />
            </div>
          </div>

          <div class='md:pt-8 features'>
            <div className="feature" id="0" onMouseEnter={changeImage}>
              <p class='text-iggy-green font-bold text-center md:text-left'>
                Centralisation
              </p>
              <h1 class='text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>
                Ajoutez votre animal
              </h1>
              <p class='text-gray-500 sm:text-lg mb-6 md:mb-8 md:text-left'>
                Afin de personnaliser au mieux votre expérience sur l’application,
                il vous faudra rentrer vos animaux sur l’application. Quelques
                données tels que son petit nom, sa date de naissance, sa race et
                son sexe vous sera demandé.
              </p>
            </div>

            <div className="feature" id="1" onMouseEnter={changeImage}>
              <p class='text-iggy-green font-bold text-center md:text-left'>
                Automatisation
              </p>
              <h1 class='text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>
                Intégrez des tâches récurrentes
              </h1>
              <p class='text-gray-500 sm:text-lg mb-6 md:mb-8 text-left'>
                L’application vous permet de sélectionner les tâches
                que vous souhaitez déléguer à votre enfant. Nous vous suggérons
                les tâches basiques pour séduire tout compagnon, à vous
                de les sélectionner, les personnaliser voire paramétrer une récurrence.
              </p>
            </div>

            <div className="feature" id="2" onMouseEnter={changeImage}>
              <p class='text-iggy-green font-bold text-center md:text-left'>
                Sécurité
              </p>
              <h1 class='text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>
                Un contrôle de sûreté
              </h1>
              <p class='text-gray-500 sm:text-lg mb-6 md:mb-8 text-left'>
                Afin de s'assurer que tout va bien à la maison, en tant que parent, les actions 
                entreprises par vos enfants vous sont notifiées. 
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
