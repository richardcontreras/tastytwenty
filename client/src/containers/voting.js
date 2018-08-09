import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  fetchMatchupData,
  calcMatchupWinner,
  removeRestaurant
} from "../actions/index";
import { bindActionCreators } from "redux";
import { Jumbotron, Container, Col, FormGroup, Input, Row } from "reactstrap";

class Voting extends Component {
  constructor(props) {
    super(props);

    this.state = { category: "overall" };
  }

  render() {
    if (!this.props.matchupData) {
      return (
        <Container>
          <h3>Voting</h3>
          <FormGroup>
            <Input
              type="select"
              name="select"
              id="selectRankingCategory"
              onChange={() => {
                let selectedItem = document.getElementById(
                  "selectRankingCategory"
                ).value;
                this.props.fetchMatchupData(selectedItem);
                this.setState({ category: selectedItem });
              }}
            >
              <option>Select a category</option>
              <option value="overall">Overall</option>
              <option value="bagel">Bagels</option>
              <option value="bbq">BBQ</option>
              <option value="breakfast">Breakfast</option>
              <option value="brewpub">Brewpubs</option>
              <option value="burger">Burgers</option>
              <option value="chicken">Chicken</option>
              <option value="chinese">Chinese</option>
              <option value="coffee">Coffee</option>
              <option value="deli">Deli</option>
              <option value="dessert">Dessert</option>
              <option value="dimsum">Dim Sum</option>
              <option value="fastfood">Fast Food</option>
              <option value="foodtruck">Food Truck</option>
              <option value="hawaiian">Hawaiian</option>
              <option value="icecream">Ice Cream</option>
              <option value="indian">Indian</option>
              <option value="italian">Italian</option>
              <option value="korean">Korean</option>
              <option value="latin">Latin</option>
              <option value="mediterranean">Mediterranean</option>
              <option value="mexican">Mexican</option>
              <option value="noodles">Noodles</option>
              <option value="mexican">Mexican</option>
              <option value="pizza">Pizza</option>
              <option value="seafood">Seafood</option>
              <option value="steak">Steak</option>
              <option value="sushi">Sushi</option>
              <option value="thai">Thai</option>
              <option value="vegan">Vegan</option>
              <option value="vietnamese">Vietnamese</option>
            </Input>
          </FormGroup>
        </Container>
      );
    }

    if (
      _.includes(
        this.props.removedRestaurants,
        this.props.matchupData[0]._id
      ) ||
      _.includes(this.props.removedRestaurants, this.props.matchupData[1]._id)
    ) {
      this.props.fetchMatchupData(`${this.state.category}`);
      return (
        <Container>
          <Jumbotron id="votingJumbotron" fluid>
            <Container className="text-center" fluid>
              <Row>
                <Col md={{ size: 12, offset: 0 }}>
                  <h1 className="display-3">Best {this.state.category}</h1>
                </Col>
                <Col
                  id="skippingBlockedRestaurant"
                  md={{ size: 12, offset: 0 }}
                >
                  <p>Fetching new matchup...</p>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </Container>
      );
    }

    return (
      <Container>
        <Jumbotron id="votingJumbotron" fluid>
          <Container className="text-center" fluid>
            <Row>
              <Col md={{ size: 12, offset: 0 }}>
                <h1 className="display-3">Best {this.state.category}</h1>
              </Col>
              <Col md={{ size: 4, offset: 1 }} className="text-center">
                <button
                  className="voting-div-background choice-div"
                  onClick={() => {
                    this.props.calcMatchupWinner(
                      this.props.matchupData[0][`${this.state.category}`].elo,
                      this.props.matchupData[0]._id,
                      this.props.matchupData[1][`${this.state.category}`].elo,
                      this.props.matchupData[1]._id,
                      this.state.category
                    );
                    this.props.fetchMatchupData(`${this.state.category}`);
                  }}
                >
                  {this.props.matchupData[0].name}
                </button>
              </Col>
              <Col md={{ size: 2, offset: 0 }}>
                <p className="lead mt-4">
                  Vote for the best {this.state.category} in Portland.
                </p>
              </Col>
              <Col md={{ size: 4, offset: 0 }} className="text-center">
                <button
                  className="voting-div-background choice-div"
                  onClick={() => {
                    this.props.calcMatchupWinner(
                      this.props.matchupData[1][`${this.state.category}`].elo,
                      this.props.matchupData[1]._id,
                      this.props.matchupData[0][`${this.state.category}`].elo,
                      this.props.matchupData[0]._id,
                      this.state.category
                    );
                    this.props.fetchMatchupData(`${this.state.category}`);
                  }}
                >
                  {this.props.matchupData[1].name}
                </button>
              </Col>
              <Col md={{ size: 4, offset: 1 }} className="text-center">
                <button
                  onClick={() =>
                    this.props.removeRestaurant(this.props.matchupData[0]._id)
                  }
                >
                  Don't see this restaurant again
                </button>
              </Col>
              <Col md={{ size: 2, offset: 0 }}>
                <button
                  className="mt-4"
                  id="skipMatchup"
                  onClick={() =>
                    this.props.fetchMatchupData(this.state.category)
                  }
                >
                  Skip Matchup
                </button>
              </Col>
              <Col md={{ size: 4, offset: 1 }} className="text-center">
                <button
                  onClick={() =>
                    this.props.removeRestaurant(this.props.matchupData[1]._id)
                  }
                >
                  Don't see this restaurant again
                </button>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <FormGroup>
          <Input
            type="select"
            name="select"
            id="selectRankingCategory"
            onChange={() => {
              let selectedItem = document.getElementById(
                "selectRankingCategory"
              ).value;
              this.props.fetchMatchupData(selectedItem);
              this.setState({ category: selectedItem });
            }}
          >
            <option selected value="overall">
              Select a category
            </option>
            <option value="overall">Overall</option>
            <option value="bagel">Bagels</option>
            <option value="bbq">BBQ</option>
            <option value="breakfast">Breakfast</option>
            <option value="brewpub">Brewpubs</option>
            <option value="burger">Burgers</option>
            <option value="chicken">Chicken</option>
            <option value="chinese">Chinese</option>
            <option value="coffee">Coffee</option>
            <option value="deli">Deli</option>
            <option value="dessert">Dessert</option>
            <option value="dimsum">Dim Sum</option>
            <option value="fastfood">Fast Food</option>
            <option value="foodtruck">Food Truck</option>
            <option value="hawaiian">Hawaiian</option>
            <option value="icecream">Ice Cream</option>
            <option value="indian">Indian</option>
            <option value="italian">Italian</option>
            <option value="korean">Korean</option>
            <option value="latin">Latin</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="mexican">Mexican</option>
            <option value="noodles">Noodles</option>
            <option value="mexican">Mexican</option>
            <option value="pizza">Pizza</option>
            <option value="seafood">Seafood</option>
            <option value="steak">Steak</option>
            <option value="sushi">Sushi</option>
            <option value="thai">Thai</option>
            <option value="vegan">Vegan</option>
            <option value="vietnamese">Vietnamese</option>
          </Input>
        </FormGroup>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    matchupData: state.matchupData,
    removedRestaurants: state.removedRestaurants
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchMatchupData: fetchMatchupData,
      calcMatchupWinner: calcMatchupWinner,
      removeRestaurant: removeRestaurant
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Voting);
