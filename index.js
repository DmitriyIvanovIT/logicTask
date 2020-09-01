'use strict';

const cartPrice = (price, count, promo) => {
    if (count >= 5 && count < 10) {
        price *= 0.95;
    } else if (count >= 10) {
        price *= 0.9;
    }

    if (price > 100000 && price < 150000) {
        price *= 0.8;
    } else if (price >= 150000) {
        price -= 50000;
    }

    if (promo !== undefined) {
        if (promo === '15' && price >= 25000) {
            price *= 0.85;
        } else if (promo === '100') {
            if (price <= 100) {
                price = 0;
            } else {
                price -= 100;
            }
        }
    }

    return price;
};

console.log(cartPrice(150000, 5, '100'));