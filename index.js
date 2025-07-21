async function getData(){
    response = await fetch("https://dummyjson.com/products")
    data = await response.json()
    card = document.getElementById('cardid')
    data.products.map(({title, price, description, rating, images ,reviews })=>{
        card.innerHTML  += `  <div class="product-card">
    <div class="product-image">
      <img src="${images[0]}" alt="${title}">
    </div>
    <div class="product-content">
      <h3 class="product-title">${title}</h3>
      <p class="product-description">${description}</p>
      <div class="product-price-rating">
        <span class="product-price">$${price}</span>
        <span class="product-rating">${rating} ⭐</span>
      </div>
      <p class="product-reviews">${reviews?.length || 0} reviews</p>
      <button class="btn btn-primary btn-block">Add to Cart</button>
    </div>
  </div>`
    })



}
getData()
