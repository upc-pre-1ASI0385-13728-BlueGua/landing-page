Feature: Leer políticas de privacidad y términos

  Como usuario,
  deseo leer las políticas de privacidad y términos del servicio
  para entender las condiciones antes de suscribirme.

  Escenario: E01 - Enlace visible en el footer
    Dado que el usuario navega por el sitio web de BlueGua
    Cuando el usuario revisa el footer de la página
    Entonces el sistema muestra los enlaces a "Términos de servicio" y "Política de privacidad"
    Y los enlaces son claramente visibles y accesibles

  Escenario: E02 - Documento legible con formato limpio
    Dado que el usuario hace clic en los enlaces de términos o políticas
    Cuando se abre el documento correspondiente
    Entonces el texto es legible y no se corta en la pantalla
    Y el formato es limpio y organizado para facilitar la lectura

  Escenario: E03 - Cerrar o regresar sin perder la navegación
    Dado que el usuario está leyendo los términos o políticas
    Cuando el usuario decide cerrar el documento o regresar
    Entonces puede hacerlo sin perder la navegación anterior
    Y el sistema mantiene su posición original en el sitio

  Example: Documentos legales disponibles
    | Documento | Enlace visible | Formato | Accesibilidad |
    | Términos de servicio | Sí | PDF/HTML | Fácil |
    | Política de privacidad | Sí | PDF/HTML | Fácil |
    | Cookies | Sí | PDF/HTML | Fácil |
    | Condiciones de uso | Sí | PDF/HTML | Fácil |
