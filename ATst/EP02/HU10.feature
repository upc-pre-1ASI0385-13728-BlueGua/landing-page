Feature: Visualización de logotipos y enlaces a redes sociales en el footer

  Como usuario,
  deseo ver logotipos institucionales y enlaces a redes sociales
  para identificar la marca y contactarlos fácilmente.

  Escenario: E01 - El footer incluye el logo de BlueGua y enlaces a redes sociales
    Dado que el usuario se encuentra navegando en el sitio BlueGua
    Cuando el usuario llega al footer de la página
    Entonces el sistema muestra el logotipo institucional de BlueGua
    Y se muestran los íconos que enlazan a sus redes sociales con íconos son visibles y fáciles de identificar

  Escenario: E02 - Los enlaces a redes sociales abren en una nueva pestaña
    Dado que los íconos de redes sociales están visibles en el footer
    Cuando el usuario hace clic en cualquiera de ellos
    Entonces el enlace se abre correctamente en una nueva pestaña del navegador
    Y el sitio original permanece abierto sin interrupciones

  Example: Datos de salida esperados
    | Elemento          | Visible | Enlace funcional | Abre en nueva pestaña |
    | Logo BlueGua      | Sí      | N/A              | N/A                   |
    | Facebook          | Sí      | Sí               | Sí                    |
    | Instagram         | Sí      | Sí               | Sí                    |
    | TikTok            | Sí      | Sí               | Sí                    |
    | LinkedIn          | Sí      | Sí               | Sí                    |
