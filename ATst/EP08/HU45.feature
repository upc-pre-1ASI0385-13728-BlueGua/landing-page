Feature: Ver impacto ambiental equivalente

  Como usuario,
  deseo visualizar mi ahorro traducido en ejemplos simples
  para entender mejor mi contribución ambiental.

  Escenario: E01 - El usuario visualiza su ahorro en equivalencias
    Dado que el usuario accede a su panel de impacto ambiental
    Cuando el sistema procesa sus métricas de ahorro
    Entonces muestra el ahorro convertido en equivalencias comprensibles
    Y cada equivalencia representa un concepto tangible y familiar

  Escenario: E02 - Se muestran íconos o gráficos ilustrativos de las equivalencias
    Dado que el usuario está viendo las equivalencias de ahorro
    Cuando el sistema presenta la información
    Entonces se incluyen íconos o gráficos simples y educativos
    Y la iconografía ayuda a comprender rápidamente el impacto

  Escenario: E03 - Las equivalencias se actualizan automáticamente con nuevos datos
    Dado que el usuario registra nuevo ahorro
    Cuando el sistema recibe los datos actualizados
    Entonces las equivalencias se recalculan automáticamente
    Y los cambios se reflejan inmediatamente en la visualización

  Examples: Equivalencias de impacto ambiental
    | Ahorro en litros | Equivalencia | Icono |
    | 1,000 litros | "Agua para 1 persona por 30 días" | 👤 + 💧 |
    | 5,000 litros | "Agua para regar 10 árboles por mes" | 🌳 + 💦 |
    | 10,000 litros | "Agua para llenar 2 piscinas infantiles" | 🏊 + 🔵 |
    | 50,000 litros | "Agua que consume una familia en 2 meses" | 👨‍👩‍👧‍👦 + 🏠 |
