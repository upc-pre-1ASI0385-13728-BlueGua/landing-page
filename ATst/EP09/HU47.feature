Feature: Guardar mis avances offline

  Como usuario,
  deseo registrar mis progresos o completar tests sin conexión
  para no perder mi información.

  Escenario: E01 - El usuario completa un test o reto sin conexión
    Dado que el usuario no tiene conexión a internet
    Cuando el usuario completa un test o reto en la aplicación
    Entonces el sistema permite realizar la actividad normalmente
    Y registra todas las respuestas y progresos localmente

  Escenario: E02 - El sistema guarda los avances localmente
    Dado que el usuario realiza acciones sin conexión
    Cuando el usuario completa tests, retos o registra progresos
    Entonces el sistema guarda toda la información en el almacenamiento local
    Y muestra confirmación de que los datos se han guardado correctamente

  Escenario: E03 - Al reconectarse, los avances se sincronizan con la cuenta del usuario
    Dado que el usuario recupera la conexión a internet
    Cuando el sistema detecta la reconexión
    Entonces sincroniza automáticamente todos los avances guardados localmente
    Y confirma que la sincronización se completó exitosamente sin pérdida de datos

  Example: Tipos de avances guardados offline
    | Tipo avance | Guardado local | Sincronización | Confirmación |
    | Tests completados | Sí | Automática | Mensaje de éxito |
    | Retos finalizados | Sí | Automática | Notificación push |
    | Progreso en guías | Sí | Automática | Indicador visual |
    | Métricas de ahorro | Sí | Automática | Actualización perfil |
