Feature: Filtrar guías por tema o nivel

  Como usuario,
  deseo filtrar las guías según tema (consumo, reciclaje, mantenimiento) o nivel de dificultad
  para encontrar contenido relevante más fácilmente.

  Escenario: E01 - El usuario selecciona un filtro por tema y las guías se actualizan dinámicamente
    Dado que el usuario está en la sección de guías de BlueGua
    Cuando el usuario selecciona un filtro por tema (consumo, reciclaje, mantenimiento)
    Entonces las guías se actualizan dinámicamente mostrando solo las del tema seleccionado
    Y los resultados se muestran sin recarga completa de la página

  Escenario: E02 - El usuario aplica un filtro y el contenido se ajusta en pantalla
    Dado que el usuario aplica un filtro por nivel de dificultad
    Cuando el sistema procesa el filtro
    Entonces el contenido visible se ajusta automáticamente en pantalla
    Y la interfaz se mantiene estable durante la transición

  Escenario: E03 - El usuario puede combinar ambos filtros sin errores
    Dado que el usuario ha aplicado múltiples filtros
    Cuando combina filtros de tema y nivel de dificultad
    Entonces el sistema muestra las guías que cumplen con todos los criterios
    Y no se producen errores ni recargas no deseadas de la página

  Example: Opciones de filtrado disponibles
    | Tipo filtro | Opciones | Comportamiento |
    | Tema | Consumo, Reciclaje, Mantenimiento | Filtrado múltiple |
    | Nivel | Básico, Intermedio, Avanzado | Selección única |
    | Duración | Corta (<5min), Media (5-15min), Larga (>15min) | Rango |
