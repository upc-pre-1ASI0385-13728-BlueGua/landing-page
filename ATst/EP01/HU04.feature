Feature: Acceso a la sección de Preguntas Frecuentes (FAQ) de BlueGua

  Como usuario,
  deseo acceder a una sección de preguntas frecuentes
  para resolver mis dudas antes de suscribirme.

  Escenario: E01 - Visualizar al menos cinco preguntas con sus respuestas
    Dado que el usuario se encuentra en el sitio BlueGua
    Cuando el usuario accede a la sección de Preguntas Frecuentes
    Entonces el sistema muestra al menos cinco preguntas con sus respectivas respuestas
    Y el usuario puede abrir y cerrar cada respuesta fácilmente además la sección es fácil de encontrar dentro del sitio

  Escenario: E02 - Diseño responsivo y animaciones de despliegue
    Dado que el usuario visualiza la sección de Preguntas Frecuentes
    Cuando el usuario interactúa con las preguntas para ver sus respuestas
    Entonces las animaciones de desplegado y cierre se muestran de forma fluida
    Y toda la información se visualiza correctamente en celular y computadora concordando con un diseño que mantiene coherencia y responsividad en todos los dispositivos

  Example: Datos de salida esperados
    | Pregunta / Respuesta | Desplegable | Animación fluida | Responsivo en móvil | Responsivo en PC |
    | Pregunta 1           | Sí          | Sí               | Sí                  | Sí               |
    | Pregunta 2           | Sí          | Sí               | Sí                  | Sí               |
    | Pregunta 3           | Sí          | Sí               | Sí                  | Sí               |
    | Pregunta 4           | Sí          | Sí               | Sí                  | Sí               |
    | Pregunta 5           | Sí          | Sí               | Sí                  | Sí               |
