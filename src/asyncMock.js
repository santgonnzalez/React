// El mock es un Codigo de simulacion 

const products = [
{
    id: '1' ,
    name: 'Iphone 14' ,
    price: 1000 ,
    category:'phone',
    img:'https://http2.mlstatic.com/D_NQ_NP_651710-MLM51559386433_092022-O.jpg',
    stock: 25,
    description: 'Esto de arriba es un iphone 14.'
},
{
    id: '2',
    name: 'MacBook',
    price: 2000,
    category: 'laptop',
    img: 'https://http2.mlstatic.com/D_NQ_NP_868622-MLA48622311679_122021-O.webp',
    stock: 12,
    description:'Esto de arriba es una MacBook.'
},
{
    id: '3',
    name: 'Apple Watch', 
    price: 800,
    category: 'smartwatch',    
    img: 'https://http2.mlstatic.com/D_NQ_NP_876866-MLA48087748877_112021-O.jpg',
    stock: 30,
    description:'Esto de arriba es una Apple watch.'
}
]

// Simulacion de una proxima api, la simulamos con una promesa y una demora de un 1,5 segundos
export const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 1500)
    })
}