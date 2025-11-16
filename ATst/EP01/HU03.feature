Feature: Visualización de los beneficios del servicio BlueGua

  Como usuario,
  deseo conocer los beneficios del servicio
  para entender qué obtengo con mi suscripción.

  Escenario: E01 - Visualizar beneficios del servicio en la sección “Beneficios”
    Dado que el usuario se encuentra en la página principal del sitio BlueGua
    Cuando el usuario accede a la sección “Beneficios”
    Entonces el sistema muestra al menos tres ventajas del servicio
    Y cada beneficio incluye un ícono o gráfico representativo acompañado de textos explicativos claros y fáciles de entender

  Escenario: E02 - Diseño visual consistente con la marca BlueGua
    Dado que el usuario visualiza los beneficios del servicio en la sección correspondiente
    Cuando el sistema presenta los elementos visuales e informativos
    Entonces el diseño mantiene coherencia con la identidad visual de BlueGua
    Y los textos se leen correctamente tanto en dispositivos móviles como en computadoras

  Example: Datos de salida esperados
    | Beneficio                            | Ícono/Gráfico | Texto claro | Diseño consistente |
    | Ahorro de agua y costos              | Sí            | Sí          | Sí                 |
    | Monitoreo fácil desde cualquier lugar| Sí            | Sí          | Sí                 |
    | Impacto ambiental positivo           | Sí            | Sí          | Sí                 |
