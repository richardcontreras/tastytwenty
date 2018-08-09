import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRankings } from "../actions/index";
import { bindActionCreators } from "redux";
import { Container } from "reactstrap";

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
      return <div>Loading...</div>;
    }

    return (
      <Container>
        <h1>Best {this.props.rankingsHeader} Rankings:</h1>
        <p>(Click on any restaurant to visit their website)</p>
        <ol>{this.renderList()}</ol>
      </Container>
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
