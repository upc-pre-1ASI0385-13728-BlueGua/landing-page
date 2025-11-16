Feature: Visualización de los valores del proyecto BlueGua

  Como usuario,
  deseo leer los valores del proyecto (Responsabilidad, Inclusión, Colaboración, Sostenibilidad, Simplicidad)
  para comprender su propósito social.

  Escenario: E01 - Visualizar los valores principales en la sección principal
    Dado que el usuario se encuentra en la página principal del sitio BlueGua
    Cuando el usuario accede a la sección donde se muestran los valores del proyecto
    Entonces el sistema muestra los valores Responsabilidad, Inclusión, Colaboración, Sostenibilidad y Simplicidad
    Y los valores son visibles y legibles dentro de la sección principal

  Escenario: E02 - Cada valor tiene ícono y descripción breve
    Dado que el usuario visualiza los valores del proyecto BlueGua
    Cuando el sistema carga los elementos gráficos correspondientes
    Entonces cada valor se representa con un ícono distintivo y una breve descripción
    Y el contenido mantiene un diseño ordenado y consistente con la identidad visual de BlueGua

  Example: Datos de salida esperados
    | Valor             | Elemento gráfico | Descripción breve visible | Diseño consistente |
    | Responsabilidad    | Ícono visible    | Sí                         | Sí                 |
    | Inclusión          | Ícono visible    | Sí                         | Sí                 |
    | Colaboración       | Ícono visible    | Sí                         | Sí                 |
    | Sostenibilidad     | Ícono visible    | Sí                         | Sí                 |
    | Simplicidad        | Ícono visible    | Sí                         | Sí                 |
