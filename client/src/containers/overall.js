import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOverallData, firstOverallWon } from "../actions/index";
import { bindActionCreators } from "redux";
import axios from "axios";

class Overall extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchOverallData();
  }

  render() {
    if (!this.props.overallData) {
      return (
        <div>
          <p>Loading matchup...</p>
        </div>
      );
    }

    return (
      <div>
        <div>
          <p>
            First Restaurant: {this.props.overallData[0].name} ({
              this.props.overallData[0].overall.elo
            })
          </p>
          <button
            onClick={() => {
              this.props.firstOverallWon(
                this.props.overallData[0].overall.elo,
                this.props.overallData[0]._id,
                this.props.overallData[1].overall.elo,
                this.props.overallData[1]._id
              );
            }}
          >
            Vote for First Restaurant
          </button>

          <p>
            Second Restaurant: {this.props.overallData[1].name} ({
              this.props.overallData[1].overall.elo
            })
          </p>
          <button>Vote for Second Restaurant</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    overallData: state.overallData,
    firstOverallWonUpdatedData: state.firstOverallWonUpdatedData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchOverallData: fetchOverallData,
      firstOverallWon: firstOverallWon
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overall);
