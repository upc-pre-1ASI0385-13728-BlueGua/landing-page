Feature: Consistencia visual del logo

  Como usuario,
  deseo que el logo de BlueGua se mantenga visible y coherente en todo el sitio
  para reconocer fácilmente la marca.

  Escenario: E01 - Logo visible en header y footer
    Dado que el usuario navega por cualquier sección del sitio BlueGua
    Cuando el usuario visualiza la página
    Entonces el sistema muestra el logo en la parte superior (header)
    Y también muestra el logo en la parte inferior (footer)

  Escenario: E02 - Tamaño y posición consistentes
    Dado que el usuario visita diferentes secciones del sitio
    Cuando el usuario compara el logo en header y footer
    Entonces el tamaño del logo es consistente en todas las secciones
    Y los colores del logo se mantienen iguales en toda la plataforma

  Escenario: E03 - Calidad y claridad del logo
    Dado que el usuario accede desde diferentes dispositivos
    Cuando el usuario visualiza el logo en cualquier pantalla
    Entonces la imagen del logo se muestra nítida y sin pixelación
    Y el logo es reconocible y claro en todos los tamaños de pantalla

  Example: Especificaciones del logo
    | Ubicación | Tamaño | Formato | Color consistente |
    | Header    | 150px  | SVG/PNG | Sí                |
    | Footer    | 120px  | SVG/PNG | Sí                |
    | Móvil     | 100px  | SVG/PNG | Sí                |
