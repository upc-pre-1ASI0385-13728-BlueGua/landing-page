Feature: Botón “Ir arriba” para regresar al inicio de la página

  Como usuario,
  deseo tener un botón que me lleve rápidamente al inicio de la página
  para no desplazarme manualmente.

  Escenario: E01 - El botón aparece después de hacer scroll
    Dado que el usuario se encuentra navegando en el sitio BlueGua
    Cuando el usuario baja por la página (scroll hacia abajo)
    Entonces aparece un botón “Ir arriba” en la esquina indicada del diseño
    Y el botón es visible, claro y fácil de presionar tanto en móvil como en computadora

  Escenario: E02 - Al presionar el botón, el usuario regresa suavemente al inicio
    Dado que el botón “Ir arriba” está visible
    Cuando el usuario hace clic o toca el botón
    Entonces la página se desplaza suavemente hacia el inicio
    Y el desplazamiento ocurre con una animación fluida sin saltos ni interrupciones

  Example: Datos de salida esperados
    | Acción                           | Botón visible | Regresa al inicio | Animación suave | Funciona en móvil | Funciona en PC |
    | Scroll hacia abajo               | Sí            | N/A               | N/A             | Sí                | Sí             |
    | Clic/Tap en botón "Ir arriba"    | Sí            | Sí                | Sí              | Sí                | Sí             |
