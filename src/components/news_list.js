import React from 'react';
import NewsItem from './news_list_item'

// Create functional (stateless components) with ES6 arrow functions
const NewsList = (props) => {

    // Make a loop to go through the array using an ES6 arrow function and map method
    const items = props.news.map((item)=>{
        return(
            <NewsItem key={item.id} item={item} />
        )
    })
    // Render the iterated object
    return(
        <div>
            {items}
        </div>
    )
}
export default NewsList;