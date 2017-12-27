console.log("hello from jsx!");
import React from 'react';
import {render} from 'react-dom';
import GroceryItemList from './components/groceryItemList';

const initial = [
    {name:"Ice Cream"},
    {name:"Waffles"},
    {name:"Candy", purchased:true},
    {name:"Snarks"},
    {name:"Diet Snarks"}
];

render(<GroceryItemList items={initial} />,app);
