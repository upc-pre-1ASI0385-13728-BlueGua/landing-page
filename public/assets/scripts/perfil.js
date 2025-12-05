/* ========================================
   PERFIL PAGE JAVASCRIPT
   BlueGua - Página de Perfil de Usuario
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // INICIALIZACIÓN
    // ========================================
    
    // Verificar sesión primero - redirigir a login si no hay sesión
    if (!checkUserSession()) {
        return; // No inicializar nada si no hay sesión
    }
    
    initNavigation();
    initSidebarNav();
    initModals();
    initSyncFeatures();
    initSettings();
    initScrollToTop();
    initMobileMenu();

    // ========================================
    // US06: NAVEGACIÓN ENTRE SECCIONES
    // ========================================

    function initNavigation() {
        // Navegación suave a secciones
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href.length > 1) {
                    e.preventDefault();
                    const section = document.querySelector(href);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }

    // ========================================
    // NAVEGACIÓN DEL SIDEBAR
    // ========================================

    function initSidebarNav() {
        const navItems = document.querySelectorAll('.perfil-nav .nav-item');
        const sections = document.querySelectorAll('.perfil-section');

        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const targetSection = this.getAttribute('data-section');

                // Actualizar navegación activa
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');

                // Mostrar sección correspondiente
                sections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === targetSection) {
                        section.classList.add('active');
                    }
                });

                // Scroll en móvil
                if (window.innerWidth <= 992) {
                    document.querySelector('.perfil-content').scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Verificar hash en URL
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const targetNav = document.querySelector(`[data-section="${hash}"]`);
            if (targetNav) {
                targetNav.click();
            }
        }
    }

    // ========================================
    // MODALES
    // ========================================

    function initModals() {
        // Modal Payment Confirm
        const paymentConfirmModal = document.getElementById('paymentConfirmModal');
        const closePaymentConfirm = document.getElementById('closePaymentConfirm');

        // Modal Cancel Subscription
        const cancelSubscriptionModal = document.getElementById('cancelSubscriptionModal');
        const btnCancelSubscription = document.getElementById('btnCancelSubscription');
        const cancelCancelSub = document.getElementById('cancelCancelSub');
        const confirmCancelSub = document.getElementById('confirmCancelSub');

        // Modal Logout
        const logoutModal = document.getElementById('logoutModal');
        const btnLogout = document.getElementById('btnLogout');
        const cancelLogout = document.getElementById('cancelLogout');
        const confirmLogout = document.getElementById('confirmLogout');

        // Funciones para abrir/cerrar modales
        function openModal(modal) {
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeModal(modal) {
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        function closeAllModals() {
            document.querySelectorAll('.modal').forEach(modal => {
                closeModal(modal);
            });
        }

        // Event listeners para Payment Confirm
        if (closePaymentConfirm) {
            closePaymentConfirm.addEventListener('click', () => closeModal(paymentConfirmModal));
        }

        // US16: Cancelar suscripción
        if (btnCancelSubscription) {
            btnCancelSubscription.addEventListener('click', () => {
                openModal(cancelSubscriptionModal);
            });
        }

        if (cancelCancelSub) {
            cancelCancelSub.addEventListener('click', () => closeModal(cancelSubscriptionModal));
        }

        if (confirmCancelSub) {
            confirmCancelSub.addEventListener('click', () => {
                closeModal(cancelSubscriptionModal);
                showToast('success', 'Suscripción cancelada', 'Tu suscripción ha sido cancelada exitosamente.');
            });
        }

        // US18: Cerrar sesión - Redirigir directamente sin modal
        if (btnLogout) {
            btnLogout.addEventListener('click', () => {
                localStorage.removeItem('bluegua_session');
                window.location.href = 'login.html';
            });
        }

        // Cerrar modal al hacer clic fuera
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal(modal);
                }
            });
        });

        // Cerrar con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeAllModals();
            }
        });

        // Exponer función para abrir modal de pago (para demos)
        window.showPaymentConfirm = () => openModal(paymentConfirmModal);
    }

    // ========================================
    // US11, US12, US13: FORMULARIOS DE AUTH
    // ========================================
    // ========================================
    // US47, US48, US49, US50: SINCRONIZACIÓN
    // ========================================

    function initSyncFeatures() {
        const btnSyncNow = document.getElementById('btnSyncNow');
        const syncIndicator = document.getElementById('syncIndicator');
        const mainSyncStatus = document.getElementById('mainSyncStatus');
        const syncHistoryFilter = document.getElementById('syncHistoryFilter');

        // US49: Sincronización manual
        if (btnSyncNow) {
            btnSyncNow.addEventListener('click', function() {
                // Cambiar estado a "sincronizando"
                updateSyncStatus('syncing');
                this.disabled = true;
                this.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Sincronizando...';

                // Simular sincronización
                setTimeout(() => {
                    updateSyncStatus('synced');
                    this.disabled = false;
                    this.innerHTML = '<i class="ri-refresh-line"></i> Sincronizar Ahora';
                    showToast('success', 'Datos actualizados', 'Tus datos se han sincronizado correctamente.');
                    
                    // Agregar al historial
                    addSyncHistoryItem('manual', 'success', '8 registros');
                }, 2000);
            });
        }

        // US50: Filtrar historial de sincronizaciones
        if (syncHistoryFilter) {
            syncHistoryFilter.addEventListener('change', function() {
                const filter = this.value;
                const items = document.querySelectorAll('.sync-history-item');

                items.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'flex';
                    } else if (item.classList.contains(filter)) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        }

        // US49: Detectar cambios de conexión
        window.addEventListener('online', function() {
            showToast('success', 'Conexión restaurada', 'Sincronizando datos automáticamente...');
            updateSyncStatus('syncing');
            
            setTimeout(() => {
                updateSyncStatus('synced');
                showToast('success', 'Datos actualizados', 'Sincronización automática completada.');
            }, 2000);
        });

        window.addEventListener('offline', function() {
            updateSyncStatus('offline');
            showToast('warning', 'Sin conexión', 'Modo offline activado. Tus datos se guardarán localmente.');
        });

        // Función para actualizar estado de sincronización
        function updateSyncStatus(status) {
            const statusConfig = {
                synced: {
                    icon: 'ri-check-line',
                    text: 'Sincronizado',
                    subtext: 'Actualizado hace 2 min',
                    class: 'synced'
                },
                pending: {
                    icon: 'ri-time-line',
                    text: 'Pendiente',
                    subtext: '3 registros por sincronizar',
                    class: 'pending'
                },
                offline: {
                    icon: 'ri-wifi-off-line',
                    text: 'Sin conexión',
                    subtext: 'Modo offline',
                    class: 'offline'
                },
                syncing: {
                    icon: 'ri-loader-4-line ri-spin',
                    text: 'Sincronizando',
                    subtext: 'Espera un momento...',
                    class: 'syncing'
                }
            };

            const config = statusConfig[status];

            // Actualizar indicador pequeño
            if (syncIndicator) {
                const statusDiv = syncIndicator.querySelector('.sync-status');
                statusDiv.className = 'sync-status ' + config.class;
                statusDiv.innerHTML = `
                    <i class="${config.icon}"></i>
                    <span>${config.text}</span>
                    <small>${config.subtext}</small>
                `;
            }

            // Actualizar estado principal
            if (mainSyncStatus) {
                mainSyncStatus.className = 'sync-main-status ' + config.class;
                const iconEl = mainSyncStatus.querySelector('.sync-icon i');
                const titleEl = mainSyncStatus.querySelector('.sync-info h3');
                const subtitleEl = mainSyncStatus.querySelector('.sync-info p');

                if (status === 'synced') {
                    iconEl.className = 'ri-checkbox-circle-fill';
                    titleEl.textContent = 'Datos Sincronizados';
                } else if (status === 'pending') {
                    iconEl.className = 'ri-time-fill';
                    titleEl.textContent = 'Sincronización Pendiente';
                } else if (status === 'offline') {
                    iconEl.className = 'ri-wifi-off-fill';
                    titleEl.textContent = 'Sin Conexión';
                } else if (status === 'syncing') {
                    iconEl.className = 'ri-loader-4-line ri-spin';
                    titleEl.textContent = 'Sincronizando...';
                }

                subtitleEl.innerHTML = `Última sincronización: <strong>${config.subtext}</strong>`;
            }
        }

        // Función para agregar item al historial
        function addSyncHistoryItem(type, status, records) {
            const historyList = document.querySelector('.sync-history-list');
            if (!historyList) return;

            const now = new Date();
            const dateStr = now.toLocaleDateString('es-PE', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });
            const timeStr = now.toLocaleTimeString('es-PE', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });

            const icons = {
                success: 'ri-checkbox-circle-fill',
                failed: 'ri-close-circle-fill',
                partial: 'ri-error-warning-fill'
            };

            const badges = {
                success: 'Éxito',
                failed: 'Fallo',
                partial: 'Parcial'
            };

            const typeText = type === 'manual' ? 'Sincronización manual' : 'Sincronización automática';

            const newItem = document.createElement('div');
            newItem.className = `sync-history-item ${status}`;
            newItem.innerHTML = `
                <div class="sync-history-icon">
                    <i class="${icons[status]}"></i>
                </div>
                <div class="sync-history-info">
                    <span class="sync-type">${typeText}</span>
                    <span class="sync-datetime">${dateStr}, ${timeStr}</span>
                </div>
                <div class="sync-history-result">
                    <span class="sync-records">${records}</span>
                    <span class="sync-status-badge ${status}">${badges[status]}</span>
                </div>
            `;

            historyList.insertBefore(newItem, historyList.firstChild);
        }
    }

    // ========================================
    // CONFIGURACIÓN
    // ========================================

    function initSettings() {
        const personalDataForm = document.getElementById('personalDataForm');
        const btnChangePassword = document.getElementById('btnChangePassword');
        const btnExportData = document.getElementById('btnExportData');
        const btnDeleteAccount = document.getElementById('btnDeleteAccount');
        const btnUpgrade = document.getElementById('btnUpgrade');

        // Guardar datos personales
        if (personalDataForm) {
            personalDataForm.addEventListener('submit', function(e) {
                e.preventDefault();
                showToast('success', 'Datos guardados', 'Tus datos personales han sido actualizados.');
            });
        }

        // Cambiar contraseña
        if (btnChangePassword) {
            btnChangePassword.addEventListener('click', function() {
                showToast('info', 'Función disponible próximamente', 'Esta funcionalidad estará disponible en la próxima actualización.');
            });
        }

        // Exportar datos
        if (btnExportData) {
            btnExportData.addEventListener('click', function() {
                showToast('success', 'Exportación iniciada', 'Recibirás un correo con tus datos en breve.');
            });
        }

        // Eliminar cuenta
        if (btnDeleteAccount) {
            btnDeleteAccount.addEventListener('click', function() {
                if (confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.')) {
                    showToast('info', 'Solicitud recibida', 'Recibirás un correo para confirmar la eliminación de tu cuenta.');
                }
            });
        }

        // Upgrade plan - US17: Confirmación de pago
        if (btnUpgrade) {
            btnUpgrade.addEventListener('click', function() {
                // Simular proceso de pago
                showToast('info', 'Procesando...', 'Conectando con pasarela de pago...');
                
                setTimeout(() => {
                    // Mostrar modal de confirmación de pago
                    window.showPaymentConfirm();
                }, 1500);
            });
        }

        // Chart filters
        document.querySelectorAll('.chart-filter').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.chart-filter').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Aquí iría la lógica para cambiar los datos del gráfico
                showToast('info', 'Filtro aplicado', `Mostrando datos por ${this.textContent.toLowerCase()}`);
            });
        });
    }

    // ========================================
    // US08: BOTÓN IR ARRIBA
    // ========================================

    function initScrollToTop() {
        const scrollToTopBtn = document.getElementById('scrollToTop');

        if (scrollToTopBtn) {
            // Mostrar/ocultar botón según scroll
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    scrollToTopBtn.classList.add('visible');
                } else {
                    scrollToTopBtn.classList.remove('visible');
                }
            });

            // Scroll suave al hacer clic
            scrollToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // ========================================
    // MENÚ MÓVIL
    // ========================================

    function initMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Cerrar menú al hacer clic en un enlace
            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }

    // ========================================
    // VERIFICAR SESIÓN DE USUARIO
    // ========================================

    function checkUserSession() {
        const session = localStorage.getItem('bluegua_session');
        
        if (session) {
            const userData = JSON.parse(session);
            if (userData.loggedIn) {
                // Usuario logueado - actualizar UI
                updateUIForLoggedUser(userData);
                return true;
            }
        }
        
        // No hay sesión - redirigir a login
        window.location.href = 'login.html';
        return false;
    }

    function updateUIForLoggedUser(userData) {
        // Actualizar nombre en sidebar si existe
        const userName = document.querySelector('.user-name');
        const userEmail = document.querySelector('.user-email');
        
        if (userName && userData.name) {
            userName.textContent = userData.name;
        }
        
        if (userEmail && userData.email) {
            userEmail.textContent = userData.email;
        }

        // Cambiar botones de auth
        const desktopAuthBtn = document.getElementById('desktopAuthBtn');
        const mobileAuthBtn = document.getElementById('mobileAuthBtn');

        if (desktopAuthBtn) {
            desktopAuthBtn.textContent = 'Mi Perfil';
            desktopAuthBtn.href = '#dashboard';
        }

        if (mobileAuthBtn) {
            mobileAuthBtn.textContent = 'Mi Perfil';
            mobileAuthBtn.href = '#dashboard';
        }
    }

    // ========================================
    // TOAST NOTIFICATIONS
    // ========================================

    function showToast(type, title, message) {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const icons = {
            success: 'ri-checkbox-circle-fill',
            error: 'ri-close-circle-fill',
            warning: 'ri-error-warning-fill',
            info: 'ri-information-fill'
        };

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <i class="toast-icon ${icons[type]}"></i>
            <div class="toast-content">
                <span class="toast-title">${title}</span>
                <span class="toast-message">${message}</span>
            </div>
            <button class="toast-close"><i class="ri-close-line"></i></button>
        `;

        container.appendChild(toast);

        // Cerrar toast
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.remove();
        });

        // Auto-cerrar después de 5 segundos
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 5000);
    }

    // Exponer función globalmente
    window.showToast = showToast;
});
