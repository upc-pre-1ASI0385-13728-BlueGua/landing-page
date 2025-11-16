Feature: Recibir una guía recomendada semanalmente

  Como usuario,
  deseo recibir una guía destacada cada semana
  para mantenerme informado sin buscar manualmente.

  Escenario: E01 - Cada semana aparece destacada la "Guía de la semana"
    Dado que el usuario accede a la plataforma BlueGua
    Cuando el sistema actualiza las recomendaciones semanales
    Entonces aparece destacada la "Guía de la semana" en un banner especial
    Y el contenido se actualiza automáticamente cada semana

  Escenario: E02 - El usuario puede acceder a la guía recomendada desde el banner
    Dado que el usuario visualiza el banner de "Guía de la semana"
    Cuando el usuario hace clic en el banner
    Entonces el sistema redirige a la guía recomendada completa
    Y puede leer y guardar la guía como cualquier otra

  Escenario: E03 - Notificación visible en diferentes secciones
    Dado que el usuario navega por distintas partes de la plataforma
    Cuando existe una "Guía de la semana" activa
    Entonces el banner o notificación es visible en las secciones principales
    Y el usuario puede identificarla fácilmente

  Examples: Rotación de guías semanales
    | Semana | Tema guía | Categoría | Duración |
    | 1 | Optimización de riego | Hogar | 8 min |
    | 2 | Sistemas de captación pluvial | Comunidad | 12 min |
    | 3 | Mantenimiento preventivo tuberías | Negocio | 15 min |
    | 4 | Electrodomésticos eficientes | Hogar | 10 min |
