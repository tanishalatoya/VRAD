import React from 'react';
import './MainContainer.css';

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      areas: []
    }
  }
}

componentDidMount() {
  //fetch goes here...
}

  render() {
    <AreasContainer areas={this.state.areas}/>
  }
};

export default MainContainer;
