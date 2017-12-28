console.log("hello from jsx!");
import React from 'react';
import {render} from 'react-dom';
import GroceryItemList from './components/groceryItemList';
import groceryItemStore from './stores/groceryItemStore';

let initial = groceryItemStore.getItems();

function callRender(){
    render(<GroceryItemList items={initial} />,app);
}

groceryItemStore.addChangeListner(()=>{
    initial = groceryItemStore.getItems();
    callRender();
})

callRender();

