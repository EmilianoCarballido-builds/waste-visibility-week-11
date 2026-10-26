# PERSONA — independent synthetic test
Emiliano Carballido · Week 11 · ADVERSARY / OPERATOR

## Method and limits
A fresh subagent context (no inherited conversation) received only persona instructions and ordered screenshots of deployment 1: full app, then log. It viewed the screenshots and narrated in Spanish. This fulfills a fresh synthetic-context review; it is not a real-user interview or a claim that the persona clicked the app. The main agent separately executed browser interactions. The source Blueprint reports no completed household pilot.

Persona: Doña Mari, 54, sells food in Mexico City, uses WhatsApp, distrusts apps, reads slowly and silently quits when confused. This is an invented persona based on the assignment example and the Blueprint target, not independently verified user research.

Task: understand tank status, choose safe action, record manual and digital observations, recognize stopping, withdraw/delete.

## Findings and change
Worst blockage: “Referencia segura (%)” did not tell Mari which value to use; she would abandon rather than guess. Replaced with **“Nivel comprobado por una persona capacitada (%)”**, plus a prominent explanation not to copy the sensor, to use the independent simulated reference in this rehearsal, and to pause/ask for help if the safe reference is absent in the field.

Other observed confusions: the six-hour estimate looked certain; pausing criteria were unclear; the sequence for manual/digital entries and “support” needed explanation. Added “Puede equivocarse: no es una cuenta regresiva,” plain stopping criteria, definitions of the two methods and support time, and a warning against treating duplicate entries as independent trials.

Retest: the same synthetic reviewer viewed the revised screenshot. It reported the worst source confusion was reduced and the route to pause was understandable. Remaining limits: terminology such as “acción útil” and “soporte,” lengthy small text, and no proof of successful clicking. These remain future usability work; no human validation is claimed.

The persona initially said “35” when the screenshot's independent reference was 31%; this was a synthetic misreading. Its original narration is preserved without presenting that number as actual application output.

## Verbatim first pass
# Prueba sintética de primera impresión

Persona inventada: Doña Mari, 54 años, vendedora de comida en Ciudad de México; usa WhatsApp, desconfía de aplicaciones, lee despacio y abandona sin avisar cuando se confunde. No es entrevista ni validación humana. Revisión independiente limitada a lo visible en `v1-full.png`, seguido de `v1-log.png`. No se hicieron clics ni se comprobaron interacciones.

## Narración literal de la persona sintética

«Veo 32%. Todavía queda agua, pero no sé si eso alcanza para terminar mi venta. A un lado dice cero en seis horas: me quedo con que se va a acabar en seis horas. Luego alcanzo a leer que es simulación. Entonces no es mi tinaco; bueno, es para practicar.

»Dice que no hay aviso de nivel bajo. ¿Entonces espero? Me pide tres condiciones y una referencia segura. Yo no sé sacar ese porcentaje. No me voy a subir al tinaco. Si necesito que venga alguien, aquí ya no sé cómo seguir.

»En la hoja dice Manual. Supongo que aquí anoto lo que vi yo, pero “Referencia segura (%)” no sé qué poner: ¿el 32 que vi arriba o el 35 de referencia? No quiero inventarlo. También dice minutos de soporte: ¿cuánto sostuve algo, cuánto tardaron en ayudarme? No sé. Aquí dejaría la hoja sin guardar.

»Para lo digital veo que abajo hay un renglón que dice Digital y arriba una lista de Método. Creo que tendría que cambiar esa lista, pero no veo una instrucción de guardar primero una cosa y luego la otra. No sé si me va a borrar lo manual.

»Veo Pausar piloto, pero no me queda claro en qué momento lo debo usar. ¿Cuando baje el agua o cuando no pueda comprobarla? Y abajo encuentro Retirarme y borrar registros; eso sí me da una salida. Como ya me atoré con el porcentaje, preferiría retirarme. No puedo saber por la imagen si ya borró nada.»

## Confusiones observadas y ajustes mínimos

1. **Alta — peor bloqueo: “Referencia segura (%)” no identifica la fuente ni qué hacer si no existe.** La persona no puede completar siquiera el registro manual sin adivinar entre lectura y referencia; abandona. Cambiar a: **“Nivel comprobado por una persona capacitada (%)”** y añadir **“Si no tienes este dato, no lo inventes: pausa el ensayo y pide ayuda. No subas al tanque.”**
2. **Alta — la proyección “≈ 0% en 6 horas” se interpreta como hora segura de agotamiento.** Las advertencias pequeñas no compiten con la cifra. Añadir junto al resultado: **“Ejemplo simulado: no indica cuándo se acabará tu agua.”**
3. **Alta — pausar está disponible, pero no aparece una regla breve en lenguaje cotidiano que resuelva la duda.** Junto al botón: **“Pausa si no puedes comprobar la lectura de forma segura o no tienes una acción posible.”** No se evaluó lo que sucede al pulsarlo.
4. **Media — el formulario no explica cómo obtener la comparación manual/digital.** Antes de los campos: **“Guarda una observación con Método: Manual. Después elige Digital y guarda otra observación.”** Solo es una propuesta de instrucción; las capturas no permiten verificar si el guardado funciona así.
5. **Media — “Minutos de soporte” y “acción útil” requieren interpretación.** Cambiar a **“Minutos de ayuda que necesitaste”** y **“¿El aviso te ayudó a hacer algo? Por ejemplo, pedir una revisión segura.”**

La salida “Retirarme y borrar registros” es visible y comprensible para esta persona; su resultado y la confirmación de borrado no pueden juzgarse en capturas estáticas. La tarea de registrar ambas observaciones quedó bloqueada en esta simulación por el campo de referencia; no se afirma haberla ejecutado.

## Verbatim retest

# Revisión sintética después del ajuste

Misma persona inventada: Doña Mari, 54, vendedora de comida en Ciudad de México. Se inspeccionó únicamente `v2-full.png`, sin código ni clics. No es una entrevista ni validación humana.

## Narración literal

«Ahora sí veo que dice que no copie el porcentaje del sensor. Entonces el 32 no va en esa casilla. Para este ensayo tengo que buscar la referencia de arriba. Y si fuera de verdad y no tuviera el dato comprobado, dice que pause y pida ayuda, que no suba al tanque. Eso ya me deja más tranquila: puedo parar sin inventar el número.

»También dice que lo de seis horas puede equivocarse y no es una cuenta regresiva. Ya no lo tomaría como una hora exacta para esperar.

»Veo más explicación para comparar lo manual y lo digital, pero la letra está muy chiquita en esta imagen. Me cuesta seguir tanta explicación antes de llenar. Todavía no sé bien qué son minutos de soporte ni qué cuentan como acción útil. Si estoy ocupada vendiendo, esas dos cosas todavía me pueden hacer dejarlo para después.

»La salida de retirarme y borrar sigue estando abajo. Entiendo lo que promete, aunque aquí no puedo ver si ya borró nada.»

## Resultado y límites

La peor confusión se reduce: el aviso explícito de no copiar el sensor, la fuente de referencia y el nombre “Nivel comprobado por una persona capacitada (%)” distinguen las dos lecturas y ofrecen una salida segura cuando falta el dato. La comprensión narrada no demuestra que una persona real encuentre, transcriba o use correctamente la referencia.

Persisten términos poco cotidianos (“Minutos de soporte”, “acción útil”) y carga de lectura. La explicación nueva es pequeña en esta captura completa; esto limita la evaluación de legibilidad y no demuestra cómo se verá a tamaño normal o en teléfono. La instrucción sobre proyección es más visible, pero su comprensión requiere prueba humana.

No se guardaron observaciones manuales ni digitales, ni se probó pausar, retirar o borrar. No hay evidencia de éxito operativo de esas acciones.

Corrección del primer pase: el “35” de la narración original fue una percepción equivocada al leer la captura, no el dato real de la interfaz. El dato de referencia mostrado era 31%, según la aclaración recibida para este retest. Se conserva la narración anterior como registro literal de esa confusión, sin presentar 35% como dato de la aplicación.
