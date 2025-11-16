Feature: Ver confirmación de pago

  Como usuario,
  deseo recibir una confirmación visual del pago realizado
  para saber que mi suscripción fue procesada correctamente.

  Escenario: E01 - Pantalla de confirmación tras el pago
    Dado que el usuario ha completado el proceso de pago exitosamente
    Cuando el sistema procesa la transacción
    Entonces se muestra una pantalla de confirmación clara
    Y se visualiza el plan seleccionado y los detalles del pago

  Escenario: E02 - Correo automático con detalles del plan
    Dado que el pago ha sido procesado correctamente
    Cuando el sistema finaliza la transacción
    Entonces se envía automáticamente un correo de confirmación
    Y el correo incluye todos los detalles del plan contratado

  Escenario: E03 - Confirmación visual inmediata en la aplicación
    Dado que el usuario permanece en la plataforma BlueGua
    Cuando el pago se procesa exitosamente
    Entonces el usuario recibe confirmación visual inmediata
    Y puede acceder inmediatamente a los beneficios de su plan

  Example: Información incluida en la confirmación
    | Elemento | Pantalla | Correo |
    | Plan contratado | Sí | Sí |
    | Monto pagado | Sí | Sí |
    | Fecha de vencimiento | Sí | Sí |
    | Número de transacción | Sí | Sí |
    | Beneficios del plan | Sí | Sí |
