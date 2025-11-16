Feature: Ver redes sociales

  Como usuario,
  deseo acceder a las redes sociales oficiales de BlueGua
  para seguir sus publicaciones.

  Escenario: E01 - Enlaces visibles en el footer y cabecera
    Dado que el usuario navega por el sitio web de BlueGua
    Cuando el usuario revisa el footer y la cabecera de la página
    Entonces el sistema muestra los íconos de redes sociales claramente visibles
    Y los íconos son fáciles de identificar y encontrar

  Escenario: E02 - Abren en nueva pestaña
    Dado que los íconos de redes sociales están visibles
    Cuando el usuario hace clic en cualquiera de los íconos
    Entonces el enlace se abre correctamente en una nueva pestaña del navegador
    Y el sitio original de BlueGua permanece abierto sin interrupciones

  Escenario: E03 - Enlaces llevan a perfiles oficiales de BlueGua
    Dado que el usuario hace clic en un ícono de red social
    Cuando se abre la nueva pestaña
    Entonces el sistema redirige al perfil oficial de BlueGua en esa red social
    Y los enlaces funcionan correctamente sin errores

  Example: Redes sociales disponibles
    | Red Social | Ícono visible | Enlace funcional | Perfil oficial |
    | Facebook   | Sí            | Sí               | Sí             |
    | Instagram  | Sí            | Sí               | Sí             |
    | TikTok     | Sí            | Sí               | Sí             |
    | LinkedIn   | Sí            | Sí               | Sí             |
    | Twitter/X  | Sí            | Sí               | Sí             |
