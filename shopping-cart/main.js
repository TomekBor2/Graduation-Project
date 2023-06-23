let shop = document.querySelector('#shop')

let shopItemsData = [
    {
    id:"dsfsdfsd",
    name: "Casual shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    img: "images/img-1.jpg"
},
{
    id:"dsfsdfdfd",
    name: "Office shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    img: "images/img-2.jpg"
},
{
    id:"dsfsdgfdg66",
    name: "T-shirt",
    price: 55,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    img: "images/img-3.jpg"
},
{
    id:"dsdffdg66dj",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    img: "images/img-4.jpg"
}
];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x)=>{}))
}