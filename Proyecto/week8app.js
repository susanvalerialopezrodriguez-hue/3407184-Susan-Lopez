// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Reventa de Libros Usados
// ============================================

const DOMAIN_NAME = "Comercio de Libros Usados";
const VALUE_LABEL = "libros";

const cop = (numero) => numero.toLocaleString("es-CO");

// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "Cien Años de Soledad",          category: "novela",    price: 15_000, available: true  },
  { id: 2, name: "El Alquimista",                 category: "novela",    price: 12_000, available: true  },
  { id: 3, name: "Sapiens",                       category: "académico", price: 18_000, available: false },
  { id: 4, name: "El Principito",                 category: "infantil",  price: 8_000,  available: true  },
  { id: 5, name: "Clean Code",                    category: "técnico",   price: 25_000, available: true  },
  { id: 6, name: "Brevísima Historia del Tiempo", category: "académico", price: 20_000, available: false },
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`📥 Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`🗑️  Eliminado (último): ${removed.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`⭐ Libro prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1)[0];
  console.log(`🗑️  Eliminado (posición ${index}): ${removed.name}`);
};

const getActiveItems = () => items.filter((book) => book.available === true);

const findByName = (name) => items.find((book) => book.name === name);

const formatItem = (item) =>
  `[${item.id}] ${item.name} — ${item.category} — $${cop(item.price)} — ${item.available ? "✅ Disponible" : "❌ Vendido"}`;

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"♥｡･ﾟ♡ﾟ･｡♥｡".repeat(8)}`);
console.log(`                  📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"♥｡･ﾟ♡ﾟ･｡♥｡".repeat(8)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => console.log(`  ${formatItem(item)}`));

console.log("\n══════🧮 Operaciones de mutación 🧮═══════\n");

addItem({ id: 7, name: "Harry Potter T1", category: "infantil", price: 10_000, available: true });

addPriorityItem({ id: 0, name: "Don Quijote de la Mancha", category: "clásico", price: 22_000, available: true });

removeByIndex(3);

removeLastItem();
               
console.log("\n════ Inventario después de mutaciones ════\n");
items.forEach((item) => console.log(`  ${formatItem(item)}`));

console.log("\n════════🔎 Búsqueda y filtrado 🔎═════════\n");

const bookFound = findByName("Sapiens");
console.log(bookFound
  ? `🔍 Libro encontrado: ${formatItem(bookFound)}`
  : "🔍 Libro no encontrado"
);

const activeItems = getActiveItems();
console.log(`📗 Libros disponibles: ${activeItems.length} de ${items.length}`);

// Snapshot inmutable
const snapshot = [...items, { id: 99, name: "Libro Extra (solo en snapshot)", category: "novela", price: 5_000, available: true }];
console.log(`📸 Snapshot con libro extra: ${snapshot.length} libros (items original: ${items.length})`);

console.log("\n═════════ Transformación con map ═════════\n");
               
const nombres = items.map((book) => book.name);
console.log("📚 Nombres en inventario:");
nombres.forEach((nombre) => console.log(`  - ${nombre}`));

const preciosConDescuento = items.map((book) => ({
  name: book.name,
  precioOriginal: book.price,
  precioDescuento: Math.round(book.price * 0.85),
}));
console.log("\n🏷️  Precios con 15% de descuento:");
preciosConDescuento.forEach((book) =>
  console.log(`  ${book.name}: $${cop(book.precioOriginal)} → $${cop(book.precioDescuento)}`)
);
              
console.log("\n═══════════📖 Resumen final 📖═══════════\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);
const activeCount = getActiveItems().length;
console.log(`Disponibles: ${activeCount} | Vendidos: ${items.length - activeCount}`);

console.log(`\n${"♥｡･ﾟ♡ﾟ･｡♥｡".repeat(8)}`);
console.log("                  ✅ Reporte completado");
console.log(`${"♥｡･ﾟ♡ﾟ･｡♥｡".repeat(8)}\n`);