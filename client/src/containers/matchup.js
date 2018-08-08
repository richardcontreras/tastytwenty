import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMatchupData, calcMatchupWinner } from "../actions/index";
import { bindActionCreators } from "redux";

class Matchup extends Component {
  componentDidMount() {
    this.props.fetchMatchupData(this.props.category);
  }

  render() {
    if (!this.props.matchupData) {
      return (
        <div>
          <p>Loading matchup...</p>
        </div>
      );
    }

    return (
      <div>
        <div>
          <h2>Best {this.props.matchupHeader}</h2>
          <div className="choice-div">
            <button
              className="voting-div-background"
              onClick={() => {
                this.props.calcMatchupWinner(
                  this.props.matchupData[0][`${this.props.category}`].elo,
                  this.props.matchupData[0]._id,
                  this.props.matchupData[1][`${this.props.category}`].elo,
                  this.props.matchupData[1]._id,
                  this.props.category
                );
                this.props.fetchMatchupData(this.props.category);
              }}
            >
              {this.props.matchupData[0].name}
            </button>
          </div>
          <div style={{ display: "inline-block" }}>
            <h3>vs.</h3>
          </div>
          <div className="choice-div">
            <button
              className="voting-div-background"
              onClick={() => {
                this.props.calcMatchupWinner(
                  this.props.matchupData[1][`${this.props.category}`].elo,
                  this.props.matchupData[1]._id,
                  this.props.matchupData[0][`${this.props.category}`].elo,
                  this.props.matchupData[0]._id,
                  this.props.category
                );
                this.props.fetchMatchupData(this.props.category);
              }}
            >
              {this.props.matchupData[1].name}
            </button>
          </div>
          <div>
            <button
              id="skipMatchup"
              onClick={() => this.props.fetchMatchupData(this.props.category)}
            >
              Skip Matchup
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    matchupData: state.matchupData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchMatchupData: fetchMatchupData,
      calcMatchupWinner: calcMatchupWinner
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matchup);
