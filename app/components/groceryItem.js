import React from 'react';
import PropTypes from 'prop-types';

const GroceryItem = ({item}) => {
    return(
        <h4 className={item.purchased ? "strikethrough" : ""}>{item.name}</h4>
    );
};

GroceryItem.propTypes = {
    item: PropTypes.object
}

export default GroceryItem;


