Feature: Jerarquía tipográfica legible

  Como usuario,
  deseo distinguir fácilmente los títulos, subtítulos y párrafos
  para comprender mejor el contenido.

  Escenario: E01 - Uso coherente de jerarquías H1–H3 y cuerpo de texto
    Dado que el usuario navega por cualquier sección del sitio BlueGua
    Cuando el usuario visualiza el contenido textual
    Entonces el sistema utiliza una jerarquía clara de H1, H2, H3 y párrafos
    Y los tamaños son distintos pero coherentes entre secciones

  Escenario: E02 - Tipografía Sans-Serif moderna y legible
    Dado que el usuario lee cualquier texto en la plataforma
    Cuando el sistema muestra contenido textual
    Entonces la tipografía utilizada es Sans-Serif moderna
    Y todos los textos son claros y fáciles de leer

  Escenario: E03 - Sin errores de alineación o espaciado
    Dado que el usuario visualiza cualquier página del sitio
    Cuando examina la disposición del texto
    Entonces no hay errores de alineación o desbordamiento
    Y los espaciados entre elementos son consistentes y armónicos

  Example: Especificaciones tipográficas
    | Elemento | Tamaño | Peso | Espaciado |
    | H1       | 32px   | Bold | 1.2       |
    | H2       | 24px   | Semibold | 1.3    |
    | H3       | 20px   | Medium | 1.4     |
    | Párrafo  | 16px   | Regular | 1.5    |
    | Small    | 14px   | Regular | 1.4    |
