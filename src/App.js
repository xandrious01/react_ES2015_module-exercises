import React from 'react';
import fruits from './foods';
import { randomChoice, removeItem } from './helpers';


function App(){
    let randomFruit = randomChoice(fruits);
    console.log(`I'd like one ${randomFruit}, please.`);
    console.log(`Here you go: one ${randomFruit}!`);
    console.log("Delicious, may I have another?");
    removeItem(fruits, randomFruit);
    console.log(`I'm sorry, we're all out. We only have these left: ${fruits}`)

}

export default App;
