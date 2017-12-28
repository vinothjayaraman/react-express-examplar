import React from 'react';

class GroceryListAddItem extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state={input:""};
        this.handleInputName = this.handleInputName.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleInputName(e){
        this.setState({input: e.target.value});
    }

    addItem(e){
        e.preventDefault();
        console.log("Adding items.." + this.state.input);;
        
    }

    render()
    {
        return(
            <div className="grocery-addItem">
                <form onSubmit={this.addItem}>
                    <input value={this.state.input} onChange={this.handleInputName} />
                    <button>Add Item</button>
                </form>
            </div>
        );
    }
};

export default GroceryListAddItem;