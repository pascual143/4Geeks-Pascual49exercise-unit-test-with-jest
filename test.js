// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('la suma de 14 + 9 es igual 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
//Ejercicios de conversion de monedas

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One euro should be 156.5 yens", function() {
    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen(1.07);

    const expected = 1.07 * 156.6 / 1.07;

    expect(fromDollarToYen(1.07)).toBe(15.66); 
})

test("One euro should be 0.87 Gbp", function() {
    const { fromYenToPound } = require('./app.js');

    const Gbp = fromYenToPound(156.5);

    const expected = 156.5 * 0.87 / 156.5;

    expect(fromYenToPound(156.5)).toBe(0.87); 
})