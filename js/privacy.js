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

     /*SCROLL MENU*/

     const cabecera = document.querySelector('.Header-wrapper')
     const logo = document.querySelector('.Logo-FdS')

     window.addEventListener('scroll' , function(){
         cabecera.classList.toggle('isActive' , window.scrollY >0)
     })

     window.addEventListener('scroll' , function(){
         logo.classList.toggle('isActive' , window.scrollY >0)
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