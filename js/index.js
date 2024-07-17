(function() {
    /*MENU HORIZONTAL EN DESKTOP*/

    const navHorizontal = document.querySelector('.Navegacion-horizontal')
    const abrir = document.querySelector('.abrir')
    const cerrar = document.querySelector('.cerrar')

    function abrirMenuHorizontal() {
        navHorizontal.classList.add('isActive');
        document.body.classList.add('No-scroll');
    }

    function cerrarMenuHorizontal() {
        navHorizontal.classList.remove('isActive');
        document.body.classList.remove('No-scroll');
    }

    abrir.addEventListener('click', abrirMenuHorizontal);
    cerrar.addEventListener('click', cerrarMenuHorizontal);

    /*MENU HORIZONTAL RESPONSIVE*/

    const navResponsive = document.querySelector('.Navegacion-responsive')
    const abrirResponsive = document.querySelector('.Responsive-abrir')
    const cerrarResponsive = document.querySelector('.Responsive-cerrar')

    function abrirMenuResponsive() {
        navResponsive.classList.add('isActive');
        document.body.classList.add('No-scroll');
    }

    function cerrarMenuResponsive() {
        navResponsive.classList.remove('isActive');
        document.body.classList.remove('No-scroll');
    }

    abrirResponsive.addEventListener('click', abrirMenuResponsive);
    cerrarResponsive.addEventListener('click', cerrarMenuResponsive);

    /*BLOQUE PRINCIPAL MASCARA*/

    const fondo = document.querySelectorAll('.Mask-wrap')
    const descripcion = document.querySelectorAll('.Descripcion-wrap')
    const titulo = document.querySelectorAll('.Wrapper-texto')

    descripcion.forEach( function (eachDes , index){
        descripcion[index].addEventListener('mouseover' , () => {
            fondo.forEach(function (eachFon , index){
                fondo[index].classList.remove('isActive')
            })
            fondo[index].classList.add('isActive')
        })
    })

    descripcion.forEach(function (eachDes , index){
        descripcion[index].addEventListener('mouseover' , () =>{
            titulo.forEach(function (eachTit , index){
                titulo[index].classList.remove('isActive')
            })
            titulo[index].classList.add('isActive')

        })
    })

     /*BLOQUE MÁSCARA EN BODY*/

     const fondoTop = document.querySelectorAll('.Mascara-wrap')
     const descripcionTop = document.querySelectorAll('.Descripcion-top')
     const tituloTop = document.querySelectorAll('.Wrapper-top')

     descripcionTop.forEach( function (eachDes , index){
         descripcionTop[index].addEventListener('mouseover' , () => {
             fondoTop.forEach(function (eachFon , index){
                 fondoTop[index].classList.remove('isActive')
             })
             fondoTop[index].classList.add('isActive')
         })
     })

     descripcionTop.forEach(function (eachDes , index){
         descripcionTop[index].addEventListener('mouseover' , () =>{
             tituloTop.forEach(function (eachTit , index){
                 tituloTop[index].classList.remove('isActive')
             })
             tituloTop[index].classList.add('isActive')
         })
     })

     /*SCROLL MENU*/

     const cabecera = document.querySelector('.Header-wrapper')
     const logo = document.querySelector('.Logo-FdS')

     window.addEventListener('scroll' , function(){
         cabecera.classList.toggle('isActive' , window.scrollY >0)
     })

     window.addEventListener('scroll' , function(){
         logo.classList.toggle('isActive' , window.scrollY >0)
     })

     /*CARRUSEL*/

     let posicion = 0

     const carruselSlider = document.querySelector('.Carrusel-slider')
     const siguiente = document.querySelector('.Siguiente')
     const anterior = document.querySelector('.Anterior')

     siguiente.addEventListener('click' , function(){
         posicion++

         if( posicion >=3){
             posicion = 0
         }

         console.log( posicion )

         carruselSlider.style.transform = `translateX(-${posicion * (100 / 6)}%)`
     })

     anterior.addEventListener('click' , function(){
         posicion--

         if( posicion < 0){
             posicion = 2
         }

         console.log(posicion)

      carruselSlider.style.transform = `translateX(-${posicion * (100 / 6)}%)`
      })

      /*MODAL NEWSLETTER*/

      var modal = document.getElementById("modal");
      var btnAbrirModal = document.getElementById("abrirModal");
      var svgAbrirModal = document.getElementById("abrirSvg");
      var spanCerrar = document.getElementsByClassName("cerrar-newsletter")[0];

      btnAbrirModal.onclick = function() {
          modal.style.display = "block";
      }

      svgAbrirModal.onclick = function() {
          modal.style.display = "block";
      }

      spanCerrar.onclick = function() {
          modal.style.display = "none";
      }
})();

/*MODAL BÚSQUEDA*/

function abrirModalBusqueda() {
    document.getElementById('modal-busqueda').style.display =
    'block';
}

function cerrarModalBusqueda() {
    document.getElementById('modal-busqueda').style.display =
    'none';
}

 /*MODAL BÚSQUEDA RESPONSIVE*/

 function abrirModalBusquedaResponsive() {
     document.getElementById('modal-busqueda-responsive').style.display =
     'block';
 }

 function cerrarModalBusquedaResponsive() {
     document.getElementById('modal-busqueda-responsive').style.display =
     'none';
 }