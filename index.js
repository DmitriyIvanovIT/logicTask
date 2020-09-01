'use strict';

const func = (hour, minutes) => {
    if (hour > 12) {
        hour = hour - 12;
    }

    let res =  (hour+(minutes/60))*30 - minutes*6;

    if (res < 0) {
        res *= -1;
    }

    console.log(res);    
};

func(6, 0);
func(3, 0);
func(3, 30);