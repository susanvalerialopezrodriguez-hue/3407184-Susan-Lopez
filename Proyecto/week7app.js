// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Reventa de Libros Usados
// ============================================

"use strict";

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME      = "Comercio de Libros Usados";
const VALUE_LABEL      = "precio";
const DESCUENTO_MAYOR  = 0.15;  // 15% descuento mayorista (5+ libros)

const books = [
  { id: 1, name: "Cien Años de Soledad",        category: "novela",    value: 15_000, available: true  },
  { id: 2, name: "El Alquimista",               category: "novela",    value: 12_000, available: true  },
  { id: 3, name: "Sapiens",                     category: "académico", value: 18_000, available: false },
  { id: 4, name: "El Principito",               category: "infantil",  value: 8_000,  available: true  },
  { id: 5, name: "Clean Code",                  category: "técnico",   value: 25_000, available: true  },
  { id: 6, name: "Harry Potter T1",             category: "infantil",  value: 10_000, available: false },
  { id: 7, name: "Brevísima Historia del Tiempo", category: "académico", value: 20_000, available: true },
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const cop = (numero) => numero.toLocaleString("es-CO");

const formatItem = (book) =>
  `📚 ${book.name} [${book.category}] — $${cop(book.value)} — ${book.available ? "✅ Disponible" : "❌ Vendido"}`;

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Calcula el precio final aplicando descuento si compra 5+ libros
const calculateValue = (price, quantity = 1) => {
  const subtotal = price * quantity;
  const descuento = quantity >= 5 ? subtotal * DESCUENTO_MAYOR : 0;
  return subtotal - descuento;
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Un libro es válido si está disponible para la venta
const isValid = (book) => book.available === true;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, currency = "$") =>
  `${label}: ${currency}${cop(Math.round(value))}`;

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"♥｡･ﾟ♡ﾟ･｡♥｡".repeat(8)}`);
console.log(`                    REPORTE — ${DOMAIN_NAME}`);
console.log(`${"♥｡･ﾟ♡ﾟ･｡♥｡".repeat(8)}`);

if (books.length === 0) {
  console.log("\n⚠️  No hay libros. Agrega datos en la Sección 1.");
} else {

  // --- Listado ---
  console.log("\n📋 Listado:");
  let lineNumber = 1;
  for (const book of books) {
    console.log(`  ${lineNumber}. ${formatItem(book)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;
  for (const book of books) {
    if (isValid(book)) validCount++;
  }
  console.log(`\n✅ Libros disponibles: ${validCount} / ${books.length}`);

  // --- Cálculo ---
  let totalValue = 0;
  for (const book of books) {
    totalValue += calculateValue(book.value);
  }
  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}s en inventario`));

  // --- Ejemplo de descuento mayorista ---
  const precioConDescuento = calculateValue(15_000, 5);
  console.log(formatWithDefault(precioConDescuento, "Compra de 5 libros a $15.000 con descuento"));
}

console.log(`\n${"♥｡･ﾟ♡ﾟ･｡♥｡".repeat(8)}\n`);