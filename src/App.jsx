import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state={
      setup:'Why do chicken coops only have two doors?',
      punch:'Click Reload :)',
      emo:'',
    }
  }
  show(){
    var url='https://safe-falls-22549.herokuapp.com/random_joke'

    axios.get(url).then((x)=>{
      this.setState({
        setup:x.data.setup,
        punch:x.data.punchline,
        emo:<span role="img" aria-label="rotf"></span>
      })
    })
  }
  render() {
    return (
      <div>
      <center>
        <div class="card rounded" style={{width:'30rem'}}>
        
        <div class="card-body">
          <h5 class="card-title">{this.state.setup}</h5>
          <p class="card-text">{this.state.punch} {this.state.emo}</p>
          <button onClick={()=>{this.show()}}class='btn btn-danger'>Reload<span/></button>
        </div>
        </div>
      </center>
      </div>
    );
  }
}

export default App;