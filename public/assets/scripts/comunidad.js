// ============================================================================
// COMUNIDAD PAGE - JavaScript
// ============================================================================

// Estado global
let currentSlide = 0;
let posts = [];
let likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    initializeHeader();
    initializeScrollToTop();
    initializePostCreation();
    initializeWallFilters();
    initializeLeaderboardTabs();
    initializeTestimonialsSlider();
    initializeChartAnimation();
    loadUserData();
});

// ============================================================================
// HEADER & NAVIGATION - US06
// ============================================================================

function initializeHeader() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Cerrar menú al hacer click en un enlace
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            const targetElement = document.getElementById(href.substring(1));
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================================================
// SCROLL TO TOP - US08
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
// POST CREATION - US37
// ============================================================================

function initializePostCreation() {
    const textarea = document.getElementById('postContent');
    const charCount = document.getElementById('charCount');
    const publishBtn = document.getElementById('publishBtn');

    if (textarea && charCount && publishBtn) {
        textarea.addEventListener('input', () => {
            const length = textarea.value.length;
            charCount.textContent = length;
            publishBtn.disabled = length === 0;

            if (length > 450) {
                charCount.style.color = '#ff3b30';
            } else {
                charCount.style.color = '';
            }
        });
    }
}

function addAchievementTag(type) {
    const textarea = document.getElementById('postContent');
    if (!textarea) return;

    const tags = {
        guia: '📚 ¡Acabo de completar una guía! ',
        reto: '🏆 ¡Reto completado! ',
        meta: '🎯 ¡Meta alcanzada! '
    };

    textarea.value = tags[type] + textarea.value;
    textarea.focus();
    textarea.dispatchEvent(new Event('input'));
    showNotification('Etiqueta agregada');
}

function addPhoto() {
    showNotification('Función de fotos próximamente disponible');
}

function publishPost() {
    const textarea = document.getElementById('postContent');
    if (!textarea || !textarea.value.trim()) return;

    const content = textarea.value.trim();
    const newPost = createPostHTML({
        id: Date.now(),
        author: 'Tú',
        avatar: 'https://i.pravatar.cc/100?img=68',
        time: 'Justo ahora',
        content: content,
        type: 'logros',
        likes: 0,
        comments: 0
    });

    const container = document.getElementById('postsContainer');
    if (container) {
        container.insertAdjacentHTML('afterbegin', newPost);
    }

    textarea.value = '';
    document.getElementById('charCount').textContent = '0';
    document.getElementById('publishBtn').disabled = true;

    showNotification('¡Publicación compartida con la comunidad! 🎉', 'success');
}

function createPostHTML(post) {
    return `
        <article class="post-card" data-type="${post.type}" data-id="${post.id}">
            <div class="post-header">
                <div class="post-author">
                    <img src="${post.avatar}" alt="${post.author}" class="author-avatar">
                    <div class="author-info">
                        <strong>${post.author}</strong>
                        <span class="post-time">${post.time}</span>
                    </div>
                </div>
                <span class="post-badge achievement">
                    <i class="ri-trophy-fill"></i> Logro
                </span>
            </div>
            <div class="post-content">
                <p>${post.content}</p>
            </div>
            <div class="post-stats">
                <span class="stat"><i class="ri-heart-fill"></i> <span class="like-count">${post.likes}</span></span>
                <span class="stat"><i class="ri-chat-3-line"></i> <span class="comment-count">${post.comments}</span> comentarios</span>
            </div>
            <div class="post-actions-bar">
                <button class="action-btn like-btn" onclick="toggleLike(${post.id})">
                    <i class="ri-heart-line"></i> <span>Me gusta</span>
                </button>
                <button class="action-btn comment-btn" onclick="toggleComments(${post.id})">
                    <i class="ri-chat-3-line"></i> <span>Comentar</span>
                </button>
                <button class="action-btn share-btn" onclick="sharePost(${post.id})">
                    <i class="ri-share-line"></i> <span>Compartir</span>
                </button>
            </div>
            <div class="comments-section" id="comments-${post.id}" style="display: none;">
                <div class="comments-list"></div>
                <div class="add-comment">
                    <img src="https://i.pravatar.cc/100?img=68" alt="Tu avatar" class="comment-avatar">
                    <div class="comment-input-wrapper">
                        <input type="text" placeholder="Escribe un comentario..." maxlength="500" class="comment-input" data-post-id="${post.id}">
                        <button class="send-comment-btn" onclick="sendComment(${post.id})">
                            <i class="ri-send-plane-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    `;
}

// ============================================================================
// LIKES - US39
// ============================================================================

function toggleLike(postId) {
    const postCard = document.querySelector(`.post-card[data-id="${postId}"]`);
    if (!postCard) return;

    const likeBtn = postCard.querySelector('.like-btn');
    const likeCount = postCard.querySelector('.like-count');
    const icon = likeBtn.querySelector('i');

    if (likeBtn.classList.contains('liked')) {
        likeBtn.classList.remove('liked');
        icon.className = 'ri-heart-line';
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
        likedPosts = likedPosts.filter(id => id !== postId);
    } else {
        likeBtn.classList.add('liked');
        icon.className = 'ri-heart-fill';
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
        likedPosts.push(postId);
    }

    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
}

function likeComment(postId, commentId) {
    showNotification('¡Te gustó el comentario!');
}

// ============================================================================
// COMMENTS - US38
// ============================================================================

function toggleComments(postId) {
    const commentsSection = document.getElementById(`comments-${postId}`);
    if (!commentsSection) return;

    const isVisible = commentsSection.style.display !== 'none';
    commentsSection.style.display = isVisible ? 'none' : 'block';

    if (!isVisible) {
        const input = commentsSection.querySelector('.comment-input');
        if (input) input.focus();
    }
}

function sendComment(postId) {
    const commentsSection = document.getElementById(`comments-${postId}`);
    if (!commentsSection) return;

    const input = commentsSection.querySelector('.comment-input');
    if (!input || !input.value.trim()) {
        showNotification('Escribe un comentario', 'error');
        return;
    }

    const commentText = input.value.trim();
    if (commentText.length > 500) {
        showNotification('El comentario es muy largo (máx. 500 caracteres)', 'error');
        return;
    }

    const commentHTML = `
        <div class="comment">
            <img src="https://i.pravatar.cc/100?img=68" alt="Tú" class="comment-avatar">
            <div class="comment-body">
                <div class="comment-header">
                    <strong>Tú</strong>
                    <span class="comment-time">Justo ahora</span>
                </div>
                <p>${commentText}</p>
                <div class="comment-actions">
                    <button class="comment-like">
                        <i class="ri-heart-line"></i> <span>0</span>
                    </button>
                    <button class="comment-reply">Responder</button>
                </div>
            </div>
        </div>
    `;

    const commentsList = commentsSection.querySelector('.comments-list');
    if (commentsList) {
        commentsList.insertAdjacentHTML('beforeend', commentHTML);
    }

    // Actualizar contador
    const postCard = document.querySelector(`.post-card[data-id="${postId}"]`);
    if (postCard) {
        const commentCount = postCard.querySelector('.comment-count');
        if (commentCount) {
            commentCount.textContent = parseInt(commentCount.textContent) + 1;
        }
    }

    input.value = '';
    showNotification('Comentario publicado', 'success');
}

// ============================================================================
// WALL FILTERS - US20
// ============================================================================

function initializeWallFilters() {
    const filterBtns = document.querySelectorAll('.wall-filters .filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            filterPosts(filter);
        });
    });
}

function filterPosts(filter) {
    const posts = document.querySelectorAll('.post-card');

    posts.forEach(post => {
        if (filter === 'all') {
            post.style.display = '';
        } else {
            post.style.display = post.dataset.type === filter ? '' : 'none';
        }
    });
}

// ============================================================================
// SHARE FUNCTIONALITY
// ============================================================================

function sharePost(postId) {
    const modal = document.getElementById('shareModal');
    const linkInput = document.getElementById('shareLinkInput');

    if (modal && linkInput) {
        linkInput.value = `${window.location.origin}/comunidad.html?post=${postId}`;
        modal.classList.add('active');
    }
}

function shareAchievement() {
    const modal = document.getElementById('shareModal');
    const linkInput = document.getElementById('shareLinkInput');

    if (modal && linkInput) {
        linkInput.value = `${window.location.origin}/comunidad.html#mi-consumo`;
        modal.classList.add('active');
    }
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
    const message = '¡Mira mi progreso ahorrando agua con BlueGua! 💧';

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
            shareUrl = `mailto:?subject=${encodeURIComponent('Mi progreso en BlueGua')}&body=${encodeURIComponent(message + '\n' + url)}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }

    closeShareModal();
}

function copyShareLink() {
    const input = document.getElementById('shareLinkInput');
    if (input) {
        input.select();
        document.execCommand('copy');
        showNotification('¡Enlace copiado!', 'success');
    }
}

// ============================================================================
// CHALLENGES
// ============================================================================

function joinChallenge(challengeId) {
    showNotification('¡Te has unido al reto! 🔥', 'success');

    const btn = event.target.closest('button');
    if (btn) {
        btn.innerHTML = '<i class="ri-check-line"></i> Unido';
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary');
        btn.disabled = true;
    }
}

function notifyChallenge(challengeId) {
    showNotification('Te notificaremos cuando comience el reto 🔔', 'success');
}

// ============================================================================
// TESTIMONIALS SLIDER - US10
// ============================================================================

function initializeTestimonialsSlider() {
    const track = document.querySelector('.testimonials-track');
    const dots = document.querySelectorAll('.slider-dots .dot');

    if (!track || !dots.length) return;

    // Auto slide every 5 seconds
    setInterval(() => {
        slideTestimonials(1);
    }, 5000);

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
}

function slideTestimonials(direction) {
    const track = document.querySelector('.testimonials-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.slider-dots .dot');

    if (!track || !slides.length) return;

    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(index) {
    const track = document.querySelector('.testimonials-track');
    const dots = document.querySelectorAll('.slider-dots .dot');

    if (!track) return;

    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// ============================================================================
// LEADERBOARD TABS
// ============================================================================

function initializeLeaderboardTabs() {
    const tabs = document.querySelectorAll('.leaderboard-tabs .tab-btn');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Aquí podrías cargar diferentes datos según el tab
            showNotification(`Mostrando ranking: ${tab.textContent}`);
        });
    });
}

// ============================================================================
// CHART ANIMATION - US41
// ============================================================================

function initializeChartAnimation() {
    const bars = document.querySelectorAll('.chart-bar');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'barGrow 0.5s ease forwards';
            }
        });
    }, { threshold: 0.5 });

    bars.forEach(bar => {
        observer.observe(bar);
    });

    // Period filter
    const periodFilter = document.getElementById('periodFilter');
    if (periodFilter) {
        periodFilter.addEventListener('change', () => {
            updateConsumptionData(periodFilter.value);
        });
    }
}

function updateConsumptionData(period) {
    // Simular actualización de datos según el período
    const data = {
        week: { saved: 58, avg: 118, streak: 5 },
        month: { saved: 234, avg: 125, streak: 12 },
        year: { saved: 2847, avg: 130, streak: 45 }
    };

    const current = data[period];
    
    document.getElementById('waterSaved').textContent = current.saved;
    document.getElementById('avgConsumption').textContent = current.avg;
    document.getElementById('currentStreak').textContent = current.streak;

    showNotification(`Datos actualizados: ${period === 'week' ? 'Esta semana' : period === 'month' ? 'Este mes' : 'Este año'}`);
}

function loadUserData() {
    // Cargar likes guardados
    likedPosts.forEach(postId => {
        const postCard = document.querySelector(`.post-card[data-id="${postId}"]`);
        if (postCard) {
            const likeBtn = postCard.querySelector('.like-btn');
            const icon = likeBtn?.querySelector('i');
            if (likeBtn && icon) {
                likeBtn.classList.add('liked');
                icon.className = 'ri-heart-fill';
            }
        }
    });
}

// ============================================================================
// LOAD MORE POSTS
// ============================================================================

function loadMorePosts() {
    showNotification('Cargando más publicaciones...');

    // Simular carga de más posts
    setTimeout(() => {
        const newPost = createPostHTML({
            id: Date.now(),
            author: 'Usuario Nuevo',
            avatar: `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70)}`,
            time: 'Hace 3 días',
            content: '💧 Cada gota cuenta. Esta semana logré reducir mi consumo en un 10% siguiendo los consejos de la guía de ahorro en el baño. ¡Pequeños cambios, grandes resultados!',
            type: 'tips',
            likes: Math.floor(Math.random() * 50),
            comments: Math.floor(Math.random() * 15)
        });

        const container = document.getElementById('postsContainer');
        if (container) {
            container.insertAdjacentHTML('beforeend', newPost);
        }

        showNotification('Nuevas publicaciones cargadas', 'success');
    }, 1000);
}

// ============================================================================
// NOTIFICATIONS
// ============================================================================

function showNotification(message, type = '') {
    const toast = document.getElementById('notificationToast');
    const messageEl = document.getElementById('notificationMessage');
    const icon = toast?.querySelector('i');

    if (!toast || !messageEl) return;

    messageEl.textContent = message;

    // Reset classes
    toast.className = 'notification-toast';

    if (type === 'success') {
        toast.classList.add('success');
        if (icon) icon.className = 'ri-check-line';
    } else if (type === 'error') {
        toast.classList.add('error');
        if (icon) icon.className = 'ri-error-warning-line';
    } else {
        if (icon) icon.className = 'ri-information-line';
    }

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================================================
// MODAL HANDLERS
// ============================================================================

// Cerrar modales con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeShareModal();
    }
});

// Cerrar modal al hacer click fuera
document.addEventListener('click', (e) => {
    const shareModal = document.getElementById('shareModal');
    if (e.target === shareModal) {
        closeShareModal();
    }
});

// Add CSS animation for bars
const style = document.createElement('style');
style.textContent = `
    @keyframes barGrow {
        from {
            height: 0;
            opacity: 0;
        }
        to {
            height: var(--bar-height);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
