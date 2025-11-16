Feature: Consultar historial de ahorro

  Como usuario,
  deseo ver mi progreso mensual de ahorro
  para evaluar los avances.

  Escenario: E01 - El usuario abre la sección "Historial" y visualiza una tabla o línea de tiempo
    Dado que el usuario ha iniciado sesión en su cuenta BlueGua
    Cuando el usuario accede a la sección "Historial"
    Entonces el sistema muestra una tabla o línea de tiempo con su progreso
    Y la visualización es clara y fácil de entender

  Escenario: E02 - Los registros muestran fecha, porcentaje y tipo de ahorro
    Dado que el usuario está visualizando su historial de ahorro
    Cuando el sistema carga los registros
    Entonces cada entrada muestra fecha específica, porcentaje de ahorro y tipo de ahorro
    Y la información está organizada cronológicamente

  Escenario: E03 - El usuario puede filtrar y ordenar el historial por periodos
    Dado que el usuario quiere analizar periodos específicos
    Cuando aplica filtros por mes, trimestre o año
    Entonces el historial se actualiza mostrando solo los registros del periodo seleccionado
    Y mantiene la estructura de fecha, porcentaje y tipo de ahorro

  Examples: Estructura del historial de ahorro
    | Periodo | Fecha | Porcentaje ahorro | Tipo ahorro |
    | Mensual | Enero 2024 | 15% | Consumo doméstico |
    | Semanal | Semana 1-7 Feb | 8% | Uso eficiente |
    | Diario | 15 Mar 2024 | 3% | Reducción riego |
    | Trimestral | Q1 2024 | 22% | Consumo general |
