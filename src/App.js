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
      userData: {},
      userFollowers: {}
    }
  }

  componentDidMount(){
    const {username} = this.state;
 
    axios.all([
      axios.get(`https://api.github.com/users/${username}`), 
      axios.get(`https://api.github.com/users/${username}/followers`)
    ])
    .then(res => {
      this.setState({userData: res[0].data});
      this.setState({userFollowers: res[1].data});
    })
    .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState){
    const {username} = this.state;
    if(this.state.username !== prevState.username){
      axios.all([
        axios.get(`https://api.github.com/users/${username}`), 
        axios.get(`https://api.github.com/users/${username}/followers`)
      ])
      .then(res => {
        this.setState({userData: res[0].data});
        this.setState({userFollowers: res[1].data});
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
