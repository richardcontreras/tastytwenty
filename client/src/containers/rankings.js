import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRankings } from "../actions/index";
import { bindActionCreators } from "redux";

class Rankings extends Component {
  componentDidMount() {
    this.props.fetchRankings(`${this.props.category}`);
  }

  renderList() {
    return this.props.rankings.map(item => {
      return (
        <li className="rankingListItem" key={item._id}>
          <a id="nameInRankings" href={item.website} target="_blank">
            {item.name} ({item[`${this.props.category}`].elo})
          </a>
        </li>
      );
    });
  }

  render() {
    if (!this.props.rankings) {
      return <div className="page-background">Loading...</div>;
    }

    return (
      <div className="page-background">
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
