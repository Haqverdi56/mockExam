let buttons = document.querySelectorAll('.btn');
let boxes = document.querySelector('.card-boxes');
let arr = [];

console.log(boxes);
const BASE_URL = 'http://localhost:3000';
async function getData() {
	const res = await axios.get(`${BASE_URL}/menu`);
	arr = res.data;
	console.log(res.data);
	drawList(res.data);
}
getData();

buttons.forEach((e) =>
	e.addEventListener('click', function () {
		let filtered = arr.filter(
			(item) =>
				e.innerText.toLocaleLowerCase() === item.category.toLocaleLowerCase()
		);
		drawList(filtered);

		console.log(filtered);
	})
);

function drawList(data) {
	boxes.innerHTML = '';

	data.forEach(
		(el) =>
			(boxes.innerHTML += `<div class="box">
       <p>${el.title}kjkjh</p>
       <div class="text">
           <span>
           
           ${el.desc}</span>
           <div class="dots">........................................</div>
           <span>$${el.price}</span>
       </div>
   </div>`)
	);
}
