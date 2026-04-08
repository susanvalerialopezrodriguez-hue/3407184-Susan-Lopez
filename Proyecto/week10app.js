// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Semana 10 — JavaScript ES2023 Bootcamp
// Dominio: E-Commerce de Libros Usados
// ============================================

// ============================================
// SECCIÓN 1: Configuración y Constantes
// ============================================

const DOMAIN_NAME = "E-Commerce de Libros Usados";
const VALUE_LABEL = "libros";
const MAX_ITEMS   = 1_000;
const cop         = (n) => n.toLocaleString("es-CO");

// ============================================
// SECCIÓN 2: Datos — Array Principal
// ============================================

const items = [
  { id: 1, name: "Cien Años de Soledad",          category: "novela",    price: 15_000, pages: 432, available: true,  author: "Gabriel García Márquez" },
  { id: 2, name: "El Alquimista",                 category: "novela",    price: 12_000, pages: 208, available: true,  author: "Paulo Coelho"           },
  { id: 3, name: "Sapiens",                       category: "académico", price: 18_000, pages: 504, available: false, author: "Yuval Noah Harari"      },
  { id: 4, name: "El Principito",                 category: "infantil",  price: 8_000,  pages: 96,  available: true                                    },
  { id: 5, name: "Clean Code",                    category: "técnico",   price: 25_000, pages: 431, available: true,  author: "Robert C. Martin"       },
  { id: 6, name: "Brevísima Historia del Tiempo", category: "académico", price: 20_000, pages: 212, available: false, author: "Stephen Hawking"        },
  { id: 7, name: "Harry Potter T1",               category: "infantil",  price: 10_000, pages: 309, available: true                                    },
];

// ============================================
// SECCIÓN 3: Funciones CRUD
// ============================================

const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log(`⚠️  No se puede agregar. Límite de ${MAX_ITEMS} libros alcanzado.`);
    return;
  }
  items.push(item);
  console.log(`✅ Libro agregado: ${item.name} — $${cop(item.price)}`);
};

const findById = (id) => items.find((book) => book.id === id);

const getActive = () => items.filter((book) => book.available === true);

const filterByField = (field, value) =>
  items.filter((book) => book[field] === value);

// ============================================
// SECCIÓN 4: Funciones de Análisis
// ============================================

const updateItem = (id, changes) =>
  items.map((item) => (item.id === id ? { ...item, ...changes } : item));

const calculateStats = (field) => {
  const values = items.map((item) => item[field]);
  const total  = values.reduce((acc, val) => acc + val, 0);
  return {
    total,
    min: Math.min(...values),
    max: Math.max(...values),
    avg: total / values.length,
  };
};

// ============================================
// SECCIÓN 5: Funciones de Display
// ============================================

const formatItem = (item) =>
  `[${String(item.id).padStart(2, "0")}] ${item.name.padEnd(38)} $${cop(item.price).padStart(7)} — ${item.available ? "✅" : "❌"} — ${item.category}${item.author ? ` — ${item.author}` : ""}`;

const buildReport = () => {
  console.log("\n" + "♥｡･ﾟ♡ﾟ･｡♥｡".repeat(8));
  console.log(`                    📚 REPORTE — ${DOMAIN_NAME.toUpperCase()}`);
  console.log("♥｡･ﾟ♡ﾟ･｡♥｡".repeat(8));

  // Listado completo
  console.log("\n📋 Listado completo:");
  items.forEach((item) => console.log(`  ${formatItem(item)}`));

  // Activos vs inactivos
  const active = getActive();
  console.log(`\n✅ Disponibles:     ${active.length}`);
  console.log(`❌ No disponibles:  ${items.length - active.length}`);

  // Estadísticas de precio
  const stats = calculateStats("price");
  console.log("\n📊 Estadísticas de precio:");
  console.log(`  Total:    $${cop(stats.total)}`);
  console.log(`  Promedio: $${cop(Math.round(stats.avg))}`);
  console.log(`  Máximo:   $${cop(stats.max)}`);
  console.log(`  Mínimo:   $${cop(stats.min)}`);

  // Propiedades del primer elemento
  console.log(`\n🔍 Propiedades de "${items[0].name}":`);
  Object.entries(items[0]).forEach(([key, value]) =>
    console.log(`  ${key.padEnd(12)}: ${value}`)
  );

  // Pie de reporte
  console.log(`\n  Total registros: ${items.length} / ${MAX_ITEMS}`);
  console.log("═♥｡･ﾟ♡ﾟ･｡♥".repeat(8));
};

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================

console.log("♥｡･ﾟ♡ﾟ･｡♥｡".repeat(8));
console.log(`  📚 ${DOMAIN_NAME.toUpperCase()}`);
console.log("♥｡･ﾟ♡ﾟ･｡♥｡".repeat(8));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}\n`);

// Paso 1: Buscar por id
const found = findById(3);
console.log(`🔎 findById(3):  ${found?.name ?? "no encontrado"}`);
console.log(`🔎 findById(99): ${findById(99)?.name ?? "no encontrado"}\n`);

// Paso 2: Listar activos
const active = getActive();
console.log(`✅ Libros disponibles: ${active.length}`);
active.forEach((item) => console.log(`  ${formatItem(item)}`));
console.log("");

// Paso 3: Filtrar por campo
const filtered = filterByField("category", "académico");
console.log(`📂 Filtro category=académico: ${filtered.length} resultados`);
filtered.forEach((item) => console.log(`  ${formatItem(item)}`));
console.log("");

// Paso 4: Actualizar con spread
const updated = updateItem(1, { price: 13_000 });
console.log(`✏️  updateItem id=1: precio actualizado a $${cop(updated.find((i) => i.id === 1)?.price)}\n`);

// Paso 5: Estadísticas
const stats = calculateStats("price");
console.log(`📊 Estadísticas (price): min=$${cop(stats.min)} | max=$${cop(stats.max)} | avg=$${cop(Math.round(stats.avg))}\n`);

// Paso 6: Agregar nuevo libro
addItem({ id: 8, name: "El Coronel no tiene quien le escriba", category: "novela", price: 11_000, pages: 147, available: true, author: "Gabriel García Márquez" });
console.log("");

// Paso 7: Reporte completo
buildReport();