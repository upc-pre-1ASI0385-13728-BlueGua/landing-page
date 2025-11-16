Feature: Comparar mi consumo con promedio comunitario

  Como usuario,
  deseo comparar mis métricas con el promedio de mi comunidad
  para saber si estoy mejorando.

  Escenario: E01 - El usuario ve un gráfico comparativo "Mi consumo vs comunidad"
    Dado que el usuario accede a la sección de comparativas
    Cuando el sistema carga los datos
    Entonces se muestra un gráfico comparativo claro de "Mi consumo vs comunidad"
    Y las diferencias son visualmente evidentes

  Escenario: E02 - El sistema muestra un texto interpretativo según sea el caso
    Dado que el usuario está viendo la comparativa
    Cuando el sistema analiza los datos
    Entonces muestra un texto interpretativo con mensaje positivo o negativo
    Y el mensaje es constructivo y motivador independientemente del resultado

  Escenario: E03 - La comparación se puede realizar por diferentes categorías
    Dado que el usuario quiere comparar aspectos específicos
    Cuando selecciona diferentes categorías (hogar, riego, consumo general)
    Entonces el gráfico se actualiza con la comparativa de esa categoría
    Y el texto interpretativo se ajusta a la categoría seleccionada

  Example: Mensajes interpretativos según resultados
    | Resultado comparación | Mensaje positivo | Mensaje de mejora |
    | Consumo menor 20%+ | "¡Excelente! Eres referente en la comunidad" | "Mantén tus buenos hábitos" |
    | Consumo similar | "Vas por buen camino" | "Pequeños ajustes te harán destacar" |
    | Consumo mayor 10% | "Tienes potencial de mejora" | "Te sugerimos estas guías prácticas" |
    | Consumo mayor 30%+ | "Juntos podemos mejorar" | "Comienza con estos cambios simples" |
