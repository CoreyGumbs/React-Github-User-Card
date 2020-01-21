import React from 'react';

//dependecies
import axios from 'axios';

//css
import './css/styles.css'

//components
import UserHeader from './components/UserHeader/UserHeader';
import UserCard from './components/UserCard/UserCard';
import UserFollowers from './components/UserFollowers/UserFollowers';
import GitHubCalendar from 'react-github-calendar';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      username: 'CoreyGumbs'.toLowerCase(),
      userData: {},
      userFollowers: []
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
    const {username, userData, userFollowers} = this.state;

    //console.log(username);
    return(
      <main className="container">
        <UserHeader handleUserSearch={this.handleUserSearch}/>
        <section className="user-card-container">
          <UserCard user={userData} />
        </section>
        <section className="user-info-container">
          <div className="github-calendar">
            <h1>GitUser Contributions:</h1>
            <div className="github-contributions">
              <GitHubCalendar username={username} fontSize={18} blockSize={25}/>
            </div>
          </div>
          <UserFollowers followers={userFollowers}/> 
        </section>
      </main>
    )
  }
}

export default App;
