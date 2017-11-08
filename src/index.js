import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import components and DB
import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // we create the filtered object to keep the news object INMUTABLE
            news: JSON,
            filtered: JSON
        }
    }
    // Create a function to filter the news and call via Props on the <Header /> component
    filterNews(keywords) {
        // We use the ES6 filter() helper to gilter the items of an array, it always have to return something
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1;
        })
        // The commented line below is the same as the one after with ES6 if key and value have the same name we can just use one
        // this.setState({filtered: filtered})
        this.setState({filtered})
    }

    render() {
        return( 
            <div>
                <Header newsSearch={keywords=>this.filterNews(keywords)} />
                <NewsList news={this.state.filtered} />
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
);