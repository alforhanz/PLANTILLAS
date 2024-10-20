// Función para generar el encabezado del sitio
function crearEncabezado() {
    const header = document.getElementById('site-header');
    header.innerHTML = `
        <nav class="navbar">
            <div class="logo">
                <a href="index.html">Mi Sitio Web</a>
            </div>
            <ul class="nav-menu">
                <li class="nav-item"><a href="index.html" class="nav-link">Inicio</a></li>
                <li class="nav-item"><a href="about.html" class="nav-link">Acerca de</a></li>
                <li class="nav-item"><a href="services.html" class="nav-link">Servicios</a></li>
                <li class="nav-item"><a href="contact.html" class="nav-link">Contacto</a></li>
            </ul>
        </nav>
    `;
}

// Función para generar el pie de página del sitio
function crearFooter() {
    const footer = document.getElementById('site-footer');
    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; ${new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
            <ul class="footer-menu">
                <li><a href="privacy.html">Política de Privacidad</a></li>
                <li><a href="terms.html">Términos de Servicio</a></li>
                <li><a href="contact.html">Contacto</a></li>
            </ul>
            <div class="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </div>
    `;
}
// Llamada a la función para construir el pie de página al cargar la página
window.onload = function() {
    crearEncabezado();
    crearFooter();
};



