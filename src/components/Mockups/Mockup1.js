export function Mockup1() {
  return (
    <div class=' bg-white py-6 sm:py-8'>
      <div class=' px-4 md:px-8 mx-auto'>
        <div class='grid md:grid-cols-2 gap-8 lg:gap-12'>
          <div>
            <div className='h-32 overflow-hidden bg-gray-100 rounded-lg shadow-lg md:h-auto'>
              <img
                src='https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750'
                loading='lazy'
                alt='Photo by Martin Sanchez'
                class='object-cover object-center w-full h-full'
              />
            </div>
          </div>

          <div class='md:pt-8'>
            <p class='text-iggy-green font-bold text-center md:text-left'>
              Fonctionnalité
            </p>

            <h1 class='text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>
              Ajoutez votre animal
            </h1>

            <p class='text-gray-500 sm:text-lg mb-6 md:mb-8 md:text-left'>
              Afin de personnaliser au mieux votre expérience sur l’application,
              il vous faudra rentrer vos animaux sur l’application. Quelques
              données tels que son petit nom, sa date de naissance, sa race et
              son sexe vous sera deemandé.
            </p>

            <p class='text-iggy-green font-bold text-center md:text-left'>
              Fonctionnalité
            </p>

            <h1 class='text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>
              Intégrez des tâches récurrentes
            </h1>

            <p class='text-gray-500 sm:text-lg mb-6 md:mb-8 md:text-left'>
              L’application vous permet de sélectionner vous même, les tâches
              que vous souhaitez délégués à votre enfant. Nous vous suggérons
              déjà des tâches pour rendre heureux votre compagnon, puis à vous
              de les sélectionner et de les personnaliser en ajoutant une
              récurrence. Vous pouvez également créer une tâche ponctuelle où
              c’est vous qui décidez de ce que vous souhaitez mettre en place
              auprès de votre ado. Ces tâches permettront de mettre en place une
              routine et un lien entre votre animal et votre adolescent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
