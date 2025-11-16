Feature: Suscribirme a un plan

  Como usuario,
  deseo ver los planes de suscripción y seleccionar uno
  para activar mi cuenta BlueGua.

  Escenario: E01 - Sección "Planes" muestra precios y beneficios
    Dado que el usuario accede a la sección de planes de BlueGua
    Cuando el usuario visualiza la página de suscripciones
    Entonces el sistema muestra los diferentes planes disponibles
    Y cada plan muestra claramente su precio y beneficios incluidos

  Escenario: E02 - Botón "Suscribirme" redirige a pasarela de pago
    Dado que el usuario está en la sección de planes de BlueGua
    Cuando el usuario selecciona un plan y hace clic en "Suscribirme"
    Entonces el sistema redirige al usuario a la pasarela de pago
    Y se mantienen los datos del plan seleccionado

  Escenario: E03 - Confirmación de suscripción exitosa
    Dado que el usuario ha completado el proceso de pago
    Cuando la transacción es procesada exitosamente
    Entonces el sistema activa la suscripción del usuario
    Y muestra una confirmación clara de que la suscripción está activa

  Example: Estructura de planes de suscripción
    | Plan        | Precio | Beneficios principales | Botón acción |
    | Básico      | $X     | Beneficio 1, 2        | Suscribirme  |
    | Premium     | $Y     | Beneficio 1, 2, 3     | Suscribirme  |
    | Empresarial | $Z     | Beneficio 1, 2, 3, 4  | Suscribirme  |
