Feature: Acceder al formulario de contacto

  Como usuario,
  deseo enviar un mensaje al equipo de BlueGua
  para recibir atención o soporte.

  Escenario: E01 - Formulario con campos nombre, correo y mensaje
    Dado que el usuario accede a la sección de contacto de BlueGua
    Cuando el usuario visualiza el formulario de contacto
    Entonces el sistema muestra los campos: nombre, correo y mensaje
    Y todos los campos requeridos están claramente identificados

  Escenario: E02 - Validación de campos vacíos
    Dado que el usuario intenta enviar el formulario de contacto
    Cuando deja campos obligatorios vacíos o incompletos
    Entonces el sistema muestra mensajes de error amigables
    Y indica específicamente qué campos requieren atención

  Escenario: E03 - Confirmación "Tu mensaje ha sido enviado correctamente"
    Dado que el usuario ha completado correctamente todos los campos del formulario
    Cuando el usuario envía el formulario de contacto
    Entonces el sistema procesa el mensaje exitosamente
    Y muestra la confirmación "Tu mensaje ha sido enviado correctamente"

  Example: Campos del formulario de contacto
    | Campo         | Obligatorio | Tipo de validación          |
    | Nombre        | Sí          | Texto, mínimo 2 caracteres |
    | Correo        | Sí          | Formato email válido       |
    | Mensaje       | Sí          | Texto, mínimo 10 caracteres|
