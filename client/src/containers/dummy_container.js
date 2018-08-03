import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nameOfActionCreator } from '../actions/index';
import { bindActionCreators } from 'redux';

class ComponentName extends Component {
    constructor(props) {
        super(props)
        
        this.state = { term: ''}
        
        this.onInputChange = this.onInputChange.bind(this);
    }
    
    onInputChange(event) {
        this.setState({ term: event.target.value})
    }
    
    onFormSubmit(event) {
        event.preventDefault();
    }
    
    render() { 
        return (
            <div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        whatYouWantPropsToBeCalled: state.pieceOfGlobalState
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ whatYouWantPropsToBeCalled: nameOfActionCreator }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentName);