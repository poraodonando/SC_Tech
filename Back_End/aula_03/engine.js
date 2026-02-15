const produtos = [
    {id:1, nome:"Camiseta", preco:25.99},  
    {id:2, nome:"Short", preco:19.99},  
    {id:3, nome:"Tenis", preco:179.99}  
];

const produtos_JSON = JSON.stringify(produtos);

console.log(produtos)
console.log(produtos_JSON)

const produtos_obj = JSON.parse(produtos_JSON);
console.log(produtos_obj)