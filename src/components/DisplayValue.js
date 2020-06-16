import React from 'react';

class DisplayValue extends React.Component {
    render() {
        return (
            <div>
                {this.props.message} zile
            </div>
        );
    }
}
export default DisplayValue;