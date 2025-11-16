Feature: Dar "me gusta" o reacciones

  Como usuario,
  deseo reaccionar a publicaciones o comentarios
  para mostrar apoyo.

  Escenario: E01 - El usuario presiona el ícono "👍" en una publicación
    Dado que el usuario está visualizando una publicación o comentario
    Cuando el usuario presiona el ícono "👍"
    Entonces el sistema registra la reacción del usuario
    Y el ícono cambia de estado para indicar que está activo

  Escenario: E02 - El contador de reacciones se actualiza automáticamente
    Dado que el usuario ha reaccionado a una publicación
    Cuando el sistema procesa la reacción
    Entonces el contador de reacciones se incrementa automáticamente
    Y el cambio es visible inmediatamente para todos los usuarios

  Escenario: E03 - El usuario puede quitar su reacción y el contador se actualiza
    Dado que el usuario ya ha reaccionado a una publicación
    Cuando el usuario presiona nuevamente el ícono "👍"
    Entonces el sistema remueve la reacción del usuario
    Y el contador de reacciones se decrementa automáticamente

  Example: Estados y comportamientos del botón de reacciones
    | Estado | Icono | Color | Contador |
    | No reaccionado | 👍 | Gris | Valor actual |
    | Reaccionado | 👍 | Azul | Valor + 1 |
    | En proceso | ⏳ | Gris | Valor actual |
    | Error | ❌ | Rojo | Valor actual |
