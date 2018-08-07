import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMatchupData, calcMatchupWinner } from "../actions/index";
import { bindActionCreators } from "redux";
import axios from "axios";

class Matchup extends Component {
  constructor(props) {
    super(props);
  }

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
          <h1>Best {this.props.matchupHeader}</h1>
          <p>
            First Restaurant: {this.props.matchupData[0].name} ({
              this.props.matchupData[0][`${this.props.category}`].elo
            })
          </p>
          <button
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
            Vote for First Restaurant
          </button>

          <p>
            Second Restaurant: {this.props.matchupData[1].name} ({
              this.props.matchupData[1][`${this.props.category}`].elo
            })
          </p>
          <button
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
            Vote for Second Restaurant
          </button>
          <div>
            <button
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
