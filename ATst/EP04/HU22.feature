Feature: Ver métricas de impacto

  Como usuario,
  deseo visualizar las métricas de impacto ambiental del proyecto
  para confiar en su compromiso.

  Escenario: E01 - Sección con indicadores numéricos
    Dado que el usuario accede a la sección de impacto de BlueGua
    Cuando el usuario visualiza las métricas ambientales
    Entonces el sistema muestra indicadores numéricos del impacto o ahorro generado
    Y los datos están bien organizados y son fáciles de entender

  Escenario: E02 - Datos claros y actualizados
    Dado que el usuario consulta las métricas de impacto
    Cuando el sistema muestra la información
    Entonces los datos están actualizados y son precisos
    Y se presentan de manera clara y comprensible para el usuario

  Escenario: E03 - Coherencia visual con el diseño
    Dado que el usuario navega por la sección de métricas
    Cuando visualiza los indicadores y gráficos
    Entonces todo mantiene coherencia visual con el diseño de BlueGua
    Y los elementos son consistentes en colores, tipografía y estilo

  Example: Tipos de métricas mostradas
    | Métrica | Tipo | Formato | Actualización |
    | Agua ahorrada | Numérico | Litros/Galones | Mensual |
    | CO2 reducido | Numérico | Toneladas/Kg | Mensual |
    | Proyectos activos | Numérico | Cantidad | Semanal |
    | Comunidad impactada | Numérico | Personas | Trimestral |
