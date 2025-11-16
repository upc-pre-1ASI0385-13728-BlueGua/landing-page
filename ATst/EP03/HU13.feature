Feature: Recuperar mi contraseña

  Como usuario,
  deseo recuperar mi contraseña olvidada
  para poder acceder nuevamente a mi cuenta.

  Escenario: E01 - Enlace "¿Olvidaste tu contraseña?" redirige al formulario
    Dado que el usuario accede a la página de inicio de sesión de BlueGua
    Cuando el usuario hace clic en el enlace "¿Olvidaste tu contraseña?"
    Entonces el sistema redirige al usuario al formulario de recuperación de contraseña
    Y muestra los campos necesarios para solicitar el restablecimiento

  Escenario: E02 - Se envía correo con enlace de restablecimiento
    Dado que el usuario está en el formulario de recuperación de contraseña
    Cuando el usuario ingresa su correo electrónico registrado
    Y hace clic en el botón de enviar instrucciones
    Entonces el sistema procesa la solicitud correctamente
    Y envía un correo electrónico con un enlace de restablecimiento
    Y muestra un mensaje confirmando que se envió el enlace

  Escenario: E03 - Confirmación de envío exitoso
    Dado que el usuario ha solicitado recuperar su contraseña
    Cuando el sistema procesa correctamente la solicitud
    Entonces se muestra un mensaje de confirmación claro al usuario
    Y se indica que debe revisar su correo electrónico para seguir las instrucciones

  Example: Flujo de recuperación de contraseña
    | Paso    | Acción                                  | Resultado esperado        |
    | 1       | Clic en "¿Olvidaste tu contraseña?"     | Redirige a formulario     |
    | 2       | Ingresar email válido                   | Sistema acepta el correo  |
    | 3       | Enviar solicitud                        | Correo enviado con enlace |
    | 4       | Confirmación                            | Mensaje de éxito mostrado |
