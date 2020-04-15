import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search/search-box.component';
import {users} from './db/users'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ monsters: users }));

    this.setState({ monsters: users});
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }
  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(mon =>
      mon.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
