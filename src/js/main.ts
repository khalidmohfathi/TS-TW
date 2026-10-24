import { ApiResponse, Product } from "../interfaces/types";

(async function () {
  const productList = document.getElementById("product-listtttt");

  function displayProducts(products: Product[]) {
    let cartona: string = ``;
    for (const product of products) {
      cartona += `
      <a href="./pages/product.html?id=${product._id}" class="group bg-[#e3e3e0] rounded-3xl border border-transparent transition-all hover:border-primary hover:-translate-y-1 hover:shadow-2xl">
        <div class="w-3/4 mx-auto overflow-hidden">
          <img src="${product.imageCover}" class="group-hover:scale-110 transition-all" alt="">
        </div>
        <div class="bg-white p-5 rounded-b-3xl">
          <p class="text-xs font-semibold text-primary/80 uppercase tracking-widest">${product.category.name}</p>
          <h3 class="mt-3 text-lg font-medium h-15 border-b border-b-[#dedfd7]">${product.title}</h3>
          <div class="flex justify-between items-center mt-4">
            <p class="text-lg font-bold">${product.price} EGP</p>
            <div>
              <i class="fa-solid fa-star text-amber-400"></i>
              ${product.ratingsAverage}
            </div>
          </div>
        </div>
      </a>
      `;
    }
    if (productList) {
      productList.innerHTML = cartona;
    }
  }

  async function getAllProducts(): Promise<Product[]> {
    const result = await fetch(
      "https://ecommerce.routemisr.com/api/v1/products?limit=24",
    );
    const { data }: ApiResponse<Product[]> = await result.json();
    return data;
  }

  const products = await getAllProducts();

  displayProducts(products);
})();
