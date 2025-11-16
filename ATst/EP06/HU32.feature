Feature: Guardar mis guías favoritas

  Como usuario,
  deseo guardar mis guías favoritas
  para consultarlas fácilmente sin conexión.

  Escenario: E01 - El usuario presiona el botón "Guardar" en una guía
    Dado que el usuario está visualizando una guía práctica
    Cuando el usuario presiona el botón "Guardar" en la guía
    Entonces la guía se añade a la lista "Mis recursos guardados"
    Y el sistema confirma que la guía ha sido guardada exitosamente

  Escenario: E02 - Al volver, el sistema sincroniza las guías guardadas
    Dado que el usuario ha guardado guías en su perfil
    Cuando el usuario vuelve a acceder a su cuenta
    Entonces el sistema sincroniza automáticamente las guías guardadas
    Y todas las guías permanecen disponibles en "Mis recursos guardados"

  Escenario: E03 - Acceso a "Mis recursos guardados" sin conexión
    Dado que el usuario ha guardado guías previamente
    Cuando el usuario no tiene conexión a internet
    Entonces puede acceder a la sección "Mis recursos guardados"
    Y consultar todas sus guías favoritas sin necesidad de conexión

  Example: Estados del botón guardar
    | Estado | Icono | Color | Comportamiento |
    | No guardado | ♡ | Gris | Al hacer clic, guarda |
    | Guardado | ❤️ | Rojo | Al hacer clic, elimina |
    | Sincronizando | ⏳ | Azul | Procesando acción |
