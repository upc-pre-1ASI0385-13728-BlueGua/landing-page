Feature: Cerrar sesión de forma segura

  Como usuario,
  deseo cerrar sesión correctamente desde cualquier dispositivo
  para proteger mis datos.

  Escenario: E01 - Opción "Cerrar sesión" visible
    Dado que el usuario ha iniciado sesión en BlueGua
    Cuando el usuario accede al menú de perfil o cuenta
    Entonces el sistema muestra la opción "Cerrar sesión" claramente visible
    Y el usuario puede localizarla fácilmente desde cualquier parte de la página

  Escenario: E02 - Redirección al inicio tras cerrar sesión
    Dado que el usuario hace clic en la opción "Cerrar sesión"
    Cuando el sistema procesa la solicitud de cierre de sesión
    Entonces el usuario es redirigido correctamente a la página de inicio
    Y todas las sesiones activas son terminadas de forma segura

  Escenario: E03 - Mensaje "Sesión cerrada correctamente"
    Dado que el cierre de sesión se ha procesado exitosamente
    Cuando el usuario es redirigido a la página de inicio
    Entonces el sistema muestra un mensaje de confirmación "Sesión cerrada correctamente"
    Y el usuario no puede acceder a áreas restringidas sin volver a autenticarse

  Example: Estados de acceso tras cierre de sesión
    | Página | Acceso antes | Acceso después |
    | Perfil | Permitido | Denegado |
    | Dashboard | Permitido | Denegado |
    | Configuración | Permitido | Denegado |
    | Inicio | Permitido | Permitido |
