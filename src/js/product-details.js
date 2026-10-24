(async function () {
    const productCard = document.getElementById("product-card");
    function displayProduct(product) {
        const cartona = `
      <div>
        <div class="flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-[#f0f1ec] p-8 sm:p-12">
          <img
            src="${product.imageCover}"
            alt="${product.title}"
            class="max-h-full w-full object-contain"
          >
        </div>
        <div class="mt-4 grid grid-cols-3 gap-3">
          <div class="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border-2 border-primary bg-[#f0f1ec] p-3">
            <img src="https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg" alt="Woman shawl, front view" class="max-h-full w-full object-contain">
          </div>
          <div class="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-[#f0f1ec] p-3">
            <img src="https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg" alt="Woman shawl, alternate view" class="max-h-full w-full object-contain">
          </div>
          <div class="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-[#f0f1ec] p-3">
            <img src="https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg" alt="Woman shawl, close view" class="max-h-full w-full object-contain">
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center py-2 lg:py-8">
        <p class="text-xs font-bold uppercase tracking-[.2em] text-primary/80">${product.category.name}</p>
        <h1 class="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">${product.title}</h1>
        <p class="mt-3 text-sm text-gray-500">By ${product.brand.name}</p>

        <div class="mt-7 flex flex-wrap items-center gap-3 text-sm">
          <span class="text-lg text-amber-400" aria-label="Rating 4.1 out of 5">★</span>
          <span class="font-semibold">${product.ratingsAverage}</span>
          <span class="text-gray-500">· ${product.ratingsQuantity} ratings</span>
        </div>

        <p class="mt-8 text-4xl font-semibold tracking-tight text-primary">${product.price} <span class="text-xl font-medium">EGP</span></p>

        <div class="my-9 h-px bg-[#e9e8e1]"></div>

        <h2 class="text-lg font-semibold">About this product</h2>
        <p class="mt-3 max-w-lg leading-7 text-gray-600">${product.description}</p>
        
        <a href="../index.html" class="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white">
          <span aria-hidden="true">←</span> Back to products
        </a>
      </div>
    
    `;
        if (productCard) {
            productCard.innerHTML = cartona;
        }
    }
    async function getSpecificProduct(id) {
        const result = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
        const { data } = await result.json();
        return data;
    }
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id) {
        const product = await getSpecificProduct(id);
        displayProduct(product);
    }
})();
export {};
