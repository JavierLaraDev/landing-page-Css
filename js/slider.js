(function(){
  const sliders=[...document.querySelectorAll('.testimony_body')];//se coloca los corchetes y ... para que pase de un NodeList a un array de elementos
  const buttonNext = document.querySelector('#next'); // Selecciona el botón de siguiente
  const buttonBefore=document.querySelector('#before'); // Selecciona el botón de anterior
  let value;

  buttonNext.addEventListener('click', ()=>{
    changePosition(1); // Llama a la función changePosition para avanzar en el slider
  });

  buttonBefore.addEventListener('click',()=>{
    changePosition(-1); // Llama a la función changePosition para retroceder en el slider
  });

  const changePosition = (add)=>{
    const currentTestimony=document.querySelector('.testimony_body--show').dataset.id; // Obtiene el ID del testimonio actualmente visible
    value=Number(currentTestimony); // Convierte el ID en un número
    value+=add; // Incrementa o decrementa el valor según el botón presionado
    
    sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show'); // Oculta el testimonio actual

    if (value===sliders.length+1 || value === 0) { // Si el valor excede el rango de testimonios, lo reinicia
      value = value === 0 ? sliders.length : 1;
    }
    
    sliders[value-1].classList.add('testimony_body--show'); // Muestra el nuevo testimonio seleccionado
  }

})();
