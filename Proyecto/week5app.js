// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??.
// Dominio: Reventa de Libros Usados
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de mi dominio
// ============================================

const elementName   = "El Alquimista";          // Nombre del libro
const elementStatus = "disponible";             // Estado: "disponible" o "vendido"
const elementValue  = 72;                       // Porcentaje de ocupación del estante (0-100)
const elementType   = "novela";                 // Tipo: "novela", "técnico", "infantil", "académico"
const elementInfo   = {                         // Información adicional del libro
  autor: "Paulo Coelho",
  condicion: "bueno",
  precio: 15_000
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// Clasifica el nivel de ocupación del estante
let classification;
if (elementValue >= 80) {
  classification = "Estante crítico — necesita reposición urgente";
} else if (elementValue >= 50) {
  classification = "Estante moderado — nivel aceptable";
} else {
  classification = "Estante disponible — hay bastante espacio";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

const statusLabel = elementStatus === "disponible" ? "✅ Disponible" : "❌ Vendido";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;
switch (elementType) {
  case "novela":    typeLabel = "📖 Novela";           break;
  case "técnico":   typeLabel = "🔧 Libro Técnico";    break;
  case "infantil":  typeLabel = "🧸 Libro Infantil";   break;
  case "académico": typeLabel = "🎓 Libro Académico";  break;
  default:          typeLabel = "📚 Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = elementName ?? "Sin nombre";
const infoDetail  = elementInfo?.condicion ?? "Sin información adicional";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.autor ?? "Autor desconocido";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

const cop = (numero) => numero.toLocaleString("es-CO");

console.log("♥｡･ﾟ♡ﾟ･｡♥｡".repeat(6));
console.log("                 FICHA DE CLASIFICACIÓN - LIBRO");
console.log("♥｡･ﾟ♡ﾟ･｡♥｡".repeat(6));
console.log(`Nombre:               ${displayName}`);
console.log(`Autor:                ${safeProperty}`);
console.log(`Estado:               ${statusLabel}`);
console.log(`Tipo:                 ${typeLabel}`);
console.log(`Condición:            ${infoDetail}`);
console.log(`Precio:               $${cop(elementInfo?.precio ?? 0)}`);
console.log(`Ocupación estante:    ${elementValue}%`);
console.log(`Clasificación:        ${classification}`);
console.log("♥｡･ﾟ♡ﾟ･｡♥｡".repeat(6));