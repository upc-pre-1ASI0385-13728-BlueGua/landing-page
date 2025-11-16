Feature: Diseño responsivo adaptable

  Como usuario,
  deseo que la Landing Page se adapte a cualquier dispositivo
  para navegar sin dificultades.

  Escenario: E01 - Elementos se reorganizan en pantalla móvil
    Dado que el usuario accede a BlueGua desde un dispositivo móvil
    Cuando visualiza la landing page
    Entonces los elementos se reorganizan correctamente para pantallas pequeñas
    Y la navegación es fluida e intuitiva en móvil

  Escenario: E02 - No hay barras horizontales o cortes visuales
    Dado que el usuario navega por la landing page
    Cuando se desplaza horizontal o verticalmente
    Entonces no aparecen barras de desplazamiento horizontales no deseadas
    Y ningún elemento se corta o sale de los límites de la pantalla

  Escenario: E03 - Imágenes y textos se adaptan automáticamente
    Dado que el usuario cambia el tamaño de la ventana o usa diferentes dispositivos
    Cuando el viewport se ajusta
    Entonces las imágenes se redimensionan manteniendo su proporción
    Y los textos se adaptan automáticamente sin desbordamientos

  Example: Puntos de ruptura responsivos
    | Dispositivo | Ancho mínimo | Ancho máximo | Comportamiento |
    | Móvil       | 320px        | 767px        | Columna única |
    | Tablet      | 768px        | 1023px       | Dos columnas |
    | Desktop     | 1024px       | 1440px       | Múltiples columnas |
    | Grande      | 1441px       | 1841px       | Contenido centrado |
