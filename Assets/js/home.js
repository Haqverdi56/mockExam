const BASE_URL = 'http://localhost:3000';

let products = document.querySelector('.products');
console.log(products);
async function getData() {
	let resp = await axios.get(`${BASE_URL}/products`);
	drawList(resp.data);
}
getData();

function drawList(data) {
	products.innerHTML = '';

	data.forEach((el) => {
		products.innerHTML += `
		<div class="product">
							<div class="img">
								<img
									src="${el.img}"
									alt=""
								/>
							</div>
							<a href="details.html?id=${el.id}">${el.title}</a>
							<div class="icons">
								<p><i class="fa-solid fa-star"></i>5.0</p>
								<p><i class="fa-solid fa-heart"></i>29</p>
							</div>
							<p>${el.desc}</p>
							<div class="buttons">
								<button>CART</button>
								<button>VIEW</button>
							</div>
						</div>
		`;
	});
}
