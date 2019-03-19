import React, { Component } from 'react';
//import '../components/App.css';
import List from '../components/list';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

   onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  onDelete = (index) => {
    let listArr = this.state.items;
    listArr.splice(index, 1);
    this.setState({items: listArr})
    
    console.log(this.state.items)
  }
   

  render() {

    let items = this.state.items.map((val, key) => {
      return <item key={key} text={val}
        deleteMethod={ () => this.onDelete(key)} />
        console.log(items)
    })

     return (
      <div>
      <form className="App" onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.onChange} />
        <button>Submit</button>
      </form>
      <List items={this.state.items} />
      <button onClick={this.onDelete}>Delete</button>
      </div> 

    );
  }
}

