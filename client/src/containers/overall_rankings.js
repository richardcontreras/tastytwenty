import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOverallRankings } from "../actions/index";
import { bindActionCreators } from "redux";

import axios from "axios";

class OverallRankings extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchOverallRankings();
  }

  renderList() {
    return this.props.overallRankings.map(item => {
      return (
        <li key={item._id}>
          {item.name} ({item.overall.elo})
        </li>
      );
    });
  }

  render() {
    if (!this.props.overallRankings) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Overall Rankings:</h1>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    overallRankings: state.overallRankings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchOverallRankings: fetchOverallRankings
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverallRankings);
