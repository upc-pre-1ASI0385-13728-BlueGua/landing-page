Feature: Paleta cromática coherente

  Como usuario,
  deseo que los colores del sitio reflejen sostenibilidad y claridad visual
  para reconocer la identidad de BlueGua.

  Escenario: E01 - Uso de azul como primario y verde como secundario
    Dado que el usuario navega por cualquier sección del sitio BlueGua
    Cuando el usuario visualiza los elementos de la interfaz
    Entonces el sistema utiliza el azul como color primario principal
    Y el verde como color secundario que refleja sostenibilidad

  Escenario: E02 - Colores de acción coherentes (verde=éxito, rojo=error)
    Dado que el usuario interactúa con botones y alertas
    Cuando el sistema muestra mensajes o acciones
    Entonces los botones de éxito utilizan el color verde
    Y los mensajes de error utilizan el color rojo de manera consistente

  Escenario: E03 - Contraste adecuado y sin confusión visual
    Dado que el usuario accede desde diferentes condiciones de luz
    Cuando visualiza textos y elementos interactivos
    Entonces todos los colores mantienen un contraste adecuado para legibilidad
    Y ningún color genera confusión visual o dificulta la experiencia

  Example: Paleta de colores BlueGua
    | Color | Uso | Código | Significado |
    | Azul | Primario, botones principales | #2E5BFF | Confianza, profesionalismo |
    | Verde | Secundario, éxito, ecológico | #00C389 | Sostenibilidad, confirmación |
    | Rojo | Errores, advertencias críticas | #FF3B30 | Peligro, atención requerida |
    | Gris | Textos, fondos, elementos neutros | #8F9BB3 | Neutralidad, legibilidad |
