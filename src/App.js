import React from 'react';

//dependecies
import axios from 'axios';

//components
import UserSearchBar from './components/UserSearch/UserSearchBar';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      username: 'CoreyGumbs'.toLowerCase(),
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

  componentDidUpdate(prevProps, prevState){
    if(this.state.username !== prevState.username){
      axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res=> {
        this.setState({userData: res.data});
      })
      .catch(err => console.log(err));
    }
  }
 
  handleUserSearch = username => {
    this.setState({username: username});
  }
  
  render(){
    console.log(this.state);
    return(
      <div>
        <UserSearchBar handleUserSearch={this.handleUserSearch}/>
        {this.state.userData.login}
      </div>
    )
  }
}

export default App;
