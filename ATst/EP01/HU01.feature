Feature: Visualización de la información del producto BlueGua

  Como usuario,
  Deseo ver la misión, visión y propósito de BlueGua
  Para entender cómo contribuye al ahorro y sostenibilidad del agua.

  Escenario: E01 - Visualizar misión, visión y propósito en la sección "Sobre BlueGua"
    Dado que el usuario se encuentra en la página principal del sitio BlueGua
    Cuando el usuario accede a la sección "Sobre BlueGua"
    Entonces el sistema muestra el texto de la misión, visión y propósito de BlueGua
    Y el texto se visualiza completo, sin errores ni recortes

  Escenario: E02 - Adaptabilidad del texto en distintos dispositivos
    Dado que el usuario visualiza la sección "Sobre BlueGua" en su dispositivo
    Cuando el usuario accede desde un celular o una computadora
    Entonces el texto de la misión, visión y propósito se adapta correctamente al tamaño de la pantalla
    Y el diseño se muestra limpio y agradable a la vista

  Example: Datos de salida esperados
    | Elemento                  | Resultado esperado                              |
    | Misión                    | Texto visible y completo                        |
    | Visión                    | Texto visible y completo                        |
    | Propósito                 | Texto visible y completo                        |
    | Diseño y legibilidad      | Adaptado y agradable en celular y escritorio    |
