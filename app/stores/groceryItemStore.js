import {EventEmitter} from 'events';
import dispatcher from './../dispatcher';

const CHANGE_EVENT = 'change';

let items = [ 
    {name:"Ice Cream"},
    {name:"Waffles"},
    {name:"Candy", purchased:true},
    {name:"Snarks"},
    {name:"Diet Snarks"}
];

class GroceryItemStoreClass extends EventEmitter {
    constructor(){
        super();
    }

    getItems(){
        return items;
    }

    addChangeListner(cb){
        this.on(CHANGE_EVENT,cb);
    }

    removeChangeListner(cb){
        this.removeListener(CHANGE_EVENT, cb);
    }
   
}

const GroceryItemStore = new GroceryItemStoreClass();

dispatcher.register((event)=>{
    let split = event.type.split(':');
    if(split[0]==='grocery-item'){
        switch (split[1]) {
            case "add":            
                items.push(event.payload);
                GroceryItemStore.emit(CHANGE_EVENT);
                break;
        
            default:
                return true;
        }
    }
});

export default GroceryItemStore;