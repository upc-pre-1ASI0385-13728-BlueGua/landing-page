Feature: Contraste accesible

  Como usuario con visión reducida,
  deseo leer el contenido con suficiente contraste entre fondo y texto
  para evitar fatiga visual.

  Escenario: E01 - Contraste cumple con nivel AA de accesibilidad
    Dado que el usuario accede a cualquier página de BlueGua
    Cuando el usuario visualiza textos sobre fondos
    Entonces el contraste cumple con el nivel AA de WCAG
    Y todos los textos son legibles para usuarios con visión reducida

  Escenario: E02 - Comprobado en vista móvil y escritorio
    Dado que el usuario accede desde diferentes dispositivos
    Cuando el usuario visualiza el contenido en móvil y escritorio
    Entonces el contraste se mantiene adecuado en todos los tamaños de pantalla
    Y no hay zonas de texto ilegibles en ninguna vista

  Escenario: E03 - Lectura sin esfuerzo en condiciones de brillo bajo
    Dado que el usuario utiliza el sitio con brillo de pantalla bajo
    Cuando el usuario lee cualquier contenido textual
    Entonces puede leer sin esfuerzo visual
    Y no experimenta fatiga visual durante la navegación

  Example: Niveles de contraste verificados
    | Elemento | Color texto | Color fondo | Ratio | Cumple AA |
    | Texto principal | #1A1A1A | #FFFFFF | 15.9:1 | Sí |
    | Texto secundario | #4A4A4A | #F8F9FA | 7.2:1 | Sí |
    | Botones primarios | #FFFFFF | #2E5BFF | 4.5:1 | Sí |
    | Textos en verde | #FFFFFF | #00C389 | 3.1:1 | Sí|
