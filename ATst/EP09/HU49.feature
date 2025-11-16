Feature: Sincronización automática

  Como usuario,
  deseo que los datos se sincronicen automáticamente al recuperar conexión
  sin tener que hacerlo manualmente.

  Escenario: E01 - La aplicación detecta automáticamente la conexión a internet
    Dado que el usuario recupera la conexión a internet
    Cuando la aplicación detecta el cambio de estado de la red
    Entonces inicia automáticamente el proceso de sincronización
    Y trabaja en segundo plano sin interrumpir la experiencia del usuario

  Escenario: E02 - Se muestra el mensaje "Datos actualizados correctamente" tras completar el proceso
    Dado que la sincronización automática se completa exitosamente
    Cuando el proceso termina sin errores
    Entonces el sistema muestra el mensaje "Datos actualizados correctamente"
    Y el mensaje es visible pero no intrusivo

  Escenario: E03 - La sincronización maneja conflictos de datos automáticamente
    Dado que existen versiones conflictivas de datos local y remota
    Cuando ocurre la sincronización automática
    Entonces el sistema resuelve los conflictos siguiendo reglas predefinidas
    Y preserva la información más reciente y completa

  Example: Comportamiento de sincronización automática
    | Evento | Acción automática | Notificación | Tiempo máximo |
    | Reconexión | Sincronizar pendientes | Sí | 30 segundos |
    | App en primer plano | Sincronizar cada 15 min | No | 15 minutos |
    | Datos críticos | Sincronizar inmediato | Sí | 5 segundos |
    | Conflictos | Usar versión más reciente | Sí | Resolución automática |
