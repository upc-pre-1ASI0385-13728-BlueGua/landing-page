// ============================================================================
// GUÍAS EDUCATIVAS - VERSIÓN DINÁMICA
// Las guías se renderizan dinámicamente desde un array de datos
// ============================================================================

// Estado global
let favorites = JSON.parse(localStorage.getItem('guideFavorites')) || [];

// ============================================================================
// BASE DE DATOS DE GUÍAS
// ============================================================================
const guidesData = [
    {
        id: 1,
        title: "Ahorro de agua en el hogar",
        description: "Descubre técnicas simples para reducir el consumo diario de agua en tu hogar.",
        level: "principiante",
        theme: "hogar",
        icon: "ri-home-4-line",
        duration: "10 min",
        lessons: 5,
        content: {
            intro: "El hogar promedio desperdicia hasta 30 litros de agua al día. Con pequeños cambios puedes hacer una gran diferencia.",
            tips: [
                "Cierra el grifo mientras te cepillas los dientes",
                "Repara las fugas inmediatamente",
                "Usa electrodomésticos con carga completa",
                "Instala aireadores en los grifos",
                "Reutiliza el agua de la lavadora para el jardín"
            ],
            savings: "Hasta 50 litros diarios"
        }
    },
    {
        id: 2,
        title: "Riego eficiente del jardín",
        description: "Aprende a mantener tu jardín verde mientras ahorras agua significativamente.",
        level: "intermedio",
        theme: "jardin",
        icon: "ri-plant-line",
        duration: "20 min",
        lessons: 8,
        content: {
            intro: "El riego representa hasta el 50% del consumo de agua en hogares con jardín. Optimízalo con estas técnicas.",
            tips: [
                "Riega temprano en la mañana o al atardecer",
                "Usa sistemas de riego por goteo",
                "Aplica mulch para retener humedad",
                "Elige plantas nativas resistentes a la sequía",
                "Agrupa plantas según sus necesidades de agua",
                "Instala sensores de humedad",
                "Recoge agua de lluvia",
                "Evita regar en días ventosos"
            ],
            savings: "Hasta 100 litros diarios"
        }
    },
    {
        id: 3,
        title: "Cocina consciente con agua",
        description: "Consejos prácticos para reducir el desperdicio de agua en la cocina.",
        level: "principiante",
        theme: "cocina",
        icon: "ri-restaurant-line",
        duration: "12 min",
        lessons: 6,
        content: {
            intro: "La cocina es una de las áreas donde más agua se desperdicia. Aprende a cocinar de forma sostenible.",
            tips: [
                "Lava frutas y verduras en un recipiente, no bajo el grifo",
                "Usa el lavavajillas solo cuando esté lleno",
                "Reutiliza el agua de cocción para caldos o riego",
                "Descongela alimentos en el refrigerador, no con agua",
                "Instala un grifo con sensor o pedal",
                "Usa ollas del tamaño adecuado"
            ],
            savings: "Hasta 30 litros diarios"
        }
    },
    {
        id: 4,
        title: "Baño y ducha eficientes",
        description: "Reduce el consumo de agua en el baño sin sacrificar tu comodidad.",
        level: "principiante",
        theme: "baño",
        icon: "ri-drop-line",
        duration: "8 min",
        lessons: 4,
        content: {
            intro: "El baño consume el 65% del agua del hogar. Pequeños cambios generan grandes ahorros.",
            tips: [
                "Reduce el tiempo de ducha a 5 minutos",
                "Instala cabezales de ducha de bajo flujo",
                "Usa inodoros de doble descarga",
                "Cierra el grifo mientras te enjabonas"
            ],
            savings: "Hasta 80 litros diarios"
        }
    },
    {
        id: 5,
        title: "Gestión de agua en negocios",
        description: "Estrategias avanzadas para optimizar el consumo de agua en empresas.",
        level: "avanzado",
        theme: "negocios",
        icon: "ri-building-line",
        duration: "30 min",
        lessons: 12,
        content: {
            intro: "Las empresas pueden reducir costos significativamente con una gestión eficiente del agua.",
            tips: [
                "Realiza auditorías de agua regulares",
                "Instala medidores inteligentes por área",
                "Implementa sistemas de reciclaje de agua gris",
                "Capacita al personal en buenas prácticas",
                "Establece metas de reducción medibles",
                "Usa tecnología de monitoreo en tiempo real",
                "Optimiza sistemas de refrigeración",
                "Instala sistemas de captación de lluvia",
                "Revisa y mantén tuberías regularmente",
                "Considera certificaciones ambientales",
                "Involucra a proveedores en la sostenibilidad",
                "Documenta y celebra los logros"
            ],
            savings: "Hasta 40% de reducción anual"
        }
    },
    {
        id: 6,
        title: "Reparación de fugas comunes",
        description: "Aprende a identificar y reparar las fugas más frecuentes en el hogar.",
        level: "intermedio",
        theme: "hogar",
        icon: "ri-tools-line",
        duration: "25 min",
        lessons: 10,
        content: {
            intro: "Una fuga pequeña puede desperdiciar más de 30 litros al día. Aprende a detectarlas y repararlas.",
            tips: [
                "Revisa el medidor de agua para detectar fugas ocultas",
                "Inspecciona grifos y llaves regularmente",
                "Cambia empaques desgastados",
                "Verifica conexiones de electrodomésticos",
                "Revisa el tanque del inodoro con colorante",
                "Inspecciona mangueras de lavadora",
                "Busca manchas de humedad en paredes",
                "Revisa el calentador de agua",
                "Mantén herramientas básicas a mano",
                "Conoce la ubicación de la llave principal"
            ],
            savings: "Hasta 100 litros diarios"
        }
    },
    {
        id: 7,
        title: "Sistemas de captación de lluvia",
        description: "Instala tu propio sistema para aprovechar el agua de lluvia en casa.",
        level: "avanzado",
        theme: "jardin",
        icon: "ri-cloud-line",
        duration: "35 min",
        lessons: 14,
        content: {
            intro: "Captar agua de lluvia puede cubrir hasta el 50% de las necesidades de riego de tu jardín.",
            tips: [
                "Calcula el potencial de captación de tu techo",
                "Elige el tamaño adecuado del tanque",
                "Instala canaletas y bajantes apropiados",
                "Usa filtros para hojas y sedimentos",
                "Considera un sistema de primera descarga",
                "Protege el tanque de la luz solar",
                "Instala una bomba si es necesario",
                "Mantén el sistema limpio regularmente"
            ],
            savings: "Hasta 200 litros por lluvia"
        }
    },
    {
        id: 8,
        title: "Lavandería sostenible",
        description: "Optimiza el uso de agua en el lavado de ropa con estas técnicas.",
        level: "principiante",
        theme: "hogar",
        icon: "ri-t-shirt-line",
        duration: "10 min",
        lessons: 5,
        content: {
            intro: "La lavadora puede consumir hasta 200 litros por ciclo. Aprende a optimizar cada lavado.",
            tips: [
                "Usa siempre carga completa",
                "Elige programas de lavado corto cuando sea posible",
                "Usa agua fría para la mayoría de la ropa",
                "Reutiliza el agua del último enjuague para trapear",
                "Considera una lavadora de alta eficiencia"
            ],
            savings: "Hasta 60 litros por lavado"
        }
    },
    {
        id: 9,
        title: "Piscinas ecológicas",
        description: "Mantén tu piscina limpia minimizando el desperdicio de agua.",
        level: "intermedio",
        theme: "jardin",
        icon: "ri-drop-fill",
        duration: "18 min",
        lessons: 7,
        content: {
            intro: "Una piscina puede perder miles de litros al año por evaporación y fugas.",
            tips: [
                "Usa una cubierta cuando no esté en uso",
                "Mantén el nivel de agua óptimo",
                "Revisa regularmente fugas en el sistema",
                "Limpia los filtros frecuentemente",
                "Evita salpicar agua fuera de la piscina",
                "Usa productos químicos balanceados",
                "Considera sistemas de recirculación eficientes"
            ],
            savings: "Hasta 50% menos evaporación"
        }
    },
    {
        id: 10,
        title: "Huertos urbanos eficientes",
        description: "Cultiva tus propios alimentos usando el mínimo de agua posible.",
        level: "intermedio",
        theme: "jardin",
        icon: "ri-seedling-line",
        duration: "22 min",
        lessons: 9,
        content: {
            intro: "Los huertos urbanos pueden ser muy eficientes en agua con las técnicas adecuadas.",
            tips: [
                "Usa riego por goteo casero con botellas",
                "Aplica acolchado orgánico",
                "Planta en épocas adecuadas",
                "Agrupa plantas por necesidades de agua",
                "Usa compost para retener humedad",
                "Riega en las raíces, no las hojas",
                "Recoge agua de lluvia para el huerto",
                "Elige variedades resistentes a la sequía",
                "Planifica la rotación de cultivos"
            ],
            savings: "Hasta 70% menos agua que riego tradicional"
        }
    }
];

// ============================================================================
// INICIALIZACIÓN
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    renderGuides();
    initializeFilters();
    initializeSearch();
    initializeFavorites();
    initializeScrollToTop();
    initializeModals();
});

// ============================================================================
// FILTROS Y BÚSQUEDA
// ============================================================================

// Renderizar guías dinámicamente
function renderGuides() {
    const container = document.getElementById('guidesGrid');
    if (!container) return;

    container.innerHTML = guidesData.map(guide => createGuideCard(guide)).join('');
    loadFavorites();
}

// Crear HTML de una tarjeta de guía
function createGuideCard(guide) {
    const isFavorite = favorites.includes(guide.id);
    const levelClass = `level-${guide.level}`;
    const levelText = guide.level.charAt(0).toUpperCase() + guide.level.slice(1);

    return `
        <div class="guide-card" data-level="${guide.level}" data-theme="${guide.theme}" data-id="${guide.id}">
            <div class="guide-header">
                <span class="guide-level ${levelClass}">${levelText}</span>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${guide.id})" aria-label="Guardar en favoritos">
                    <i class="ri-heart-${isFavorite ? 'fill' : 'line'}"></i>
                </button>
            </div>
            <div class="guide-icon">
                <i class="${guide.icon}"></i>
            </div>
            <h3>${guide.title}</h3>
            <p>${guide.description}</p>
            <div class="guide-meta">
                <span><i class="ri-time-line"></i> ${guide.duration}</span>
                <span><i class="ri-book-open-line"></i> ${guide.lessons} lecciones</span>
            </div>
            <div class="guide-actions">
                <button class="btn btn-secondary" onclick="openGuideModal(${guide.id})">Ver guía</button>
                <button class="btn btn-tertiary" onclick="shareGuide(${guide.id})" title="Compartir">
                    <i class="ri-share-line"></i> Compartir
                </button>
            </div>
        </div>
    `;
}

function initializeFilters() {
    // Filtros de nivel
    const levelFilters = document.querySelectorAll('#levelFilters .filter-btn');
    levelFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            levelFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterGuides();
        });
    });

    // Filtros de tema
    const themeFilters = document.querySelectorAll('#themeFilters .filter-btn');
    themeFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            themeFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterGuides();
        });
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('searchGuides');
    if (searchInput) {
        searchInput.addEventListener('input', filterGuides);
    }
}

function initializeFavorites() {
    const favoritesToggle = document.getElementById('favoritesToggle');
    if (favoritesToggle) {
        favoritesToggle.addEventListener('change', filterGuides);
    }
    loadFavorites();
}

function filterGuides() {
    const searchTerm = document.getElementById('searchGuides')?.value.toLowerCase() || '';
    const activeLevel = document.querySelector('#levelFilters .filter-btn.active')?.dataset.level || 'all';
    const activeTheme = document.querySelector('#themeFilters .filter-btn.active')?.dataset.theme || 'all';
    const showOnlyFavorites = document.getElementById('favoritesToggle')?.checked || false;

    const cards = document.querySelectorAll('.guide-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const level = card.dataset.level;
        const theme = card.dataset.theme;
        const guideId = parseInt(card.dataset.id);
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const description = card.querySelector('p')?.textContent.toLowerCase() || '';

        const matchesLevel = activeLevel === 'all' || level === activeLevel;
        const matchesTheme = activeTheme === 'all' || theme === activeTheme;
        const matchesSearch = searchTerm === '' || title.includes(searchTerm) || description.includes(searchTerm);
        const matchesFavorites = !showOnlyFavorites || favorites.includes(guideId);

        if (matchesLevel && matchesTheme && matchesSearch && matchesFavorites) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Mostrar mensaje de "no resultados"
    const noResults = document.getElementById('noResults');
    if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
}

function filterByLevel(level) {
    const btn = document.querySelector(`[data-level="${level}"]`);
    if (btn) {
        document.querySelectorAll('#levelFilters .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterGuides();

        const guidesSection = document.getElementById('filtros');
        if (guidesSection) {
            guidesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// ============================================================================
// FAVORITOS
// ============================================================================

function toggleFavorite(guideId) {
    const btn = document.querySelector(`.guide-card[data-id="${guideId}"] .favorite-btn`);
    if (!btn) return;

    const index = favorites.indexOf(guideId);
    if (index > -1) {
        favorites.splice(index, 1);
        btn.classList.remove('active');
        btn.innerHTML = '<i class="ri-heart-line"></i>';
        showNotification('Removida de favoritas');
    } else {
        favorites.push(guideId);
        btn.classList.add('active');
        btn.innerHTML = '<i class="ri-heart-fill"></i>';
        showNotification('Agregada a favoritas');
    }

    localStorage.setItem('guideFavorites', JSON.stringify(favorites));
}

function loadFavorites() {
    favorites.forEach(id => {
        const btn = document.querySelector(`.guide-card[data-id="${id}"] .favorite-btn`);
        if (btn) btn.classList.add('active');
    });
}

// ============================================================================
// MODALES (Sin contenido de base de datos)
// ============================================================================

function initializeModals() {
    // Cerrar modales con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeGuideModal();
            closeShareModal();
        }
    });

    // Cerrar modales al hacer click fuera
    const guideModal = document.getElementById('guideModal');
    if (guideModal) {
        guideModal.addEventListener('click', (e) => {
            if (e.target === guideModal) closeGuideModal();
        });
    }

    const shareModal = document.getElementById('shareModal');
    if (shareModal) {
        shareModal.addEventListener('click', (e) => {
            if (e.target === shareModal) closeShareModal();
        });
    }
}

function openGuideModal(guideId, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const guide = guidesData.find(g => g.id === guideId);
    if (!guide) {
        showNotification('Guía no encontrada');
        return;
    }

    // Crear o actualizar el modal
    let modal = document.getElementById('guideModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'guideModal';
        modal.className = 'guide-modal';
        document.body.appendChild(modal);
    }

    const levelClass = `level-${guide.level}`;
    const levelText = guide.level.charAt(0).toUpperCase() + guide.level.slice(1);
    const isFavorite = favorites.includes(guide.id);

    modal.innerHTML = `
        <div class="guide-modal-content">
            <div class="guide-modal-header">
                <div class="guide-modal-title">
                    <div class="guide-icon-large">
                        <i class="${guide.icon}"></i>
                    </div>
                    <div>
                        <span class="guide-level ${levelClass}">${levelText}</span>
                        <h2>${guide.title}</h2>
                        <div class="guide-modal-meta">
                            <span><i class="ri-time-line"></i> ${guide.duration}</span>
                            <span><i class="ri-book-open-line"></i> ${guide.lessons} lecciones</span>
                            <span><i class="ri-folder-line"></i> ${guide.theme.charAt(0).toUpperCase() + guide.theme.slice(1)}</span>
                        </div>
                    </div>
                </div>
                <button class="guide-modal-close" onclick="closeGuideModal()" aria-label="Cerrar">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            <div class="guide-modal-body">
                <div class="guide-intro">
                    <h3><i class="ri-lightbulb-line"></i> Introducción</h3>
                    <p>${guide.content.intro}</p>
                </div>
                
                <div class="guide-tips">
                    <h3><i class="ri-checkbox-circle-line"></i> Consejos Prácticos</h3>
                    <ul class="tips-list">
                        ${guide.content.tips.map(tip => `<li><i class="ri-check-line"></i> ${tip}</li>`).join('')}
                    </ul>
                </div>

                <div class="guide-savings">
                    <div class="savings-card">
                        <i class="ri-drop-line"></i>
                        <div>
                            <strong>Ahorro potencial</strong>
                            <span>${guide.content.savings}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="guide-modal-footer">
                <button class="btn btn-secondary" onclick="toggleFavoriteFromModal(${guide.id})">
                    <i class="ri-heart-${isFavorite ? 'fill' : 'line'}"></i> 
                    ${isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                </button>
                <button class="btn btn-tertiary" onclick="shareGuide(${guide.id})">
                    <i class="ri-share-line"></i> Compartir
                </button>
                <button class="btn btn-primary" onclick="closeGuideModal()">
                    <i class="ri-check-line"></i> Entendido
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function toggleFavoriteFromModal(guideId) {
    toggleFavorite(guideId);
    // Actualizar el modal si está abierto
    const modal = document.getElementById('guideModal');
    if (modal && modal.classList.contains('active')) {
        openGuideModal(guideId);
    }
}

function closeGuideModal() {
    const modal = document.getElementById('guideModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function shareGuide(guideId, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const modal = document.getElementById('shareModal');
    const linkInput = document.getElementById('shareLinkInput');

    if (!modal || !linkInput) return;

    const baseUrl = window.location.origin + window.location.pathname;
    linkInput.value = `${baseUrl}?guide=${guideId}`;

    modal.classList.add('active');
}

function closeShareModal() {
    const modal = document.getElementById('shareModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function shareOn(platform) {
    const linkInput = document.getElementById('shareLinkInput');
    const url = linkInput?.value || window.location.href;
    const message = 'Descubre esta guía para ahorrar agua - BlueGua 💧';

    let shareUrl = '';

    switch (platform) {
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(message + '\n' + url)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`;
            break;
        case 'email':
            shareUrl = `mailto:?subject=${encodeURIComponent('Guía de ahorro de agua')}&body=${encodeURIComponent(message + '\n' + url)}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

function copyShareLink() {
    const input = document.getElementById('shareLinkInput');
    if (input) {
        input.select();
        document.execCommand('copy');
        showNotification('¡Enlace copiado al portapapeles!');
    }
}

// ============================================================================
// SCROLL TO TOP
// ============================================================================

function initializeScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================================================
// NOTIFICACIONES
// ============================================================================

function showNotification(message) {
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: #007bff;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.3s ease;
        `;
        document.body.appendChild(notification);
    }

    notification.textContent = message;
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
    }, 3000);
}
