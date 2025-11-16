Feature: Iniciar sesión

  Como usuario,
  deseo iniciar sesión con mi correo y contraseña
  para acceder a mi cuenta personal.

  Escenario: E01 - El usuario ingresa credenciales válidas y accede correctamente
    Dado que el usuario accede a la página de inicio de sesión de BlueGua
    Cuando el usuario ingresa su correo y contraseña válidos luego hace clic en el botón de iniciar sesión
    Entonces el sistema autentica las credenciales correctamente
    Y redirige al usuario a su cuenta personal

  Escenario: E02 - Si los datos son incorrectos, se muestra un mensaje de error
    Dado que el usuario accede a la página de inicio de sesión de BlueGua
    Cuando el usuario ingresa credenciales incorrectas (correo o contraseña inválidos) y hace clic en el botón de iniciar sesión
    Entonces el sistema detecta las credenciales incorrectas
    Y muestra un mensaje de error claro indicando que los datos son inválidos

  Escenario: E03 - El usuario puede mantener la sesión activa
    Dado que el usuario accede a la página de inicio de sesión de BlueGua
    Cuando el usuario selecciona la opción "Mantener sesión activa" y ingresa sus credenciales válidas
    Entonces el sistema inicia sesión correctamente
    Y mantiene la sesión activa por un período extendido de tiempo

  Example: Campos del formulario de inicio de sesión
    | Campo         | Obligatorio | Tipo de validación        |
    | Correo        | Sí          | Formato email válido     |
    | Contraseña    | Sí          | Coincide con cuenta      |
    | Recordarme    | No          | Opción checkbox          |
