  // Inicializar la barra lateral
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
});

//FUNCION PARA EL HEADER DE LALS VISTAS.

class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header id="header" class="page-topbar">
    <!-- encabezado logo-->
    <!-- Navbar -->
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Mi Proyecto</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><span class="material-symbols-outlined">menu</span></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#"><i class="material-symbols-outlined">home</i> Inicio</a></li>
                <li><a href="#"><i class="material-symbols-outlined">info</i> Acerca de</a></li>
                <li><a href="#"><i class="material-symbols-outlined">call</i> Contacto</a></li>
                <li><a href="#"><i class="material-symbols-outlined">lock</i>Iniciar sesión</a></li>
            </ul>
        </div>
    </nav>    
    <!-- FIN DEL NAV encabezado logo-->

    <!--BUSCADOR-->
        <div id="buscador" class="contenedor-buscador">
        <div class="row">
          <div class="col s11">
            <div class="row buscador">
              <div class="s10 col">
                <input class="uil uil-search-alt" data-role="none" id="articulo" placeholder="Buscar" value=""
                  autocomplete="off">
              </div>
              <div class="s2 col">           
                <button id="buscado" class="search-action ui-btn" onclick="javascript: Busqueda()">
                  <i class="material-symbols-outlined">search</i>
                </button>
              </div>
            </div>
          </div>        
        </div>
    </div>
    <!--FIN BUSCADOR-->

    <!-- MENU LATERAL IZQUIERDO -->
    Menú lateral (hamburguesa)
    <ul class="sidenav" id="mobile-demo">       
            <div class="row bordered">
              <div class="col s6 m6" style="display: flex; align-items: center;">
                <a href="home.html">
                <img src="img/Logo2.png" class="img-circle profile_img" style="max-width: 74%; height: auto;margin-right: 10px;">
                </a>
                <span id="usuario" class="hide-on-med-and-downx" style="color: #000;">USER NAME</span>
                <input type="hidden" id="hUsuario" />
              </div>
              <div class="col s6 m6">
                <div class="close-session">
                  <a href="#" onclick="logout();" class="green-text"><span class="material-symbols-outlined green-text right"
                      style="margin-right: 0px;">power_off</span><span class="textclose-sesion">Cerrar sesión</span></a>
                </div>
              </div>
            </div>
            <li><a href="#"><i class="material-symbols-outlined">home</i> Inicio</a></li>
            <li><a href="#"><i class="material-symbols-outlined">info</i> Acerca de</a></li>
            <li><a href="#"><i class="material-symbols-outlined">call</i> Contacto</a></li>
            <li><a href="#"><i class="material-symbols-outlined">lock</i>Iniciar sesión</a></li>
    </ul>
    <!-- FIN MENU LATERAL IZQUIERDO -->
  </header>
`;
  }
}
// template.innerHTML = document.body.appendChild(template.content);

customElements.define("my-header", MyHeader);
