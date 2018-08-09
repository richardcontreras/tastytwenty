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
      <Container>
        <Jumbotron id="votingJumbotron" fluid>
          <Container className="text-center" fluid>
            <Row>
              <Col md={{ size: 12, offset: 0 }}>
                <h1 className="display-3">Best {this.props.matchupHeader}</h1>
              </Col>
              <Col md={{ size: 4, offset: 1 }} className="text-center">
                <button
                  className="voting-div-background choice-div"
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
              </Col>
              <Col md={{ size: 2, offset: 0 }}>
                <p className="lead mt-4">
                  Vote for the best {this.props.matchupHeader.toLowerCase()} in
                  Portland.
                </p>
              </Col>
              <Col md={{ size: 4, offset: 0 }} className="text-center">
                <button
                  className="voting-div-background choice-div"
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
              </Col>
              <Col md={{ size: 12, offset: 0 }}>
                <button
                  className="mt-4"
                  id="skipMatchup"
                  onClick={() =>
                    this.props.fetchMatchupData(this.props.category)
                  }
                >
                  Skip Matchup
                </button>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Container>
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
