// ============================================
// PROYECTO SEMANA 02: Ficha de Datos de mi Dominio
// Dominio: E-Commerce de Libros Usados
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

const DOMAIN_NAME = "E-Commerce de Libros Usados";

const itemName = "Cien Años de Soledad";

const itemCategory = "Novela / Realismo Mágico";

const itemQuantity = 15_000; // Precio del libro en COP

const isItemAvailable = true; // ¿El libro está disponible para la venta?

const pendingOwner = null; // Comprador aún no asignado


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================

console.log('♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡');
console.log(`        📚 FICHA DE DATOS: ${DOMAIN_NAME} 📚`);
console.log('♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡');
console.log('');

console.log(`Nombre:       ${itemName}`);
console.log(`Categoría:    ${itemCategory}`);
console.log(`Precio:       $${itemQuantity.toLocaleString("es-CO")} COP`);
console.log(`Disponible:   ${isItemAvailable}`);
console.log('');


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("══════📋 TIPOS DE DATOS 📋══════");

console.log("typeof itemName:        ", typeof itemName);
console.log("typeof itemQuantity:    ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);
console.log("typeof pendingOwner:    ", typeof pendingOwner);
console.log('');


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("═══════💱 CONVERSIONES 💱═══════");
             
// a) Number → String para mostrar con formato

const precioComoTexto = String(itemQuantity);

console.log("Precio como texto:      ",precioComoTexto);
console.log("typeof (convertido):    ",typeof precioComoTexto);

// b) Boolean → para verificar disponibilidad
const disponibleComoBoolean = Boolean(isItemAvailable);
console.log("¿Disponible? (Boolean): ", disponibleComoBoolean);

console.log('');


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("════════🚫 VALOR NULO 🚫════════");

console.log("Comprador pendiente:    ", pendingOwner);
console.log("typeof null:            ", typeof pendingOwner); // "object" ← bug histórico de JS
console.log("¿Es null?:              ", pendingOwner === null);
console.log('');


// ============================================
// CIERRE
// ============================================
console.log('♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡');
console.log('   ¡😄Animate a conocer el mundo de los libros con JavaScript😄!');
console.log('♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡');