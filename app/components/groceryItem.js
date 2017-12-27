import React from 'react';
import PropTypes from 'prop-types';

const GroceryItem = ({item}) => {
    return(
        <div>{item.name}</div>
    );
};

GroceryItem.propTypes = {
    item: PropTypes.object
}

export default GroceryItem;


