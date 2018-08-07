import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRankings } from "../actions/index";
import { bindActionCreators } from "redux";

import axios from "axios";

class Rankings extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRankings(`${this.props.category}`);
  }

  renderList() {
    return this.props.rankings.map(item => {
      return (
        <li key={item._id}>
          {item.name} ({item[`${this.props.category}`].elo})
        </li>
      );
    });
  }

  render() {
    if (!this.props.rankings) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Best {this.props.rankingsHeader} Rankings:</h1>
        <ol>{this.renderList()}</ol>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rankings: state.rankings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchRankings: fetchRankings
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rankings);
