/**
 * Navegación entre secciones
 * @param {string} pageId - ID de la sección a mostrar
 * @param {Event} event - Evento del clic (opcional)
 */
function showPage(pageId, event) {
  if (event) event.preventDefault();

  // Ocultar todas las secciones
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Quitar clase activa de los enlaces
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Mostrar la sección y activar el link
  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.classList.add('active');
  }

  if (event) {
    event.currentTarget.classList.add('active');
  }
}

/**
 * Modo Oscuro
 */
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Guardar preferencia en el navegador
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Cargar tema guardado al iniciar
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
