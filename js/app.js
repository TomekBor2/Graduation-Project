let productsHTML = ""

products.forEach((product) => {
    productsHTML += `
<div class="col-md-6 col-lg-4 col-xl-3 py-3 ${product.category}">
<div class="collection-img position-relative">
    <img src="${product.image}" class = "w-100">
    <span class="position-absolute sale-btn bg-primary">sale</span>
</div>
<div class="text-center">
    <div class="rating ">
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
        <span><i class="fas fa-star"></i></span>
    </div>
    <p class="my-1">${product.name}</p>
    <span class="fw-bold">$ ${product.priceCents / 100}</span>
</div>
<div class = "text-center">
<button class = "btn btn-primary mt-3 js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
</div>
</div>
    `
})

document.querySelector(".collection-list").innerHTML = productsHTML
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
        console.log("clicked")
        console.log(button.dataset)
    })
})