Feature: Completar guías con pequeños tests

  Como usuario,
  deseo responder breves preguntas al final de cada guía
  para confirmar mi aprendizaje.

  Escenario: E01 - Al finalizar una guía, el usuario ve un mini quiz con preguntas
    Dado que el usuario ha llegado al final de una guía
    Cuando el sistema muestra la sección de evaluación
    Entonces aparece un mini quiz con 3-5 preguntas relacionadas con la guía
    Y el usuario puede responder cada pregunta secuencialmente

  Escenario: E02 - El sistema muestra la puntuación obtenida y retroalimentación inmediata
    Dado que el usuario ha completado todas las preguntas del quiz
    Cuando envía sus respuestas
    Entonces el sistema muestra inmediatamente la puntuación obtenida
    Y proporciona retroalimentación específica sobre las respuestas correctas e incorrectas

  Escenario: E03 - Opción de reintentar el quiz si el resultado no es satisfactorio
    Dado que el usuario no alcanzó la puntuación mínima deseada
    Cuando el usuario desea mejorar su resultado
    Entonces el sistema ofrece la opción de reintentar el quiz
    Y las preguntas se reorganizan para una nueva oportunidad

  Examples: Estructura del mini quiz
    | Preguntas | Puntuación mínima | Retroalimentación | Reintentos |
    | 3-5 | 70% | Inmediata | Ilimitados |
    | Múltiple opción | Por pregunta | Explicación por respuesta | Preguntas aleatorizadas |
