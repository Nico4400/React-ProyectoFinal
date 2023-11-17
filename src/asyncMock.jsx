// Agrego los productos
// const productos = [
//     {
//         id: '1',
//         producto: "Tarjeta Gráfica",
//         categoria: "Componentes",
//         precio: 399.99,
//         marca: "Nvidia",
//         imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvPAKNmnQlCve9dch13LnfxAa7zgRe-HlVZC6FA0N5Wjev7yx4Rp6WIF0RpoDVtmrlbI&usqp=CAU",
//         descripcion: "Potente tarjeta gráfica para gaming de última generación.",
//         stock: 10,
//     },
//     {
//         id: '2',
//         producto: "Monitor",
//         categoria: "Periféricos",
//         precio: 249.99,
//         marca: "Dell",
//         imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRba6z91CtHt7c_XzTcLPoJOHamrgMjZut-ROOjGVSm5HsNehvUOa1UDiL3HcQz0Hjn3xw&usqp=CAU",
//         descripcion: "Monitor de alta resolución y excelente calidad de color.",
//         stock: 5,
//     },
//     {
//         id: '3',
//         producto: "SSD",
//         categoria: "Almacenamiento",
//         precio: 89.99,
//         marca: "Samsung",
//         imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15CX2XBNHsnuhW434VADk_UXbE8zOf321d_sw-jniY895l7BP-_UICm1CSDdi6V4jec4&usqp=CAU",
//         descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
//         stock: 6,
//     },
//     {
//         id: '4',
//         producto: "Teclado Mecánico",
//         categoria: "Periféricos",
//         precio: 129.99,
//         marca: "Corsair",
//         imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewf6OvTG4Owcuaqleus6s1bbWDjGcunfvNklXHVpDIQcxDLJYrOzucfw4r2Hc1xkw0MQ&usqp=CAU",
//         descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
//         stock: 2,
//     },
//     {
//         id: '5',
//         producto: "Procesador",
//         categoria: "Componentes",
//         precio: 299.99,
//         marca: "Intel",
//         imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaYVa_NpwV8BYjr9JRIKF-ymtNOYnWMHTCVgjMPzX18v2tSuaRdK0O7oSzgzuNTni_EA&usqp=CAU",
//         descripcion: "Procesador de alto rendimiento con múltiples núcleos para una ejecución rápida y eficiente de aplicaciones y tareas complejas.",
//         stock: 7,
//     },
//     {
//         id: '6',
//         producto: "Mouse Inalámbrico",
//         categoria: "Periféricos",
//         precio: 39.99,
//         marca: "Logitech",
//         imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7t-tqHvdcKks3hRYcWwVLKNeNUW91-S5Pm_42oqfd657vbjqmCaC6XaU_5vxkRnDHaks&usqp=CAU",
//         descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
//         stock: 8,
//     },
//     {
//         id: '7',
//         producto: "Memoria RAM",
//         categoria: "Componentes",
//         precio: 79.99,
//         marca: "Crucial",
//         imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOdaNUzvmky9WjwMw8VEMq0N91QIkwGOXoPqByxRI7XRvqUv39EMtvPMUc0WdeQmW_gE&usqp=CAU",
//         descripcion: "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
//         stock: 10,
//     },
//     {
//         id: '8',
//         producto: "Disco Duro Externo",
//         categoria: "Almacenamiento",
//         precio: 119.99,
//         marca: "Western Digital",
//         imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvM6wQkEzThaDrhBoaesCPrFl0i2TeAsmN-05mBTe56mqoAfCi46J_3zAil-O6-bbmqQg&usqp=CAU",
//         descripcion: "Disco duro externo de gran capacidad para almacenar tus archivos.",
//         stock: 5,
//     },
//     {
//         id: '9',
//         producto: "Fuente de Alimentación",
//         categoria: "Componentes",
//         precio: 89.99,
//         marca: "EVGA",
//         imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHrgO7n72Rk7XqepZmCzrdMNBqpH2O7rPog&usqp=CAU",
//         descripcion: "Fuente de alimentación eficiente y de alta potencia.",
//         stock: 1,
//     },
//     {
//         id: '10',
//         producto: "Auriculares Gaming",
//         categoria: "Audio",
//         precio: 69.99,
//         marca: "Razer",
//         imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxdL_87yRs5CkHOYDY-GPNAUwhIMCn6E9NUxwiZK6Un27FgkL9HrA045LsyVAcHmBiOE&usqp=CAU",
//         descripcion: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
//         stock: 15,
//     },
// ]

// // Agrego array de imagenes para carrusel
// export const imagenesConCategoria = productos
// .filter(producto => producto.imagen !== null)
// .map(prod => ({imagen: prod.imagen, categoria: prod.categoria}))

// // Agrego array de categorias
// export const categorias = [...new Set(productos.map(prod => prod.categoria).filter(categoria => categoria !== null))]


// export const getProductos = () =>{
//     return new Promise(( resolve ) => {
//         setTimeout(() => {
//             resolve(productos)
//         }, 200)
//     })
// }

// export const getProductoById = (productId) =>{
//     return new Promise(( resolve ) => {
//         setTimeout(() => {
//             resolve(productos.find (prod => prod.id === productId))
//         }, 200)
//     })
// }

// export const getProductoByCategory = (category) =>{
//     return new Promise(( resolve ) => {
//         setTimeout(() => {
//             resolve(productos.filter (prod => prod.categoria === category))
//         }, 200)
//     })
// }