export interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: number
}

export const SAMPLE_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "¿Cuál es el objetivo principal de la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita?",
    options: [
      "Proteger el sistema financiero y la economía nacional mediante la prevención y detección de actos u operaciones que involucren recursos de procedencia ilícita.",
      "Regular las operaciones bancarias y financieras en México.",
      "Establecer sanciones penales para delitos financieros.",
      "Controlar el tipo de cambio y las tasas de interés en el país.",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    text: "De acuerdo con la normativa PLD-FT, ¿qué se entiende por 'cliente'?",
    options: [
      "Únicamente las personas físicas que realizan operaciones con las entidades financieras.",
      "Cualquier persona física o moral con la que se establece una relación de negocios o realiza operaciones.",
      "Solo las empresas que mantienen cuentas bancarias activas.",
      "Exclusivamente los clientes que realizan operaciones por montos superiores a $10,000 USD.",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    text: "¿Qué es el 'Conocimiento del Cliente' (KYC) en el contexto de PLD-FT?",
    options: [
      "Un proceso de marketing para conocer las preferencias de los clientes.",
      "El conjunto de políticas y procedimientos para identificar y verificar la identidad de los clientes y conocer sus actividades.",
      "Un sistema de calificación crediticia de los clientes.",
      "Un programa de fidelización para clientes frecuentes.",
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    text: "¿Cuál de las siguientes NO es una señal de alerta (red flag) en operaciones PLD-FT?",
    options: [
      "Cliente que realiza múltiples depósitos en efectivo por montos justo debajo del umbral de reporte.",
      "Cliente que proporciona información inconsistente o falsa sobre su actividad económica.",
      "Cliente que realiza transferencias internacionales regulares relacionadas con su actividad comercial documentada.",
      "Cliente que muestra nerviosismo excesivo al proporcionar información o documentación.",
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    text: "¿Qué es una operación 'estructurada' o 'fraccionada' en términos de PLD?",
    options: [
      "Una operación que se divide en múltiples transacciones menores para evitar los controles y reportes obligatorios.",
      "Una operación que involucra múltiples productos financieros.",
      "Una operación que se realiza en diferentes sucursales de la misma institución.",
      "Una operación que requiere aprobación de múltiples niveles jerárquicos.",
    ],
    correctAnswer: 0,
  },
  {
    id: 6,
    text: "¿Cuál es el plazo máximo para presentar un Reporte de Operación Inusual (ROI) ante la UIF?",
    options: [
      "24 horas después de detectada la operación.",
      "48 horas después de detectada la operación.",
      "60 días naturales después del mes en que se detectó la operación.",
      "Inmediatamente después de detectada la operación.",
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    text: "¿Qué significa 'PEP' en el contexto de PLD-FT?",
    options: [
      "Persona Expuesta Políticamente - individuo que desempeña o ha desempeñado funciones públicas destacadas.",
      "Persona con Elevado Patrimonio - cliente con activos superiores a cierto umbral.",
      "Persona Extranjera Permanente - residente extranjero con visa permanente.",
      "Persona con Expediente Pendiente - cliente con documentación incompleta.",
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    text: "¿Cuál es la función principal de la Unidad de Inteligencia Financiera (UIF)?",
    options: [
      "Regular las tasas de interés de las instituciones financieras.",
      "Recibir, analizar y diseminar reportes de operaciones para prevenir y combatir el lavado de dinero y financiamiento al terrorismo.",
      "Supervisar el cumplimiento de las normas contables de las empresas.",
      "Administrar los recursos financieros del gobierno federal.",
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    text: "¿Qué es el 'enfoque basado en riesgo' en PLD-FT?",
    options: [
      "Un método que aplica las mismas medidas de prevención a todos los clientes por igual.",
      "Un enfoque que identifica, evalúa y comprende los riesgos de lavado de dinero y financiamiento al terrorismo para aplicar medidas proporcionales.",
      "Un sistema que solo se enfoca en clientes de alto riesgo e ignora a los demás.",
      "Una metodología que elimina todos los riesgos de lavado de dinero.",
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    text: "¿Cuál de las siguientes actividades vulnerables está sujeta a la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita?",
    options: [
      "Venta de alimentos en supermercados.",
      "Servicios de transporte público urbano.",
      "Compraventa de vehículos nuevos o usados.",
      "Servicios de telefonía móvil.",
    ],
    correctAnswer: 2,
  },
  {
    id: 11,
    text: "¿Qué es la 'debida diligencia reforzada' en PLD-FT?",
    options: [
      "El proceso estándar de identificación aplicado a todos los clientes.",
      "Medidas adicionales de verificación y monitoreo aplicadas a clientes de mayor riesgo, como PEPs o transacciones internacionales complejas.",
      "La revisión anual de expedientes de clientes.",
      "El proceso de cierre de cuentas de clientes sospechosos.",
    ],
    correctAnswer: 1,
  },
  {
    id: 12,
    text: "¿Cuál es el monto a partir del cual se debe presentar un Aviso ante la SHCP por operaciones en efectivo?",
    options: [
      "$500 USD o su equivalente en moneda nacional.",
      "$7,500 USD o su equivalente en moneda nacional.",
      "$10,000 USD o su equivalente en moneda nacional.",
      "$15,000 USD o su equivalente en moneda nacional.",
    ],
    correctAnswer: 1,
  },
  {
    id: 13,
    text: "¿Qué es el 'financiamiento al terrorismo'?",
    options: [
      "Únicamente el uso de fondos ilícitos para actividades terroristas.",
      "La provisión o recolección de fondos, por cualquier medio, directa o indirectamente, con la intención de que se utilicen para cometer actos terroristas.",
      "El robo de fondos de instituciones financieras por grupos terroristas.",
      "La evasión fiscal por parte de organizaciones criminales.",
    ],
    correctAnswer: 1,
  },
  {
    id: 14,
    text: "¿Cuál es la sanción administrativa máxima que puede imponer la CNBV por incumplimiento a las disposiciones de PLD-FT?",
    options: [
      "Amonestación por escrito.",
      "Multa de hasta 65,000 veces la UMA.",
      "Suspensión temporal de operaciones por 30 días.",
      "Revocación definitiva de la autorización para operar.",
    ],
    correctAnswer: 1,
  },
  {
    id: 15,
    text: "¿Qué información NO es obligatoria recabar en el expediente de identificación del cliente?",
    options: [
      "Nombre completo o denominación o razón social.",
      "Fecha de nacimiento o fecha de constitución.",
      "Nacionalidad.",
      "Preferencias religiosas o políticas.",
    ],
    correctAnswer: 3,
  },
  {
    id: 16,
    text: "¿Cuál es el objetivo de las 'listas negras' o listas de personas bloqueadas en PLD-FT?",
    options: [
      "Identificar a clientes morosos para negarles servicios financieros.",
      "Identificar a personas y entidades vinculadas con terrorismo, lavado de dinero u otras actividades ilícitas para bloquear sus activos y reportar operaciones.",
      "Crear un registro de clientes VIP para ofrecerles servicios preferenciales.",
      "Listar a empleados que han cometido faltas administrativas.",
    ],
    correctAnswer: 1,
  },
  {
    id: 17,
    text: "¿Qué es el 'monitoreo de operaciones' en el contexto de PLD-FT?",
    options: [
      "La revisión periódica de los estados de cuenta de los clientes.",
      "El seguimiento continuo y sistemático de las operaciones de los clientes para detectar operaciones inusuales o sospechosas.",
      "La auditoría anual de las operaciones de la institución financiera.",
      "El control de calidad de los servicios prestados a los clientes.",
    ],
    correctAnswer: 1,
  },
  {
    id: 18,
    text: "¿Cuál de las siguientes es una etapa del proceso de lavado de dinero?",
    options: ["Inversión.", "Colocación.", "Distribución.", "Liquidación."],
    correctAnswer: 1,
  },
  {
    id: 19,
    text: "¿Qué es un 'beneficiario controlador' o 'beneficiario final'?",
    options: [
      "El empleado que procesa las operaciones del cliente.",
      "La persona física que, en última instancia, posee o controla a un cliente y/o la persona física en cuyo nombre se realiza una operación.",
      "El representante legal de una empresa.",
      "El cliente que recibe los beneficios de un producto financiero.",
    ],
    correctAnswer: 1,
  },
  {
    id: 20,
    text: "¿Cuál es la periodicidad mínima con la que se debe actualizar el expediente de identificación de un cliente?",
    options: [
      "Cada mes.",
      "Cada 6 meses.",
      "Anualmente.",
      "Cada 2 años, o cuando existan cambios significativos en la información del cliente.",
    ],
    correctAnswer: 3,
  },
  {
    id: 21,
    text: "¿Qué es una 'operación relevante' según la normativa PLD-FT?",
    options: [
      "Cualquier operación que el cliente considere importante.",
      "Operación que por su naturaleza, monto o frecuencia no es consistente con el perfil transaccional del cliente.",
      "Operaciones que superan los $100,000 USD.",
      "Operaciones realizadas por clientes VIP.",
    ],
    correctAnswer: 1,
  },
  {
    id: 22,
    text: "¿Cuál es el rol del Oficial de Cumplimiento en una institución financiera?",
    options: [
      "Administrar las inversiones de la institución.",
      "Ser responsable de la implementación y supervisión del programa de cumplimiento PLD-FT.",
      "Atender las quejas de los clientes.",
      "Gestionar los recursos humanos de la institución.",
    ],
    correctAnswer: 1,
  },
  {
    id: 23,
    text: "¿Qué es el GAFI (Grupo de Acción Financiera Internacional)?",
    options: [
      "Una institución bancaria internacional.",
      "Un organismo intergubernamental que establece estándares y promueve la implementación de medidas legales, regulatorias y operativas para combatir el lavado de dinero y financiamiento al terrorismo.",
      "Una agencia de calificación crediticia.",
      "Un fondo de inversión global.",
    ],
    correctAnswer: 1,
  },
  {
    id: 24,
    text: "¿Cuál de las siguientes NO es una medida de debida diligencia del cliente?",
    options: [
      "Identificar al cliente y verificar su identidad.",
      "Identificar al beneficiario controlador.",
      "Comprender la naturaleza de la relación de negocios.",
      "Ofrecer descuentos especiales en productos financieros.",
    ],
    correctAnswer: 3,
  },
  {
    id: 25,
    text: "¿Qué es un 'paraíso fiscal' en el contexto de PLD-FT?",
    options: [
      "Un país con clima tropical favorable para el turismo.",
      "Una jurisdicción con baja o nula tributación y falta de transparencia que puede facilitar el lavado de dinero.",
      "Un país con altas tasas de interés bancario.",
      "Una región con incentivos fiscales para empresas tecnológicas.",
    ],
    correctAnswer: 1,
  },
  {
    id: 26,
    text: "¿Cuál es el propósito de la 'capacitación en PLD-FT' para los empleados de instituciones financieras?",
    options: [
      "Cumplir con un requisito administrativo sin impacto real.",
      "Asegurar que los empleados conozcan y comprendan sus obligaciones y puedan identificar y reportar operaciones sospechosas.",
      "Reducir los costos operativos de la institución.",
      "Mejorar las habilidades de ventas del personal.",
    ],
    correctAnswer: 1,
  },
  {
    id: 27,
    text: "¿Qué es la 'trazabilidad' en operaciones financieras?",
    options: [
      "La capacidad de rastrear el origen, movimiento y destino de los fondos en una operación.",
      "El tiempo que tarda en procesarse una transferencia bancaria.",
      "La calidad del servicio al cliente.",
      "El nivel de seguridad de las instalaciones bancarias.",
    ],
    correctAnswer: 0,
  },
  {
    id: 28,
    text: "¿Cuál de las siguientes operaciones podría considerarse como 'inusual'?",
    options: [
      "Un empleado que deposita su salario mensual en su cuenta.",
      "Una empresa que realiza pagos regulares a sus proveedores.",
      "Un cliente que realiza múltiples depósitos y retiros inmediatos sin justificación aparente.",
      "Un jubilado que retira su pensión mensual.",
    ],
    correctAnswer: 2,
  },
  {
    id: 29,
    text: "¿Qué es el 'perfil transaccional' de un cliente?",
    options: [
      "La fotografía del cliente en el expediente.",
      "El conjunto de características de las operaciones habituales del cliente basadas en su actividad económica, ingresos y comportamiento histórico.",
      "El historial crediticio del cliente.",
      "Las preferencias del cliente en productos financieros.",
    ],
    correctAnswer: 1,
  },
  {
    id: 30,
    text: "¿Cuál es la consecuencia de NO reportar una operación sospechosa detectada?",
    options: [
      "No hay consecuencias si la operación resulta ser legítima.",
      "Sanciones administrativas, penales y responsabilidad civil para la institución y los empleados involucrados.",
      "Solo una amonestación verbal.",
      "Pérdida de bonos de desempeño del empleado.",
    ],
    correctAnswer: 1,
  },
]
