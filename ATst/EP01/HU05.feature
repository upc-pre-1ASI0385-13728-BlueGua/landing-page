Feature: Visualización del equipo de trabajo de BlueGua

  Como usuario,
  deseo ver información del equipo
  para confiar en las personas detrás del proyecto.

  Escenario: E01 - Visualizar fotos, nombres y roles en la sección “Equipo”
    Dado que el usuario se encuentra en el sitio BlueGua
    Cuando el usuario accede a la sección “Equipo”
    Entonces el sistema muestra las fotos, nombres y roles de los integrantes del equipo
    Y las imágenes se muestran con buena calidad y correctamente alineadas además que cada miembro del equipo es identificable de manera clara

  Escenario: E02 - Coherencia visual con el estilo general del sitio
    Dado que el usuario visualiza la sección “Equipo”
    Cuando el sistema carga los elementos gráficos y de texto del equipo
    Entonces la sección mantiene el mismo estilo de colores, tipografía y diseño del sitio BlueGua
    Y todos los elementos se ven consistentes en dispositivos móviles y computadoras

  Example: Datos de salida esperados
    | Miembro del equipo | Foto visible | Rol visible | Alineación correcta | Estilo consistente |
    | Miembro 1          | Sí           | Sí          | Sí                  | Sí                 |
    | Miembro 2          | Sí           | Sí          | Sí                  | Sí                 |
    | Miembro 3          | Sí           | Sí          | Sí                  | Sí                 |
    | Miembro 4          | Sí           | Sí          | Sí                  | Sí                 |
    | Miembro 5          | Sí           | Sí          | Sí                  | Sí                 |
