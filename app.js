const instagram_button=document.querySelector('.insta_button');
const gridlay_button=document.querySelector('.grid_button');
const instagram=document.querySelector('.images');
const grid=document.querySelector('.gridlayout');


    // Función para mostrar el gird y ocultar el insta
    instagram_button.addEventListener('click', () => {
        instagram.classList.remove('hidden');
        grid.classList.add('hidden');
        console.log('hola')
      });
  
      // Función para mostrar el insta y ocultar el grid
      gridlay_button.addEventListener('click', () => {
        grid.classList.remove('hidden');
        instagram.classList.add('hidden');
      });