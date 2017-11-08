// Using ES6 we can target the Component from React Object and import it there for
// we don't have to use it on the declaration of the class as React.Component
import React,{ Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);

        // Create a state for this component
        this.state = {
            keywords: ''
        }
    }

    // This event that we pass through the function is not part of the usual DOM Window Object
    // it is a SyntheticEvent that is part of the React Virtual DOM
    inputChange(event) {
        // Always change the state with the setState method
        // This method re-renders whatever is on the render method8
        this.setState({keywords: event.target.value});
        this.props.newsSearch(event.target.value)
    }

    render() {
        // Working with inline styles
        /*const styles = {
            header: {
                backgroundColor: '#03a9f4',
            },
            logo: {
                color: 'white',
                fontFamily: 'Anton',
                textAlign: 'center'
            }
        }
        Then we call the style object in each JSX tag
        */
        return(
            <header>
                <div className="logo"
                onClick={()=>console.log("clicked")}
                >REACT News Filter</div>
                <input onChange={this.inputChange.bind(this)}/>
                <div>{this.state.keywords}</div>
            </header>
        )
    }
}

// This way we can use Header in other components
export default Header;