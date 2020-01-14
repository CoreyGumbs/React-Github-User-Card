import React from 'react';

//dependecies
import axios from 'axios';

//components
import UserSearchBar from './components/UserSearch/UserSearchBar';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      username: 'CoreyGumbs',
      userData: {}
    }
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(res=> {
      this.setState({userData: res.data});
    })
    .catch(err => console.log(err));
  }
 
  
  render(){
    console.log(this.state);
    return(
      <div>
        <UserSearchBar/>
        {this.state.userData.login}
      </div>
    )
  }
}

export default App;
