Feature: Ver ranking comunitario

  Como usuario,
  deseo ver un ranking de usuarios o negocios con mayor ahorro
  para motivarme.

  Escenario: E01 - El usuario accede a la sección "Ranking" y visualiza el top de usuarios
    Dado que el usuario accede a la sección "Ranking" de BlueGua
    Cuando el sistema carga la información
    Entonces se visualiza una tabla o gráfico con el top de usuarios con mayor ahorro
    Y cada posición muestra nombre, métrica de ahorro y categoría

  Escenario: E02 - La tabla o gráfico se actualiza semanalmente
    Dado que es el inicio de una nueva semana
    Cuando el sistema procesa los datos de ahorro
    Entonces el ranking se actualiza automáticamente con los nuevos resultados
    Y los usuarios pueden ver su progreso semanal

  Escenario: E03 - Los datos del ranking se pueden consultar sin conexión
    Dado que el usuario no tiene conexión a internet
    Cuando el usuario accede a la sección de ranking
    Entonces puede consultar la última versión descargada del ranking
    Y los datos se actualizan automáticamente al recuperar la conexión

  Examples: Estructura del ranking comunitario
    | Posición | Información mostrada | Métrica | Actualización |
    | 1-10 | Nombre, avatar, ahorro total | Litros/galones | Semanal |
    | Categorías | Hogar, Negocio, Comunidad | Tipo usuario | Automática |
    | Progreso | Flecha arriba/abajo | Cambio vs semana anterior | Calculado |
