import React from 'react';
import {Link} from 'react-router-dom';

const Item = ({itemDetail})=>{

        return (
            <li>
                <h3>{itemDetail.recipe.label}</h3>
                <img src={itemDetail.recipe.image} alt=''/>
            </li>
        )

};

export default Item;