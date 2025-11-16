Feature: Acceder a guías prácticas

  Como usuario,
  deseo acceder a guías simples sobre ahorro de agua
  para aplicar recomendaciones en casa o negocio.

  Escenario: E01 - El usuario ingresa a la sección "Guías" y visualiza las categorías
    Dado que el usuario accede a la sección de guías de BlueGua
    Cuando el usuario visualiza la página de guías
    Entonces el sistema muestra las categorías: "Hogar", "Negocio" y "Comunidad"
    Y cada categoría es claramente identificable y accesible

  Escenario: E02 - Al seleccionar una categoría, se muestran guías relevantes
    Dado que el usuario selecciona una categoría de guías
    Cuando el sistema carga las guías correspondientes
    Entonces se muestran las guías relevantes con título, descripción y duración estimada
    Y la información está organizada de manera clara y fácil de seguir

  Escenario: E03 - Contenido visible offline
    Dado que el usuario ha accedido previamente a las guías
    Cuando el usuario no tiene conexión a internet
    Entonces el contenido de las guías permanece visible y accesible
    Y puede consultar las recomendaciones sin necesidad de conexión

  Example: Estructura de las guías por categoría
    | Categoría | Tipo de guía | Duración estimada | Nivel |
    | Hogar     | Ahorro en baño | 5 min | Básico |
    | Hogar     | Uso eficiente en cocina | 8 min | Intermedio |
    | Negocio   | Optimización en oficinas | 15 min | Avanzado |
    | Comunidad | Programas comunitarios | 10 min | Básico |
