Feature: Acceder a contenido sin conexión

  Como usuario,
  deseo acceder a guías y recursos educativos incluso cuando no tengo conexión a internet
  para continuar aprendiendo en cualquier momento.

  Escenario: E01 - El usuario abre una guía previamente consultada sin conexión activa
    Dado que el usuario ha consultado guías previamente con conexión a internet
    Cuando el usuario no tiene conexión activa
    Y intenta abrir una guía ya visitada
    Entonces el sistema carga la guía desde el almacenamiento local
    Y el contenido se muestra completamente sin errores

  Escenario: E02 - El contenido se carga desde almacenamiento local sin errores
    Dado que el usuario está en modo sin conexión
    Cuando el usuario accede a una guía guardada localmente
    Entonces todo el contenido (texto, imágenes, estructura) se carga correctamente
    Y no se muestran mensajes de error por falta de conexión

  Escenario: E03 - Al reconectarse, el sistema actualiza la versión de la guía automáticamente
    Dado que el usuario recupera la conexión a internet
    Cuando el sistema detecta la reconexión
    Entonces verifica automáticamente si hay nuevas versiones de las guías consultadas
    Y actualiza silenciosamente el contenido local con las versiones más recientes

  Example: Gestión de contenido offline
    | Tipo contenido | Almacenamiento local | Actualización | Tamaño máximo |
    | Guías texto | Sí | Automática | 50 MB |
    | Imágenes | Sí | Diferida | 100 MB |
    | Videos | No | N/A | N/A |
    | Tests interactivos | Sí | Automática | 10 MB |
