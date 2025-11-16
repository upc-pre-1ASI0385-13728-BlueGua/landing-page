Feature: Ver estado de sincronización

  Como usuario,
  deseo visualizar si mis datos están actualizados o pendientes de sincronizar
  para conocer el estado de mi información.

  Escenario: E01 - El usuario visualiza un indicador de sincronización
    Dado que el usuario accede a cualquier sección de la aplicación
    Cuando el sistema carga la interfaz
    Entonces muestra un indicador claro del estado de sincronización
    Y indica desde cuándo son los datos mostrados o si hay registros pendientes

  Escenario: E02 - El estado cambia automáticamente al completar una sincronización
    Dado que el sistema completa un proceso de sincronización
    Cuando la sincronización termina exitosamente
    Entonces el indicador actualiza automáticamente su estado
    Y muestra la nueva fecha/hora de última sincronización

  Escenario: E03 - El usuario puede refrescar manualmente el estado
    Dado que el usuario quiere verificar el estado actual de sincronización
    Cuando el usuario activa la opción de "Actualizar ahora"
    Entonces el sistema intenta sincronizar inmediatamente
    Y muestra el resultado del intento de sincronización

  Example: Estados del indicador de sincronización
    | Estado | Color | Icono | Mensaje |
    | Sincronizado | Verde | ✅ | "Actualizado hace X minutos" |
    | Pendiente | Naranja | ⏳ | "X datos pendientes por sincronizar" |
    | Sin conexión | Rojo | 🌐 | "Sin conexión - Modo offline" |
    | Sincronizando | Azul | 🔄 | "Sincronizando datos..." |
    | Error | Rojo | ❌ | "Error en sincronización" |
