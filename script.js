let titleCount = 1;
let totalPrice = 0;

// add eventListener for each product and calculate total price
const productCards = document.querySelectorAll('.product-card');
for (let index = 0; index < productCards.length; index++) {
    const productCard = productCards[index];
    productCard.addEventListener('click', function () {
        // get the product title from product card
        const title = productCard.querySelector('h4').innerText;

        // get the product price from product card
        const price = parseFloat(productCard.querySelector('p').innerText.split(' ')[0]);

        // add and show title and price in title container
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = titleCount + '. ' + title + '- ' + price + ' TK';
        titleContainer.appendChild(p);
        titleCount++;

        // calculate and show total price
        totalPrice += price;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    })
}

// calculate discount, total pay and show corresponding
const btnCoupon = document.getElementById('coupon-btn');
btnCoupon.addEventListener('click', function () {
    // get coupon code from input
    const couponValue = document.getElementById('coupon-input').value;
    const couponCode = couponValue.split(" ").join("").toUpperCase();

    // check if total price >= 4000
    if (totalPrice >= 4000) {
        // check if coupon code is matched
        if (couponCode === 'SALE4000') {
            // calculate 20% discount and show it
            const discount = totalPrice * 0.2;
            document.getElementById('discount').innerText = discount.toFixed(2);

            // calculate total pay and show it
            const totalPay = totalPrice - discount;
            document.getElementById('total-pay').innerText = totalPay.toFixed(2);

            // clear the coupon input value
            document.getElementById('coupon-input').value = '';
        }
        else {
            document.getElementById('coupon-input').value = '';
            alert('Invalid Coupon Code');
        }
    }
    else {
        document.getElementById('coupon-input').value = '';
        alert('Please spend at least 4000 TK to avail discount.');
    }
})