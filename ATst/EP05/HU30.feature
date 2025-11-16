Feature: Animaciones suaves y no intrusivas

  Como usuario,
  deseo ver transiciones fluidas sin interrupciones
  para disfrutar una experiencia moderna y cómoda.

  Escenario: E01 - Las animaciones se aplican al desplazamiento o aparición de elementos
    Dado que el usuario navega por la página de BlueGua
    Cuando se desplaza o interactúa con elementos
    Entonces las animaciones se activan suavemente al aparecer elementos
    Y las transiciones son fluidas y no distraen del contenido

  Escenario: E02 - No afectan el rendimiento de la página
    Dado que la página contiene animaciones y efectos visuales
    Cuando el usuario interactúa con el sitio
    Entonces la página mantiene un rendimiento rápido y responsive
    Y las animaciones no ralentizan la experiencia de usuario

  Escenario: E03 - Sin parpadeos ni movimientos bruscos
    Dado que el usuario visualiza las animaciones de BlueGua
    Cuando se ejecutan las transiciones y efectos
    Entonces no hay parpadeos molestos en la pantalla
    Y todos los movimientos son suaves y naturales

  Example: Tipos de animaciones implementadas
    | Animación | Trigger | Duración | Easing |
    | Fade-in | Aparecer elemento | 0.3s | ease-out |
    | Slide-up | Scroll | 0.4s | ease-in-out |
    | Hover buttons | Mouse over | 0.2s | ease |
    | Loading | Carga | 0.5s | linear |
