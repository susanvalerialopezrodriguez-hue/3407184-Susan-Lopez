// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// Dominio: Comercio de Libros Usados
// ============================================

// ============================================
// SECCIÓN 1: Datos de mi dominio
// ============================================

const PRECIO_LIBRO_BUENO      = 15_000;   // Libro en buen estado
const PRECIO_LIBRO_REGULAR    = 8_000;    // Libro en estado regular
const PRECIO_LIBRO_MALO       = 3_000;    // Libro en mal estado
const PORCENTAJE_COMPRA       = 0.40;     // Se paga al vendedor el 40% del precio de venta
const DESCUENTO_MAYORISTA     = 0.15;     // 15% de descuento por compra de 5+ libros
const META_VENTAS_DIARIA      = 200_000;  // Meta de ingresos por día
const CAPACIDAD_ESTANTE       = 120;      // Máximo de libros en tienda

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("══════════════ 📄Operaciones básicas📄 ══════════════");
                                                 
const cop = (numero) => numero.toLocaleString("es-CO");

const librosBuenos   = 10;
const librosRegulares = 7;
const librosMalos    = 4;

const ingresosBuenos   = PRECIO_LIBRO_BUENO   * librosBuenos;
const ingresosRegulares = PRECIO_LIBRO_REGULAR * librosRegulares;
const ingresosMalos    = PRECIO_LIBRO_MALO    * librosMalos;

const ingresosTotales = ingresosBuenos + ingresosRegulares + ingresosMalos;
console.log("Ingresos por libros en buen estado:    $" + cop(ingresosBuenos));
console.log("Ingresos por libros en estado regular: $" + cop(ingresosRegulares));
console.log("Ingresos por libros en mal estado:     $" + cop(ingresosMalos));
console.log("Ingresos totales del día:              $" + cop(ingresosTotales));

const totalLibrosVendidos = librosBuenos + librosRegulares + librosMalos;
const espacioDisponible   = CAPACIDAD_ESTANTE - totalLibrosVendidos;
console.log("Libros vendidos en el día:             " + cop(totalLibrosVendidos));
console.log("Espacio disponible en estante:         " + cop(espacioDisponible) + " libros");

// Costo de compra a proveedores (lo que se paga a quien trae libros)
const costoCompras = ingresosTotales * PORCENTAJE_COMPRA;
console.log("Costo pagado a vendedores:             $" + cop(costoCompras));

// Ganancia neta
const gananciaNeta = ingresosTotales - costoCompras;
console.log("Ganancia neta del día:                 $" + cop(gananciaNeta));

// Promedio de precio por libro vendido
const promedioPrecio = ingresosTotales / totalLibrosVendidos;
console.log("Precio promedio por libro:             $" + cop(Math.round(promedioPrecio)));

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("══════════════ 📄Asignación compuesta  ══════════════");
             
// Simulación de una venta acumulada durante el día
let acumuladoVentas = 0;
console.log("Ventas acumuladas al inicio del día: $" + cop(acumuladoVentas));

acumuladoVentas += 45_000;  // Primera venta de la mañana
console.log("Tras venta de la mañana:  $" + cop(acumuladoVentas));

acumuladoVentas += 72_000;  // Segunda venta, mediodía
console.log("Tras venta del mediodía:  $" + cop(acumuladoVentas));

acumuladoVentas += 38_000;  // Tercera venta, tarde
console.log("Tras venta de la tarde:   $" + cop(acumuladoVentas));

// Se aplica descuento mayorista (cliente compró 6 libros)
acumuladoVentas *= (1 - DESCUENTO_MAYORISTA);
console.log("Tras descuento mayorista: $" + cop(Math.round(acumuladoVentas)));

// Devolución de un libro dañado
acumuladoVentas -= PRECIO_LIBRO_MALO;
console.log("Tras devolución libro:    $" + cop(Math.round(acumuladoVentas)));

// Ajuste por IVA excluido (libros no gravan IVA en Colombia, solo ejemplo ilustrativo)
acumuladoVentas /= 1;  // Sin cambio real, pero ilustra uso de /=
console.log("Total final del día:      $" + cop(Math.round(acumuladoVentas)));

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("══════════════ 📄 Validaciones con  📄 ══════════════");

const ventasDelDia  = Math.round(acumuladoVentas);
const diasEnMes     = 26;  // Días laborales en el mes

// ¿Se cumplió exactamente la meta diaria?
const cumpliMetaExacta = ventasDelDia === META_VENTAS_DIARIA;
console.log("¿Ventas del día iguales a la meta exacta?", cumpliMetaExacta);

// ¿Se superó la meta diaria?
const superMeta = ventasDelDia > META_VENTAS_DIARIA;
console.log("¿Se superó la meta diaria?", superMeta);

// ¿El estante está lleno?
const librosEnEstante = CAPACIDAD_ESTANTE - espacioDisponible;
const estanteLleno = librosEnEstante === CAPACIDAD_ESTANTE;
console.log("¿El estante está completamente lleno?", estanteLleno);

// ¿Queda menos del 20% del espacio disponible?
const porcentajeOcupado = librosEnEstante / CAPACIDAD_ESTANTE;
const casillasAgotandose = porcentajeOcupado > 0.80;
console.log("¿El estante está por encima del 80% de ocupación?", casillasAgotandose);

// ¿El estado del libro vendido fue 'bueno'?
const estadoUltimoLibro = "bueno";
const ultimoLibroEnBuenEstado = estadoUltimoLibro === "bueno";
console.log("¿El último libro vendido estaba en buen estado?", ultimoLibroEnBuenEstado);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("══════════════ 📄Condiciones lógicas📄 ══════════════");

const esClienteFrecuente  = true;
const cantidadLibros      = 6;
const tieneCarnetEstudiantil = false;

// && : descuento si es cliente frecuente Y compra 5 o más libros
const aplicaDescuentoMayorista = esClienteFrecuente && cantidadLibros >= 5;
console.log("¿Aplica descuento mayorista?", aplicaDescuentoMayorista);

// || : precio especial si es cliente frecuente O tiene carnet estudiantil
const aplicaPrecioEspecial = esClienteFrecuente || tieneCarnetEstudiantil;
console.log("¿Aplica precio especial?", aplicaPrecioEspecial);

// ! : ¿el libro NO está en mal estado?
const estadoLibro = "regular";
const libroNoEstaEnMalEstado = !(estadoLibro === "malo");
console.log("¿El libro NO está en mal estado?", libroNoEstaEnMalEstado);

// Combinada: se puede poner en vitrina destacada si está en buen estado Y no hay muchos en estante
const pocosLibrosEnEstante = librosEnEstante < 50;
const apto_para_vitrina = (estadoUltimoLibro === "bueno") && pocosLibrosEnEstante;
console.log("¿El libro aplica para vitrina destacada?", apto_para_vitrina);

// Alerta de inventario: estante casi lleno O ventas del día bajas
const ventasBajas = ventasDelDia < META_VENTAS_DIARIA * 0.5;
const alertaGestion = casillasAgotandose || ventasBajas;
console.log("¿Se requiere alerta de gestión?", alertaGestion);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================

console.log("♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡");
console.log("                    RESUMEN DEL DÍA - Librería de Usados");
console.log("♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡");
console.log("  Libros vendidos:          " + totalLibrosVendidos);
console.log("  Espacio libre en estante: " + espacioDisponible + " libros");
console.log("  Ingresos brutos:         $" + ingresosTotales.toLocaleString("es-CO"));
console.log("  Costo pagado a vendors:  $" + costoCompras.toLocaleString("es-CO"));
console.log("  Ganancia neta:           $" + gananciaNeta.toLocaleString("es-CO"));
console.log("  Meta diaria:             $" + META_VENTAS_DIARIA.toLocaleString("es-CO"));
console.log("  ¿Meta superada?:         " + superMeta);
console.log("  Descuento mayorista:     " + (DESCUENTO_MAYORISTA * 100) + "%");
console.log("♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡♥｡･ﾟ♡ﾟ･｡♥｡");
console.log("");