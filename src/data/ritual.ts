import type { RitualBlock } from '../types'

export const ritualBlocks: RitualBlock[] = [
  {
    id: 'manana',
    title: 'Activación matinal',
    duration: '5 minutos',
    steps: [
      {
        id: 'verdad',
        label: 'Alineamiento de la verdad',
        detail: 'Respira hondo una vez. Declara: "Hoy elijo caminar en la verdad. No voy a negociar principios para agradar a personas. Mi habla será limpia; mis elecciones serán coherentes." Pregunta: ¿Qué necesito evitar hoy para no engañarme?',
      },
      {
        id: 'mente',
        label: 'Blindaje de la mente',
        detail: 'Identifica el primer pensamiento automático del día. Interrumpe con: "Entrego este día y lo que no controlo. No voy a vivir bajo condenación." Pregunta: ¿Esto es un hecho o imaginación? Elige un enfoque simple: "Voy a actuar con paz."',
      },
      {
        id: 'posicionamiento',
        label: 'Posicionamiento espiritual',
        detail: 'Declara: "No voy a reaccionar por impulso. Voy a pausar antes de responder." Anticipa dos ataques comunes de tu día (miedo, irritación, comparación) y coloca la fe delante: "Si viene el miedo, voy a confiar y continuar."',
      },
    ],
  },
  {
    id: 'dia',
    title: 'Mantenimiento durante el día',
    duration: 'Microajustes de 10 a 30 seg',
    steps: [
      {
        id: 'antes-trabajo',
        label: 'Antes de iniciar el trabajo / tareas',
        detail: 'Pregunta: "¿Mi mente está clara?" Acción: 10 segundos de respiración + enfoque.',
      },
      {
        id: 'antes-almuerzo',
        label: 'Antes del almuerzo / mitad del día',
        detail: 'Pregunta: "¿Acumulé irritación?" Acción: soltar en una oración corta.',
      },
      {
        id: 'fin-jornada',
        label: 'Fin de la jornada / transición a casa',
        detail: 'Pregunta: "¿Voy a llevar peso al hogar?" Acción: entregar el día y cambiar el tono interior.',
      },
      {
        id: 'protocolo-rae',
        label: 'Protocolo R-A-E en momentos de tensión',
        detail: 'Reconocer: "Ahora estoy bajo tensión." Alinear: "Tengo paz y claridad disponibles." Elegir: "Voy a responder con prudencia."',
      },
    ],
  },
  {
    id: 'noche',
    title: 'Cierre nocturno',
    duration: '5 a 10 minutos',
    steps: [
      {
        id: 'limpieza',
        label: 'Limpieza emocional',
        detail: 'Reconoce y suelta lo que quedó atrapado: "Hoy sentí ___. Entrego esto a Dios. No voy a dormir alimentando esto." Si hay resentimiento: "Elijo perdonar para no cargar una brecha."',
      },
      {
        id: 'brechas',
        label: 'Cierre de brechas',
        detail: 'Pregunta: ¿Dónde perdí la paz hoy? ¿Dónde hablé sin verdad? ¿Dónde dejé que la fe bajara? Acción: reconoce, pide perdón, corrige el rumbo para el día siguiente.',
      },
      {
        id: 'descanso',
        label: 'Preparación espiritual para el descanso',
        detail: '"Entrego lo que quedó pendiente. Confío el mañana. Descanso sin peso." Finaliza recordando: "En paz me acostaré, y asimismo dormiré" (Salmos 4:8).',
      },
    ],
  },
]
