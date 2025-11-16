Feature: Compartir guías educativas

  Como usuario,
  deseo compartir guías útiles en redes sociales o chats
  para motivar a otros a unirse.

  Escenario: E01 - El usuario presiona el botón "Compartir" y puede elegir una red social o chat
    Dado que el usuario está visualizando una guía educativa
    Cuando el usuario presiona el botón "Compartir"
    Entonces el sistema muestra opciones para elegir red social o aplicación de chat
    Y el usuario puede seleccionar la plataforma deseada para compartir

  Escenario: E02 - El sistema confirma que la guía fue compartida correctamente
    Dado que el usuario ha seleccionado una plataforma para compartir
    Cuando el proceso de compartir se completa exitosamente
    Entonces el sistema muestra un mensaje de confirmación
    Y indica que la guía fue compartida correctamente

  Escenario: E03 - Enlace abre vista previa en red social seleccionada
    Dado que el usuario selecciona una red social específica
    Cuando el sistema genera el enlace compartible
    Entonces se abre la plataforma con una vista previa adecuada de la guía
    Y la información mostrada incluye título, descripción e imagen representativa

  Examples: Plataformas de compartir disponibles
    | Plataforma | Tipo | Vista previa | Configuración |
    | Facebook | Red social | Sí | Automática |
    | WhatsApp | Chat | Sí | Automática |
    | Twitter/X | Red social | Sí | Automática |
    | LinkedIn | Red social | Sí | Automática |
    | Correo | Email | Sí | Formulario prellenado |
