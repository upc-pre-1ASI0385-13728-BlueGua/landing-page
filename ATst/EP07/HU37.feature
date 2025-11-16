Feature: Compartir mis logros

  Como usuario,
  deseo publicar mis avances o resultados de ahorro
  para inspirar a otros.

  Escenario: E01 - Tras completar una guía o reto, el usuario puede publicar su logro
    Dado que el usuario ha completado una guía o reto exitosamente
    Cuando el sistema muestra la pantalla de finalización
    Entonces aparece el botón "Publicar logro" claramente visible
    Y el usuario puede optar por compartir su logro con la comunidad

  Escenario: E02 - El logro aparece en el muro comunitario con información completa
    Dado que el usuario ha publicado un logro
    Cuando otros usuarios acceden al muro comunitario
    Entonces el logro aparece mostrando nombre del usuario, fecha y tipo de logro
    Y la publicación es visible para todos los miembros de la comunidad

  Escenario: E03 - Opción de personalizar la publicación antes de compartir
    Dado que el usuario ha presionado "Publicar logro"
    Cuando el sistema muestra el formulario de publicación
    Entonces el usuario puede agregar un mensaje personalizado
    Y puede elegir qué información específica desea compartir

  Examples: Tipos de logros compartibles
    | Tipo logro | Información mostrada | Icono | Mensaje predeterminado |
    | Guía completada | Nombre guía, fecha, duración | 📚 | "Acabo de completar esta guía" |
    | Reto superado | Nombre reto, métrica ahorro | 💧 | "¡Reto completado! Ahorré X litros" |
    | Meta alcanzada | Tipo meta, progreso, fecha | 🎯 | "¡Meta alcanzada! Comparto mi éxito" |
