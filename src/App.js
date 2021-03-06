import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Alex', age: 26 },
      { name: 'Max', age: 29 },
      { name: 'Manu', age: 30 }
    ],
    otherStates: 'Some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    // Don't do this: this.state.person[0].name = 'Alexander';
    this.setState ( {
            persons: [
              { name: newName, age: 26 },
              { name: 'Max', age: 29 },
              { name: 'Manu', age: 35 }
            ]
       }
    )
  }

  nameChangeHandler = (event) => {
    this.setState ( {
      persons: [
          { name: 'Alex', age: 26 },
          { name: event.target.value, age: 29 },
          { name: 'Manu', age: 35 }
        ]
      })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
              <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age} 
                />
              <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind( this, 'Max!')}
                  changed ={this.nameChangeHandler} >My Hobbies: Racing
              </Person>
              <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age} 
                />
        </div> 
      );
    }

    return (
      <div className="App">
         <h1>Hi, I'm a React App</h1>
         <p>This is really working.</p>
         <button 
         style={style}
         onClick={this.togglePersonsHandler}>Toggle Persons</button>
         {persons}
      </div>
    );

   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?') );
  }
}

export default App;
