import React from 'react';

const randomChoice = (items) => {
    let idx = Math.floor(Math.random()*items.length)+1;
    let choice = items[idx];
    return choice;
}

const removeItem = (items, item) => {
    let idx;
    for (let i of items){
        if (i === item) {
            idx = items.indexOf(i);
            items.splice(idx, 1);
        }
    }
}

export { randomChoice, removeItem };