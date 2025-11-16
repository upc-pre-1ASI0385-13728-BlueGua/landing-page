Feature: Desplazamiento fluido en la navegación del sitio BlueGua

  Como usuario,
  deseo que la navegación por la página sea fluida y con desplazamientos suaves
  para disfrutar una experiencia cómoda.

  Escenario: E01 - Desplazamiento animado al hacer clic en una opción del menú
    Dado que el usuario se encuentra en el sitio BlueGua
    Cuando el usuario hace clic en cualquiera de las opciones del menú
    Entonces la página realiza un desplazamiento suave hacia la sección correspondiente
    Y el movimiento es continuo y sin brusquedad

  Escenario: E02 - Navegación sin saltos ni bloqueos
    Dado que el usuario se desplaza entre secciones del sitio
    Cuando el usuario utiliza el menú o hace scroll manual
    Entonces no se presentan saltos, bloqueos ni interrupciones durante el desplazamiento
    Y la experiencia de navegación es fluida tanto en móvil como en computadora

  Example: Datos de salida esperados
    | Acción                       | Desplazamiento suave | Sin saltos | Sin bloqueos | Fluido en móvil | Fluido en PC |
    | Clic en menú                 | Sí                   | Sí         | Sí           | Sí              | Sí           |
    | Scroll manual                | Sí                   | Sí         | Sí           | Sí              | Sí           |
