/* ========================================
   AUTH PAGES JAVASCRIPT
   BlueGua - Login, Registro, Recuperar
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // Inicializar funcionalidades
    initTogglePassword();
    initLoginForm();
    initRegisterForm();
    initForgotForm();
    initSocialLogin();

    // ========================================
    // TOGGLE PASSWORD VISIBILITY
    // ========================================

    function initTogglePassword() {
        document.querySelectorAll('.toggle-password').forEach(btn => {
            btn.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.replace('ri-eye-line', 'ri-eye-off-line');
                } else {
                    input.type = 'password';
                    icon.classList.replace('ri-eye-off-line', 'ri-eye-line');
                }
            });
        });
    }

    // ========================================
    // US12: LOGIN FORM
    // ========================================

    function initLoginForm() {
        const loginForm = document.getElementById('loginForm');
        if (!loginForm) return;

        const emailInput = document.getElementById('loginEmail');
        const passwordInput = document.getElementById('loginPassword');
        const btnLogin = document.getElementById('btnLogin');

        // Validación en tiempo real
        emailInput.addEventListener('blur', function() {
            validateEmail(this, 'emailError');
        });

        passwordInput.addEventListener('blur', function() {
            validateRequired(this, 'passwordError', 'La contraseña es requerida');
        });

        // Submit del formulario
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validar campos
            const isEmailValid = validateEmail(emailInput, 'emailError');
            const isPasswordValid = validateRequired(passwordInput, 'passwordError', 'La contraseña es requerida');

            if (!isEmailValid || !isPasswordValid) {
                showAuthMessage('error', 'Por favor corrige los errores en el formulario');
                return;
            }

            // Mostrar loading
            btnLogin.classList.add('loading');
            btnLogin.disabled = true;

            // Simular llamada al servidor
            setTimeout(() => {
                // Simulación: credenciales correctas
                const email = emailInput.value;
                
                // Guardar sesión
                const sessionData = {
                    email: email,
                    name: 'Juan Pérez',
                    loggedIn: true,
                    remember: document.getElementById('rememberMe').checked
                };
                localStorage.setItem('bluegua_session', JSON.stringify(sessionData));

                btnLogin.classList.remove('loading');
                btnLogin.disabled = false;

                showAuthMessage('success', '¡Inicio de sesión exitoso! Redirigiendo...');
                showToast('success', '¡Bienvenido!', 'Has iniciado sesión correctamente');

                // Redirigir al perfil
                setTimeout(() => {
                    window.location.href = 'perfil.html';
                }, 1500);

            }, 1500);
        });
    }

    // ========================================
    // US11: REGISTER FORM
    // ========================================

    function initRegisterForm() {
        const registerForm = document.getElementById('registerForm');
        if (!registerForm) return;

        const nameInput = document.getElementById('regName');
        const lastnameInput = document.getElementById('regLastname');
        const emailInput = document.getElementById('regEmail');
        const passwordInput = document.getElementById('regPassword');
        const confirmPasswordInput = document.getElementById('regConfirmPassword');
        const termsCheckbox = document.getElementById('acceptTerms');
        const btnRegister = document.getElementById('btnRegister');

        // Password strength indicator
        passwordInput.addEventListener('input', function() {
            updatePasswordStrength(this.value);
        });

        // Validación en tiempo real
        nameInput.addEventListener('blur', function() {
            validateMinLength(this, 'nameError', 2, 'El nombre debe tener al menos 2 caracteres');
        });

        lastnameInput.addEventListener('blur', function() {
            validateMinLength(this, 'lastnameError', 2, 'El apellido debe tener al menos 2 caracteres');
        });

        emailInput.addEventListener('blur', function() {
            validateEmail(this, 'regEmailError');
        });

        confirmPasswordInput.addEventListener('blur', function() {
            validatePasswordMatch(passwordInput, this, 'confirmPasswordError');
        });

        // Submit del formulario
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validar todos los campos
            const isNameValid = validateMinLength(nameInput, 'nameError', 2, 'El nombre debe tener al menos 2 caracteres');
            const isLastnameValid = validateMinLength(lastnameInput, 'lastnameError', 2, 'El apellido debe tener al menos 2 caracteres');
            const isEmailValid = validateEmail(emailInput, 'regEmailError');
            const isPasswordValid = validateMinLength(passwordInput, '', 8, '');
            const isConfirmValid = validatePasswordMatch(passwordInput, confirmPasswordInput, 'confirmPasswordError');
            const isTermsAccepted = termsCheckbox.checked;

            if (!isTermsAccepted) {
                document.getElementById('termsError').textContent = 'Debes aceptar los términos y condiciones';
            } else {
                document.getElementById('termsError').textContent = '';
            }

            if (!isNameValid || !isLastnameValid || !isEmailValid || !isPasswordValid || !isConfirmValid || !isTermsAccepted) {
                showAuthMessage('error', 'Por favor corrige los errores en el formulario');
                return;
            }

            // Mostrar loading
            btnRegister.classList.add('loading');
            btnRegister.disabled = true;

            // Simular registro
            setTimeout(() => {
                const email = emailInput.value;
                const name = `${nameInput.value} ${lastnameInput.value}`;

                // Guardar sesión
                const sessionData = {
                    email: email,
                    name: name,
                    loggedIn: true
                };
                localStorage.setItem('bluegua_session', JSON.stringify(sessionData));

                btnRegister.classList.remove('loading');
                btnRegister.disabled = false;

                showAuthMessage('success', '¡Cuenta creada exitosamente! Redirigiendo...');
                showToast('success', '¡Bienvenido!', 'Tu cuenta ha sido creada correctamente');

                // Redirigir al perfil
                setTimeout(() => {
                    window.location.href = 'perfil.html';
                }, 1500);

            }, 2000);
        });
    }

    // ========================================
    // US13: FORGOT PASSWORD FORM
    // ========================================

    function initForgotForm() {
        const forgotForm = document.getElementById('forgotForm');
        if (!forgotForm) return;

        const emailInput = document.getElementById('forgotEmail');
        const btnForgot = document.getElementById('btnForgot');
        const formState = document.getElementById('formState');
        const successState = document.getElementById('successState');
        const emailSent = document.getElementById('emailSent');
        const btnResend = document.getElementById('btnResend');

        // Validación en tiempo real
        emailInput.addEventListener('blur', function() {
            validateEmail(this, 'forgotEmailError');
        });

        // Submit del formulario
        forgotForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const isEmailValid = validateEmail(emailInput, 'forgotEmailError');

            if (!isEmailValid) {
                return;
            }

            // Mostrar loading
            btnForgot.classList.add('loading');
            btnForgot.disabled = true;

            // Simular envío de correo
            setTimeout(() => {
                btnForgot.classList.remove('loading');
                btnForgot.disabled = false;

                // Mostrar estado de éxito
                formState.style.display = 'none';
                successState.style.display = 'block';
                emailSent.textContent = emailInput.value;

                showToast('success', '¡Correo enviado!', 'Revisa tu bandeja de entrada');

            }, 2000);
        });

        // Reenviar correo
        if (btnResend) {
            btnResend.addEventListener('click', function() {
                this.disabled = true;
                this.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Enviando...';

                setTimeout(() => {
                    this.disabled = false;
                    this.innerHTML = '<i class="ri-refresh-line"></i> Reenviar correo';
                    showToast('success', '¡Correo reenviado!', 'Revisa tu bandeja de entrada');
                }, 1500);
            });
        }
    }

    // ========================================
    // SOCIAL LOGIN (Demo)
    // ========================================

    function initSocialLogin() {
        document.querySelectorAll('.btn-social').forEach(btn => {
            btn.addEventListener('click', function() {
                const provider = this.classList.contains('google') ? 'Google' : 'Facebook';
                showToast('info', 'Próximamente', `Inicio de sesión con ${provider} estará disponible pronto`);
            });
        });
    }

    // ========================================
    // FUNCIONES DE VALIDACIÓN
    // ========================================

    function validateEmail(input, errorId) {
        const email = input.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errorEl = document.getElementById(errorId);

        if (!email) {
            input.classList.add('error');
            input.classList.remove('success');
            if (errorEl) errorEl.textContent = 'El correo electrónico es requerido';
            return false;
        }

        if (!regex.test(email)) {
            input.classList.add('error');
            input.classList.remove('success');
            if (errorEl) errorEl.textContent = 'Ingresa un correo electrónico válido';
            return false;
        }

        input.classList.remove('error');
        input.classList.add('success');
        if (errorEl) errorEl.textContent = '';
        return true;
    }

    function validateRequired(input, errorId, message) {
        const value = input.value.trim();
        const errorEl = document.getElementById(errorId);

        if (!value) {
            input.classList.add('error');
            input.classList.remove('success');
            if (errorEl) errorEl.textContent = message;
            return false;
        }

        input.classList.remove('error');
        input.classList.add('success');
        if (errorEl) errorEl.textContent = '';
        return true;
    }

    function validateMinLength(input, errorId, minLength, message) {
        const value = input.value.trim();
        const errorEl = document.getElementById(errorId);

        if (value.length < minLength) {
            input.classList.add('error');
            input.classList.remove('success');
            if (errorEl) errorEl.textContent = message;
            return false;
        }

        input.classList.remove('error');
        input.classList.add('success');
        if (errorEl) errorEl.textContent = '';
        return true;
    }

    function validatePasswordMatch(passwordInput, confirmInput, errorId) {
        const password = passwordInput.value;
        const confirm = confirmInput.value;
        const errorEl = document.getElementById(errorId);

        if (password !== confirm) {
            confirmInput.classList.add('error');
            confirmInput.classList.remove('success');
            if (errorEl) errorEl.textContent = 'Las contraseñas no coinciden';
            return false;
        }

        confirmInput.classList.remove('error');
        confirmInput.classList.add('success');
        if (errorEl) errorEl.textContent = '';
        return true;
    }

    function updatePasswordStrength(password) {
        const strengthEl = document.getElementById('passwordStrength');
        if (!strengthEl) return;

        const strengthText = strengthEl.querySelector('.strength-text');
        let strength = '';
        let text = '';

        if (password.length === 0) {
            strength = '';
            text = 'Ingresa una contraseña';
        } else if (password.length < 8) {
            strength = 'weak';
            text = 'Contraseña muy corta';
        } else if (password.length >= 8) {
            const hasUpper = /[A-Z]/.test(password);
            const hasLower = /[a-z]/.test(password);
            const hasNumber = /[0-9]/.test(password);
            const hasSpecial = /[^A-Za-z0-9]/.test(password);

            const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;

            if (score <= 2) {
                strength = 'weak';
                text = 'Contraseña débil';
            } else if (score === 3) {
                strength = 'medium';
                text = 'Contraseña media';
            } else {
                strength = 'strong';
                text = 'Contraseña fuerte';
            }
        }

        strengthEl.className = 'password-strength ' + strength;
        strengthText.textContent = text;
    }

    // ========================================
    // MENSAJES Y TOAST
    // ========================================

    function showAuthMessage(type, message) {
        const messageEl = document.getElementById('authMessage');
        if (!messageEl) return;

        const icons = {
            success: 'ri-checkbox-circle-fill',
            error: 'ri-close-circle-fill'
        };

        messageEl.className = `auth-message ${type} show`;
        messageEl.innerHTML = `<i class="${icons[type]}"></i> ${message}`;

        // Ocultar después de 5 segundos
        setTimeout(() => {
            messageEl.classList.remove('show');
        }, 5000);
    }

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
