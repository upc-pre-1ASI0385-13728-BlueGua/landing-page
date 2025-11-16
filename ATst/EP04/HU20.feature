Feature: Ver testimonios de usuarios

  Como usuario,
  deseo ver experiencias o comentarios de otros usuarios
  para sentir confianza en la plataforma.

  Escenario: E01 - Sección "Comunidad" con testimonios
    Dado que el usuario accede a la sección de comunidad de BlueGua
    Cuando el usuario visualiza la página de testimonios
    Entonces el sistema muestra experiencias de usuarios reales o simulados
    Y cada testimonio incluye foto y nombre claramente visibles

  Escenario: E02 - Diseño responsivo y coherente
    Dado que el usuario accede a los testimonios desde diferentes dispositivos
    Cuando el usuario visualiza la sección en móvil, tablet o desktop
    Entonces el diseño se adapta correctamente a cada tamaño de pantalla
    Y todos los elementos se mantienen claros y legibles

  Escenario: E03 - Animación suave al deslizar
    Dado que el usuario está en la sección de testimonios
    Cuando el usuario desliza o navega entre los testimonios
    Entonces el sistema reproduce animaciones suaves y fluidas
    Y la transición entre testimonios es natural y sin saltos

  Example: Elementos de cada testimonio
    | Elemento        | Requerido | Descripción |
    | Foto de perfil  | Sí        | Imagen clara y nítida |
    | Nombre usuario  | Sí        | Nombre completo o alias |
    | Testimonio      | Sí        | Texto legible y auténtico |
    | Valoración      | Opcional  | Estrellas o puntuación |
