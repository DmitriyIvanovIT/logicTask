'use strict';

const cartPrice = (price, count, promo) => {
    if (count >= 5 && count < 10) {
        price *= 0.95;
    } else if (count >= 10) {
        price *= 0.9;
    }

    if (price > 100000) {
        let temp = price - 100000;
        price -= temp;
        temp *= 0.8;
        price += temp;
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