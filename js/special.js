let specialHTML = ""

special.forEach((special) => {
    specialHTML += `

        <div class="col-md-6 col-lg-4 col-xl-3 p-2 best">
            <div class="special-img position-relative">
                <img src="${special.image}" class = "w-100">
                <span class="position-absolute heart-btn"><i class="fas fa-heart"></i></span>
            </div>
            <div class="text-center">
                <p class="my-1">${special.name}</p>
                <span class="fw-bold">$ ${special.priceCents / 100}</span>
                <div class="cart-btn">
                    <button type="button" class="btn m-2 js-add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    `
})

document.querySelector(".special-list").innerHTML = specialHTML

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      console.log("clicked")
      console.log(button.dataset)
  
      const productId = button.dataset.productId
      let matchingItem
  
      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item
        }
      })
  
      if (matchingItem) {
        matchingItem.quantity += 1
      } else {
        cart.push({
          productId: productId,
          quantity: 1,
        })
      }
  
      let cartQuantity = 0
  
      cart.forEach((item) => {
        cartQuantity += item.quantity
      })
      localStorage.setItem('data', JSON.stringify(cart))
      calculation()
    })
  })

  let calculation = () => {
    let cartIcon = document.querySelector('.js-cart-quantity')
    cartIcon.innerHTML = cart.map((x) => x.quantity).reduce((x, y) => x + y, 0)
  }

  calculation()