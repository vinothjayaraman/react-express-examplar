import guid from 'guid';
import { console } from 'browserify/lib/builtins';

let listeners = {};

export default {
    register: function(cb){
        let id = guid.raw();
        listeners[id] = callback;
        return id;
    },
    dispatch: function(payload){
        console.info("Dispatching...");
        for (let id in listeners) {
            let listener = listeners[id];
            listener(payload);            
        }
    }
}