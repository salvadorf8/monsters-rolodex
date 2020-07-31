import './App.css';

import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
            searchField: '',
            myNumber: 0
        };
    }

    handleClick = (props) => {
        // use this syntax when there is calculation happening in a setState as shown below
        this.setState(
            (prevState, prevProps) => {
                return { myNumber: prevState.myNumber + prevProps.increment };
            },
            () => console.log(this.state.myNumber)
        );
    };

    handleChange = (e) => {
        this.setState({ searchField: e.target.value }, () => console.log(this.state.searchField));
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className='App'>
                <h1>Monsters</h1>
                <SearchBox placeholder='search monsters' value={this.state.searchField} handleChange={this.handleChange} />
                <button onClick={this.handleClick}>increment - {this.state.myNumber}</button>
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
