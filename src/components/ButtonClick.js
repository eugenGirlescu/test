import React from 'react';

class ButtonClick extends React.Component {
    handleIncrement = () => {
        this.props.increment(this.props.value);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleIncrement}>+{this.props.value}</button>
            </div>
        );
    }
}
export default ButtonClick;