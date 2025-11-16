Feature: Comentar publicaciones

  Como usuario,
  deseo comentar en publicaciones
  para interactuar con otros.

  Escenario: E01 - El usuario escribe un comentario y presiona "Enviar"
    Dado que el usuario está visualizando una publicación en el muro comunitario
    Cuando el usuario escribe un comentario en el campo de texto
    Y presiona el botón "Enviar"
    Entonces el sistema procesa el comentario
    Y lo añade a la lista de comentarios de la publicación

  Escenario: E02 - El comentario aparece inmediatamente con su nombre y fecha
    Dado que el usuario ha enviado un comentario exitosamente
    Cuando el sistema actualiza la publicación
    Entonces el comentario aparece inmediatamente en la sección de comentarios
    Y muestra el nombre del usuario y la fecha de publicación

  Escenario: E03 - Validación de comentarios vacíos o muy largos
    Dado que el usuario intenta enviar un comentario
    Cuando el comentario está vacío o excede el límite de caracteres
    Entonces el sistema muestra un mensaje de error claro
    Y no permite enviar el comentario hasta que se corrija

  Examples: Especificaciones de comentarios
    | Elemento | Especificación | Límite |
    | Campo texto | Mínimo 1 carácter | Máximo 500 caracteres |
    | Botón enviar | Visible siempre | Habilitado solo con texto válido |
    | Formato | Nombre + Fecha + Comentario | Orden cronológico |
    | Tiempo respuesta | Inmediato | Menos de 2 segundos |
