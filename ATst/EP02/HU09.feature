Feature: Visualización de gráficos y métricas del impacto ambiental en BlueGua

  Como usuario,
  deseo ver estadísticas sobre el ahorro de agua
  para confiar en la efectividad del servicio.

  Escenario: E01 - Gráficos muestran datos claros como porcentaje de ahorro y usuarios activos
    Dado que el usuario se encuentra en la sección de métricas o impacto del sitio BlueGua
    Cuando el sistema carga los gráficos de estadísticas
    Entonces los gráficos muestran información clara como porcentaje de ahorro de agua y usuarios activos
    Y los números se presentan de forma comprensible y sin distorsiones además de elementos visuales facilitan la interpretación de los datos

  Escenario: E02 - Diseño responsivo y legible en todo tipo de pantalla
    Dado que el usuario visualiza los gráficos en un dispositivo móvil o computadora
    Cuando los gráficos se ajustan al tamaño y orientación de la pantalla
    Entonces los elementos se mantienen legibles y visualmente equilibrados
    Y el diseño conserva responsividad y claridad sin importar el dispositivo utilizado

  Example: Datos de salida esperados
    | Métrica               | Gráfico visible | Datos claros | Números correctos | Responsivo móvil | Responsivo PC |
    | % de ahorro de agua   | Sí              | Sí           | Sí                 | Sí               | Sí            |
    | Usuarios activos      | Sí              | Sí           | Sí                 | Sí               | Sí            |
