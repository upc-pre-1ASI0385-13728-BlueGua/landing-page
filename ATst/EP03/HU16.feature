Feature: Cancelar mi suscripción

  Como usuario,
  deseo cancelar mi suscripción
  para detener futuros cobros.

  Escenario: E01 - Botón "Cancelar suscripción" en la sección cuenta
    Dado que el usuario ha iniciado sesión en su cuenta BlueGua
    Cuando el usuario accede a la sección de estado de suscripción
    Entonces el sistema muestra el botón "Cancelar suscripción"
    Y el usuario puede localizarlo fácilmente

  Escenario: E02 - Confirmación antes de ejecutar la acción
    Dado que el usuario hace clic en el botón "Cancelar suscripción"
    Cuando el sistema recibe la solicitud de cancelación
    Entonces muestra un mensaje de confirmación antes de proceder
    Y solicita al usuario que confirme su decisión

  Escenario: E03 - Mensaje de confirmación de cancelación exitosa
    Dado que el usuario ha confirmado la cancelación de su suscripción
    Cuando el sistema procesa la cancelación exitosamente
    Entonces se detienen los futuros cobros automáticos
    Y se muestra un mensaje claro confirmando la cancelación

  Example: Flujo de cancelación
    | Paso  | Acción                          | Resultado |
    | 1     | Acceder a estado de suscripción | Ver botón cancelar |
    | 2     | Clic en "Cancelar suscripción"  | Modal de confirmación |
    | 3     | Confirmar cancelación           | Procesar solicitud |
    | 4     | Cancelación exitosa             | Mensaje de confirmación |
