import React from 'react';
import PageHeader from './PageHeader/';
import PageBody from './PageBody/';
import PageFooter from './PageFooter/';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentSelection: 0,
    };
  }

  handleClick(i) {
    this.setState({
      contentSelection: i,
    });
  }

  render() {
    return(
      <div className="App">
        <PageHeader onClick={(i) => this.handleClick(i)} />
        <PageBody contentSelection={this.state.contentSelection} />
        <PageFooter />
      </div>
    );
  }
}

export default App;
