import React, {useEffect, useState } from 'react';
import Item from './Item';

const Shop = ({match})=> {

    const shopURL = 'https://api.edamam.com/search';
    const key = '87ea9972';
    const applicationKey = 'b5185cdc79af3b0e68168a01d77023ad';

    console.log(match);
    const [items, setItems] = useState([{
        recipe : {}
    }]);

    useEffect( ()=> {
        fetchItems();
    }, [match.params]);

    const fetchItems = async()=> {
      const data = await fetch(`${shopURL}?q=${match.params.id}&app_id=${key}&app_key=${applicationKey}`);
      const item = await data.json();
      setItems(item.hits);
    };

    return (
        <div className="items">

            {items.map( (item, id) =>(
                <Item key={id} itemDetail={item} />
            ))}

        </div>
    )
};

export default Shop;

