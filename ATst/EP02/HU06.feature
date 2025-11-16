Feature: Navegación entre secciones principales del sitio BlueGua

  Como usuario,
  deseo navegar entre las secciones
  para conocer los servicios y beneficios.

  Escenario: E01 - Menú principal con secciones Inicio, Planes, Beneficios, Comunidad y Contacto
    Dado que el usuario se encuentra en el sitio BlueGua
    Cuando el usuario interactúa con el menú principal
    Entonces el sistema muestra las opciones Inicio, Planes, Beneficios, Comunidad y Contacto
    Y cada botón del menú lleva correctamente a la sección correspondiente tambien que la navegación es fluida y fácil de entender

  Escenario: E02 - Funcionamiento adecuado del menú en móviles mediante sidebar
    Dado que el usuario navega desde un dispositivo móvil
    Cuando el usuario abre el menú en formato sidebar
    Entonces el menú muestra las mismas secciones principales (Inicio, Planes, Beneficios, Comunidad y Contacto)
    Y cada opción funciona correctamente al ser seleccionada además la experiencia de navegación se adapta correctamente al tamaño del dispositivo

  Example: Datos de salida esperados
    | Sección     | Visible en menú | Navega correctamente | Funciona en móvil | Sidebar móvil |
    | Inicio      | Sí              | Sí                   | Sí                | Sí            |
    | Planes      | Sí              | Sí                   | Sí                | Sí            |
    | Beneficios  | Sí              | Sí                   | Sí                | Sí            |
    | Comunidad   | Sí              | Sí                   | Sí                | Sí            |
    | Contacto    | Sí              | Sí                   | Sí                | Sí            |
