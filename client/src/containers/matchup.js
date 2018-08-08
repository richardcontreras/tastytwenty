import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMatchupData, calcMatchupWinner } from "../actions/index";
import { bindActionCreators } from "redux";
import { Jumbotron, Container, Col, Row } from "reactstrap";

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
        <Row>
          <Col md={{ size: 12, offset: 0 }}>
            <Jumbotron fluid>
              <Container className="text-center" fluid>
                <h1 className="display-3">Best {this.props.matchupHeader}</h1>
                <p className="lead">
                  Vote for the best {this.props.matchupHeader.toLowerCase()} in
                  Portland.
                </p>
              </Container>
            </Jumbotron>
          </Col>
          <Col md={{ size: 2, offset: 2 }}>
            <div className="choice-div text-center">
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
          </Col>
          <Col md={{ size: 1, offset: 1 }}>
            <h3 id="versusH3">vs.</h3>
          </Col>
          <Col md={{ size: 2, offset: 2 }}>
            <div className="choice-div text-center">
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
          </Col>
          <Col md={{ size: 6, offset: 5 }}>
            <div>
              <button
                id="skipMatchup"
                onClick={() => this.props.fetchMatchupData(this.props.category)}
              >
                Skip Matchup
              </button>
            </div>
          </Col>
        </Row>
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
