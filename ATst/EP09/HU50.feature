Feature: Registro de sincronizaciones

  Como usuario avanzado o administrador,
  deseo poder consultar un historial de sincronizaciones exitosas y fallidas
  para monitorear el comportamiento del sistema.

  Escenario: E01 - El usuario accede a la sección "Historial de sincronización"
    Dado que el usuario tiene permisos de administrador o avanzado
    Cuando el usuario accede a la sección "Historial de sincronización"
    Entonces el sistema muestra una lista completa de eventos de sincronización
    Y la información está organizada de manera clara y cronológica

  Escenario: E02 - Se muestran fecha, hora y resultado de cada intento
    Dado que el usuario está visualizando el historial de sincronización
    Cuando el sistema carga los registros
    Entonces cada evento muestra fecha, hora exacta y resultado (éxito o fallo)
    Y los estados están claramente diferenciados con colores o iconos

  Escenario: E03 - El usuario puede filtrar y buscar en el historial
    Dado que el historial contiene múltiples registros
    Cuando el usuario aplica filtros por fecha, estado o tipo de sincronización
    Entonces la lista se actualiza mostrando solo los registros que cumplen los criterios
    Y los filtros se aplican en tiempo real

  Example: Estructura del historial de sincronizaciones
    | Fecha | Hora | Tipo | Estado | Datos sincronizados |
    | 2024-03-15 | 14:30:25 | Automática | ✅ Éxito | 15 registros |
    | 2024-03-15 | 11:15:42 | Manual | ❌ Fallo | Error de conexión |
    | 2024-03-14 | 09:45:10 | Automática | ✅ Éxito | 8 registros |
    | 2024-03-14 | 16:20:35 | Automática | ⚠️ Parcial | 5 de 7 registros |
