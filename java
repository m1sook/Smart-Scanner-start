const form = document.querySelector('form');
const productInfo = document.querySelector('#product-info');

form.addEventListener('submit', e => {
    e.preventDefault();
    const barcode = form.elements.barcode.value;
    // запрос на сервер для получения информации о товаре по штрих-коду
    fetch(`/api/products?barcode=${barcode}`)
        .then(response => response.json())
        .then(product => {
            // отображение информации о товаре
            productInfo.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Цена: ${product.price}</p>
                <p>Доступность: ${product.inStock ? 'в наличии' : 'нет в наличии'}</p>
                <button>Добавить в корзину</button>
            `;
        })
        .catch(error => console.error(error));
});
