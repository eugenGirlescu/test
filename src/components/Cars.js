import React from 'react';
import DisplayCar from './DisplayCar';

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: []
    }
  }

  appendChild = () => {
    this.setState({
      children: [...this.state.children, <DisplayCar />]
    })
  }

  render() {
    const child = this.state.children.map((child,index) => <DisplayCar key ={index} id1={index}/>)
    return (
      <div>
        <button onClick={this.appendChild}>Add</button>
         {child}
      </div>

    );
  }
};

export default Cars;