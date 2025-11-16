Feature: Mensajes empáticos y positivos

  Como usuario,
  deseo leer mensajes amigables y motivadores
  para sentirme acompañado durante mi experiencia.

  Escenario: E01 - Los textos de error usan lenguaje positivo
    Dado que el usuario comete un error en cualquier formulario o acción
    Cuando el sistema detecta el error
    Entonces muestra mensajes con lenguaje amable como "Ups... inténtalo de nuevo"
    Y ningún mensaje resulta agresivo o confuso para el usuario

  Escenario: E02 - Los mensajes de éxito refuerzan la motivación
    Dado que el usuario completa exitosamente una acción importante
    Cuando el sistema confirma la acción
    Entonces muestra mensajes motivadores como "¡Lo lograste!"
    Y el lenguaje refuerza positivamente la experiencia del usuario

  Escenario: E03 - Tono amigable consistente en toda la plataforma
    Dado que el usuario interactúa con diferentes secciones de BlueGua
    Cuando lee cualquier mensaje o texto del sistema
    Entonces todos mantienen el tono amigable y empático de la marca
    Y el lenguaje es consistente en toda la experiencia

  Example: Ejemplos de mensajes empáticos
    | Situación | Mensaje negativo a evitar | Mensaje positivo a usar |
    | Error login | "Credenciales inválidas" | "Ups, esas credenciales no coinciden" |
    | Registro exitoso | "Usuario creado" | "¡Bienvenido/a a la comunidad!" |
    | Pago rechazado | "Transacción fallida" | "Tu pago necesita un ajuste, revísalo" |
    | Suscripción cancelada | "Suscripción cancelada" | "Lamentamos verte partir, esperamos volverte a ver" |
