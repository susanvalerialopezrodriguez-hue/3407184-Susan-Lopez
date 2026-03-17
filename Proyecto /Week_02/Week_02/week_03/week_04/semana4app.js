// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// Dominio: Comercio de Libros Usados
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const DOMAIN_NAME = "Librería de Libros Usados";

// Nombre del libro con espacios intencionales para aplicar trim()
const rawEntityName = "  El Coronel no tiene quien le escriba  ";

// Género literario del libro
const entityCategory = "Novela Latinoamericana";

// Código identificador del libro en inventario
const entityCode = "LIB-0042";

// Descripción corta del libro
const entityDescription = "Obra maestra del autor colombiano Gabriel García Márquez, imprescindible en cualquier colección de literatura usada.";

// Precio de venta del libro en pesos colombianos
const mainValue = 12_000;

// ¿Está disponible para la venta?
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// Limpia el nombre del libro eliminando espacios al inicio y al final
const entityName = rawEntityName.trim();

// Título en mayúsculas para el encabezado de la ficha
const entityNameUpper = entityName.toUpperCase();

// Título en minúsculas para uso interno o búsquedas
const entityNameLower = entityName.toLowerCase();

// Extrae el prefijo del código ("LIB") para validaciones
const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// ¿El código comienza con el prefijo "LIB"?
const hasValidPrefix = entityCode.startsWith(codePrefix);

// ¿La descripción menciona la palabra "colombiano"?
const descriptionIsRelevant = entityDescription.includes("colombiano");

// ¿El código termina con "042"?
const hasValidSuffix = entityCode.endsWith("042");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator    = "=".repeat(45);
const subSeparator = "-".repeat(45);

const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE LIBRO
${separator}
Título:      ${entityNameUpper}
Género:      ${entityCategory}
Código:      ${entityCode}
Prefijo:     ${codePrefix}
Precio:      $${mainValue.toLocaleString("es-CO")}
Estado:      ${isActive ? "Disponible" : "No disponible"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");
console.log(`¿Código empieza con '${codePrefix}'?:          ${hasValidPrefix}`);
console.log(`¿Descripción menciona 'colombiano'?:           ${descriptionIsRelevant}`);
console.log(`¿Código termina con '042'?:                    ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");
const notification = `📚 Nuevo libro disponible: ${entityName} (${entityCode}) — $${mainValue.toLocaleString("es-CO")}`;
console.log(notification);
console.log("");