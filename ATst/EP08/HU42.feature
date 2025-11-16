Feature: Recibir recomendaciones personalizadas

  Como usuario,
  deseo obtener consejos según mis hábitos
  para mejorar mi eficiencia en el consumo de agua.

  Escenario: E01 - El panel muestra consejos basados en los hábitos registrados del usuario
    Dado que el usuario ha registrado sus hábitos de consumo
    Cuando el usuario accede a su panel principal
    Entonces el sistema muestra recomendaciones personalizadas
    Y cada consejo está basado en sus patrones de uso específicos

  Escenario: E02 - Las recomendaciones cambian automáticamente al completar nuevos retos o guías
    Dado que el usuario completa un reto o guía
    Cuando el sistema actualiza el perfil del usuario
    Entonces las recomendaciones se ajustan automáticamente
    Y se generan nuevos consejos basados en el progreso reciente

  Escenario: E03 - El usuario puede marcar una recomendación como "vista"
    Dado que el usuario ha leído una recomendación
    Cuando el usuario hace clic en la opción "marcar como vista"
    Entonces la recomendación cambia de estado a "vista"
    Y el sistema registra esta interacción para futuras personalizaciones

  Examples: Tipos de recomendaciones personalizadas
    | Hábito detectado | Recomendación | Prioridad | Actualización |
    | Alto consumo en ducha | Reducir tiempo de ducha | Alta | Tras registro de consumo |
    | Uso ineficiente en jardín | Sistema de riego por goteo | Media | Tras completar guía jardinería |
    | Fugas detectadas | Reparación preventiva | Crítica | Inmediata tras detección |
    | Buenas prácticas | Mantener hábitos | Baja | Semanal |
