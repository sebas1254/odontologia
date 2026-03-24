/* ==========================================================================
   MOOI Odontología Estética - Script de Navegación Lógica
   ========================================================================== */

// Esperar a que todo el DOM (estructura HTML) esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. SELECCIÓN DE ELEMENTOS CLAVE
    // Creamos un mapa de los ítems del menú de navegación por su ID
    const navItems = {
        'inicio': document.getElementById('nav-inicio'),
        'servicios': document.getElementById('nav-servicios'),
        'contacto': document.getElementById('nav-contacto')
    };

    // Seleccionamos el contenedor principal de contenido para controlar el scroll
    const contentContainer = document.querySelector('.content-container');

    // 2. ASIGNACIÓN DE EVENTOS DE CLIC
    // Recorremos el mapa de ítems del menú y asignamos la función al hacer clic
    Object.keys(navItems).forEach(key => {
        const menuItem = navItems[key];
        
        // Verificamos que el elemento exista en el HTML para evitar errores
        if (menuItem) {
            menuItem.addEventListener('click', function() {
                // Llamamos a la función principal para cambiar de sección
                // Pasamos la clave ('inicio', 'servicios', 'contacto') y el elemento clicado
                showSection(key, menuItem, contentContainer);
            });
        }
    });
});

/**
 * Función principal para cambiar la sección activa visible.
 * @param {string} sectionId - El ID de la sección a mostrar (sin el #).
 * @param {HTMLElement} menuItem - El elemento del menú que fue clicado.
 * @param {HTMLElement} container - El contenedor de contenido para hacer scroll.
 */
function showSection(sectionId, menuItem, container) {
    
    // 1. OCULTAR TODAS LAS SECCIONES DE CONTENIDO
    // Buscamos todas las secciones con la clase '.content-section'
    const allSections = document.querySelectorAll('.content-section');
    allSections.forEach(section => {
        // Quitamos la clase 'active' para ocultarlas (manejado por CSS)
        section.classList.remove('active');
    });

    // 2. DESACTIVAR TODOS LOS ÍTEMS DEL MENÚ
    // Buscamos todos los ítems del menú con la clase '.nav-item'
    const allNavItems = document.querySelectorAll('.nav-item');
    allNavItems.forEach(item => {
        // Quitamos la clase 'active' para quitar el estilo oscuro/dorado
        item.classList.remove('active');
    });
    
    // 3. MOSTRAR LA SECCIÓN SELECCIONADA
    // Buscamos la sección específica por su ID (ej: 'inicio')
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        // Añadimos la clase 'active' para hacerla visible (manejado por CSS)
        targetSection.classList.add('active');
    }

    // 4. ACTIVAR EL ÍTEM DE MENÚ CLICADO
    // Añadimos la clase 'active' al ítem que el usuario pulsó
    if (menuItem) {
        menuItem.classList.add('active');
    }
    
    // 5. SCROLL AUTOMÁTICO AL INICIO (Importante para móviles)
    // Cuando el contenido es largo y el usuario cambia de sección,
    // aseguramos que la nueva sección comience desde arriba.
    if (container) {
        // scroll-behavior: smooth en CSS hará que este movimiento sea suave
        container.scrollTop = 0;
    }
}