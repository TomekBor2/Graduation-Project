let shop = document.getElementById('shop')
let counter = 0

let shopItemsData = [
  {
    id: "1",
    name: "Casual shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    img: "images/img-1.jpg",
  },
  {
    id: "2",
    name: "Office shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    img: "images/img-2.jpg",
  },
  {
    id: "3",
    name: "T-shirt",
    price: 55,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    img: "images/img-3.jpg",
  },
  {
    id: "4",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    img: "images/img-4.jpg",
  },
]

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x)=>{
        let {id, name, price, desc, img} = x;
    return `
    <div id=product-id-${id} class="item">
        <img width="220" src="${img}" alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0</div>
                    <i id=${id} class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `}).join(""))
}

generateShop()

let plusIcon = Array.from(document.querySelectorAll('.bi-plus-lg'))
let quantity = Array.from(document.querySelectorAll('.quantity'))

function increment() {
    counter++
    quantity[id].innerText += counter
}

plusIcon.forEach((i) => {
    i.addEventListener('click', (e) => {
        console.log('increment')
        increment()
    })
})

// let increment = (id) => {
//   console.log(id)
// };
let decrement = (id) => {
  console.log(id)
};
// let update = () => {};