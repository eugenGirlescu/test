import React from 'react';
import './DisplayCar.css';
import DisplayText from './DisplayValue';
import ButtonClick from './ButtonClick';
import EditMode from './EditMode';

class DisplayCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      counter: 0,
      isInEditMode: false
    }
    this.myRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let name = document.getElementById(this.props.id1).value;
    this.setState({
      value: name
    })
  }

  increment = (lastValue) => {
    this.setState({
      counter: this.state.counter + lastValue
    })
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    })
  }

  updateComponentValue = () => {
    this.setState({
      isInEditMode: false,
      value: this.myRef.current.value
    })
  }

  renderEditView = () => {
    return (
      <div>
        <input type="text" defaultValue={this.state.value} ref={this.myRef} />
        <button onClick={this.changeEditMode}>Cancel</button>
        <button onClick={this.updateComponentValue}>Save</button>
      </div>
    )
  }

  renderDefaultView = () => {
    return (
      <div onDoubleClick={this.changeEditMode}>
        {this.state.value}
      </div>
    )
  }

  render() {
    return (
      <div className="form">
        <form id="class">
          Name: <input id={this.props.id1} type="text" /><br />
        </form>
        <button onClick={this.handleSubmit}>Submit</button><br />
        <div>
          Numar de zile:
          <ButtonClick increment={this.increment} value={1} />
          <ButtonClick increment={this.increment} value={5} />
        </div>
        <DisplayText message={this.state.counter} />
        <EditMode isInEditMode={this.state.isInEditMode}
          renderEditView={this.renderEditView}
          renderDefaultView={this.renderDefaultView}
        />
      </div>
    );
  }
};
export default DisplayCar;
