import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      username: 'CoreyGumbs',
      userData: []
    }
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(res=> {
      this.setState({userData:[res.data]});
    })
    .catch(err => console.log(err));
  }
 
  
  render(){
    console.log(this.state);
    return(
      <div>
        usercard
      </div>
    )
  }
}

export default App;
