import React from 'react';
import './App.css';
import dummyStore from './dummy-store';
import Notelist from './Notelist/Notelist';

export default class App extends React.Component{
  state ={
    note: [],
    folders:[]
  }
  componentDidMount(){
    setTimeout(() => this.setState(dummyStore),1000)
  }

  render(){
    const {notes}= this.state
    return (
      <>
      <heading>
        <h1>Noteful</h1>
      </heading>
      <Notelist notes={notes}/>
      </>
    )
  }
}

