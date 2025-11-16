Feature: Registrarse como nuevo usuario

  Como usuario,
  deseo registrarme con mis datos personales y correo electrónico
  para suscribirme al servicio de BlueGua.

  Escenario: E01 - Formulario con nombre, correo y contraseña
    Dado que el usuario accede a la página de registro de BlueGua
    Cuando el usuario completa todos los campos del formulario (nombre, correo y contraseña) sin errores
    Entonces el sistema permite enviar el formulario
    Y el usuario puede proceder con el registro

  Escenario: E02 - Validación de campos obligatorios
    Dado que el usuario accede a la página de registro de BlueGua
    Cuando el usuario deja campos obligatorios vacíos o comete errores en el formulario
    Entonces el sistema muestra mensajes de error claros indicando los problemas
    Y no permite enviar el formulario hasta que se corrijan los errores

  Escenario: E03 - Mensaje de registro exitoso
    Dado que el usuario ha completado correctamente el formulario de registro
    Cuando el usuario envía el formulario con todos los datos válidos
    Entonces el sistema procesa el registro exitosamente
    Y muestra un mensaje de confirmación claro indicando que el registro fue exitoso

  Example: Estructura del formulario de registro
    | Campo         | Obligatorio | Tipo de validación                  |
    | Nombre        | Sí          | Texto, mínimo 2 caracteres         |
    | Correo        | Sí          | Formato email válido               |
    | Contraseña    | Sí          | Mínimo 8 caracteres, seguridad     |
