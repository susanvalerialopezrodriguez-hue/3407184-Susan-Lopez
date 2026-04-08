// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// Dominio: E-Commerce de Libros Usados
// ============================================

const DOMAIN_NAME = "E-Commerce de Libros Usados";
const VALUE_LABEL = "libros";
const cop = (n) => n.toLocaleString("es-CO");

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

const items = [
  { id: 1, name: "Cien Años de Soledad",          category: "novela",    price: 15_000, pages: 432, available: true,  author: "Gabriel García Márquez" },
  { id: 2, name: "El Alquimista",                 category: "novela",    price: 12_000, pages: 208, available: true,  author: "Paulo Coelho" },
  { id: 3, name: "Sapiens",                       category: "académico", price: 18_000, pages: 504, available: false, author: "Yuval Noah Harari" },
  { id: 4, name: "El Principito",                 category: "infantil",  price: 8_000,  pages: 96,  available: true                             },
  { id: 5, name: "Clean Code",                    category: "técnico",   price: 25_000, pages: 431, available: true,  author: "Robert C. Martin" },
  { id: 6, name: "Brevísima Historia del Tiempo", category: "académico", price: 20_000, pages: 212, available: false, author: "Stephen Hawking"  },
  { id: 7, name: "Harry Potter T1",               category: "infantil",  price: 10_000, pages: 309, available: true                             },
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);
  Object.entries(item).forEach(([key, value]) => {
    console.log(`  ${key.padEnd(12)}: ${value}`);
  });
};

const calculateStats = (numericKey) => {
  const values = Object.values(items).map((item) => item[numericKey]);
  const total   = values.reduce((acc, val) => acc + val, 0);
  const average = total / values.length;
  const max     = Math.max(...values);
  const min     = Math.min(...values);

  console.log(`\n📊 Estadísticas de "${numericKey}":`);
  console.log(`  Total:    $${cop(total)}`);
  console.log(`  Promedio: $${cop(Math.round(average))}`);
  console.log(`  Máximo:   $${cop(max)}`);
  console.log(`  Mínimo:   $${cop(min)}`);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log(`  Categoría:  ${item.category}`);
  console.log(`  Precio:     $${cop(item.price)}`);
  console.log(`  Páginas:    ${item.pages}`);
  console.log(`  Disponible: ${item.available ? "✅" : "❌"}`);
  if (Object.hasOwn(item, "author")) {
    console.log(`  Autor:      ${item.author}`);
  } else {
    console.log(`  Autor:      (no registrado)`);
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);
  for (const key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(`  ${key.padEnd(12)}: ${item[key]}`);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

const updateItem = (item, changes) => {
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

const getAvailable = () => items.filter((book) => book.available === true);

const findById = (id) => items.find((book) => book.id === id);

const addCalculatedProp = () =>
  items.map((item) => ({
    ...item,
    priceWithDiscount: Math.round(item.price * 0.85), // 15% descuento mayorista
  }));

const sortByNumericProp = (ascending = true) =>
  [...items].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);

// ============================================
// REPORTE FINAL
// ============================================

const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  console.log(`\n  Total de libros:      ${items.length}`);
  console.log(`  Disponibles:          ${getAvailable().length}`);
  console.log(`  No disponibles:       ${items.length - getAvailable().length}`);

  const sorted = sortByNumericProp(false);
  console.log(`\n  Libro más caro:       ${sorted[0].name} ($${cop(sorted[0].price)})`);
  console.log(`  Libro más barato:     ${sorted[sorted.length - 1].name} ($${cop(sorted[sorted.length - 1].price)})`);

  console.log("\n📚 Libros ordenados por precio (mayor a menor):");
  sorted.forEach((book, i) => {
    console.log(`  ${i + 1}. ${book.name.padEnd(35)} $${cop(book.price)}`);
  });

  console.log("\n" + "=".repeat(50));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`   Total de ${VALUE_LABEL}: ${items.length}`);

// 1. Inspeccionar primer elemento
inspectItem(items[0]);

// 2. Estadísticas de precio
calculateStats("price");

// 3. Mostrar todos con propiedades opcionales
console.log("\n📖 Listado con propiedades opcionales:");
items.forEach(showWithOptionals);

// 4. Recorrer propiedades con for...in
printAllProperties(items[0]);

// 5. Demostrar updateItem
const libroActualizado = updateItem(items[0], { price: 13_000, available: false });
console.log(`\n✏️  updateItem — original: $${cop(items[0].price)} | actualizado: $${cop(libroActualizado.price)}`);

// 6. Elementos disponibles
const disponibles = getAvailable();
console.log(`\n✅ Libros disponibles (${disponibles.length}):`);
disponibles.forEach((book) => console.log(`  - ${book.name}`));

// 7. Buscar por id
console.log(`\n🔎 findById(3): ${findById(3)?.name ?? "No encontrado"}`);
console.log(`🔎 findById(99): ${findById(99)?.name ?? "No encontrado"}`);

// 8. Precios con descuento
console.log("\n🏷️  Precios con 15% de descuento:");
addCalculatedProp().forEach((book) =>
  console.log(`  ${book.name.padEnd(35)} $${cop(book.price)} → $${cop(book.priceWithDiscount)}`)
);

// 9. Ordenado ascendente
console.log("\n📈 Ordenado de menor a mayor precio:");
sortByNumericProp(true).forEach((book) =>
  console.log(`  ${book.name.padEnd(35)} $${cop(book.price)}`)
);

// 10. Reporte final
buildReport();