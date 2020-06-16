import React from 'react';

class EditMode extends React.Component {
    render() {
        return (
            this.props.isInEditMode ?
                this.props.renderEditView()
                :
                this.props.renderDefaultView()
        );
    }
}
export default EditMode;