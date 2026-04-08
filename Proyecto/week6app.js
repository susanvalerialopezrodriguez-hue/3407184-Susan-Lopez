// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Reventa de Libros Usados
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const cop = (numero) => numero.toLocaleString("es-CO");

const books = [
  { name: "Cien Años de Soledad",  category: "novela",    value: 15_000 },
  { name: "El Alquimista",         category: "novela",    value: 12_000 },
  { name: "Sapiens",               category: "académico", value: 18_000 },
  { name: "El Principito",         category: "infantil",  value: 8_000  },
  { name: "Clean Code",            category: "técnico",   value: 25_000 },
  { name: "Harry Potter T1",       category: "infantil",  value: 10_000 },
  { name: "Brevísima Historia del Tiempo", category: "académico", value: 20_000 },
];

const categories = ["novela", "académico", "infantil", "técnico"];

const valueLabel = "precio";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("════════════════════📋 LISTADO COMPLETO 📋═══════════════════");

let lineNumber = 0;

for (const book of books) {
  lineNumber++;
  console.log(`${lineNumber}. ${book.name} — ${book.category} — ${valueLabel}: $${cop(book.value)}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("═══════════════════⌨️ CONTEO POR CATEGORÍA ⌨️══════════════════");
             
for (const category of categories) {
  let count = 0;

  for (const book of books) {
    if (book.category === category) count++;
  }

  console.log(`${category}: ${count} libro(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("══════════════════════📉 ESTADÍSTICAS 📉═════════════════════");
             
let totalValue = 0;

for (const book of books) {
  totalValue += book.value;
}

const averageValue = books.length > 0 ? totalValue / books.length : 0;

console.log(`Total ${valueLabel}s: $${cop(totalValue)}`);
console.log(`Promedio ${valueLabel}: $${cop(Math.round(averageValue))}`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("════════════════════➰ MÁXIMO Y MÍNIMO ➰════════════════════");
             
let maxItem = books[0] ?? null;
let minItem = books[0] ?? null;

if (books.length > 0) {
  for (const book of books) {
    if (book.value > maxItem.value) maxItem = book;
    if (book.value < minItem.value) minItem = book;
  }

  console.log(`Libro más caro:   ${maxItem.name} ($${cop(maxItem.value)})`);
  console.log(`Libro más barato: ${minItem.name} ($${cop(minItem.value)})`);
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("═══════════════════📊 REPORTE DETALLADO 📊═══════════════════");
             
for (let i = 0; i < books.length; i++) {
  const book = books[i];
  const comparison = book.value >= averageValue ? "sobre el promedio" : "bajo el promedio";
  console.log(`${i + 1}. ${book.name} ($${cop(book.value)}) — ${comparison}`);
}

console.log("");
console.log("════════════════════📔 FIN DEL REPORTE 📔════════════════════");
             