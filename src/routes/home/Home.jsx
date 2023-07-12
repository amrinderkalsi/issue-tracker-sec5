import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import IssueList from '../../components/IssueList';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Outlet />
        <IssueList />
      </div>
    );
  }
}

export default Home;
