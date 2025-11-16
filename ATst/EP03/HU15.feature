Feature: Ver mi estado de suscripción

  Como usuario,
  deseo ver el estado de mi suscripción (activa, vencida o pendiente)
  para mantenerme informado.

  Escenario: E01 - Se muestra estado del plan en la cuenta
    Dado que el usuario ha iniciado sesión en su cuenta BlueGua
    Cuando el usuario accede a la sección de estado de suscripción
    Entonces el sistema muestra claramente el plan actual del usuario
    Y muestra la fecha de vencimiento de la suscripción además del estado actual (activa, vencida o pendiente)

  Escenario: E02 - Si está por vencer, aparece aviso de renovación
    Dado que el usuario tiene una suscripción activa
    Cuando la fecha de vencimiento está próxima (ej: 7 días o menos)
    Entonces el sistema muestra un aviso claro de renovación
    Y notifica al usuario que su plan está por vencer

  Escenario: E03 - La información se actualiza sin errores
    Dado que el usuario consulta su estado de suscripción
    Cuando ocurren cambios en el estado o fecha de vencimiento
    Entonces el sistema actualiza la información automáticamente
    Y muestra los datos correctos y actualizados sin errores

  Example: Estados de suscripción posibles
    | Estado  | Descripción | Acción requerida |
    | Activa  | Suscripción vigente | Ninguna |
    | Vencida | Suscripción expirada | Renovar |
    | Pendiente | Pago en proceso | Esperar confirmación |
