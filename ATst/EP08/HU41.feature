Feature: Ver mi consumo estimado

  Como usuario,
  deseo ver mis métricas de consumo y ahorro acumulado
  para monitorear mi progreso.

  Escenario: E01 - El usuario accede a la sección "Mi consumo" y ve un gráfico de barras
    Dado que el usuario ha iniciado sesión en su cuenta BlueGua
    Cuando el usuario accede a la sección "Mi consumo"
    Entonces el sistema muestra un gráfico de barras con sus métricas de consumo
    Y el gráfico presenta los datos de manera clara y entendible

  Escenario: E02 - Se muestra la comparación entre el consumo actual y el periodo anterior
    Dado que el usuario está visualizando sus métricas de consumo
    Cuando el sistema carga la información
    Entonces se muestra una comparación entre el consumo actual y el periodo anterior
    Y se indica claramente el porcentaje de aumento o disminución

  Escenario: E03 - El usuario puede filtrar por periodos de tiempo específicos
    Dado que el usuario quiere analizar diferentes periodos
    Cuando selecciona filtros de tiempo (semanal, mensual, anual)
    Entonces el gráfico se actualiza mostrando los datos del periodo seleccionado
    Y la comparación se ajusta al periodo filtrado

  Examples: Tipos de gráficos y periodos disponibles
    | Tipo gráfico | Periodo | Datos mostrados | Comparación |
    | Barras | Semanal | Consumo por día | Vs semana anterior |
    | Circular | Mensual | Distribución por categoría | Vs mes anterior |
    | Líneas | Anual | Tendencia anual | Vs año anterior |
    | Mixto | Personalizado | Múltiples métricas | Período comparable |
