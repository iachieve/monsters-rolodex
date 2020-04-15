import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search/search-box.component';
import { users } from './db/users'
import './App.css';

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  };

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ monsters: users }));

    this.setState((prevState, prevProps)=>{
      return {
        monsters: users.sort(()=> Math.random() -0.5)
      };
    });
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }
  componentDidUpdate(){
    console.log('object')
  }
  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(mon =>
      mon.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h2>{this.state.isLoading}</h2>
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
