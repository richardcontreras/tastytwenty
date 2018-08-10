import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRankings } from "../actions/index";
import { bindActionCreators } from "redux";
import { Container, FormGroup, Input } from "reactstrap";

class Rankings extends Component {
  constructor(props) {
    super(props);

    this.state = { category: "overall" };
  }

  renderList() {
    return this.props.rankings.map(item => {
      return (
        <li className="rankingListItem" key={item._id}>
          <a id="nameInRankings" href={item.website} target="_blank">
            {item.name}
          </a>
        </li>
      );
    });
  }

  render() {
    if (!this.props.rankings) {
      return (
        <Container>
          <h3>Rankings</h3>
          <FormGroup>
            <Input
              type="select"
              name="select"
              id="selectRankingCategory"
              onChange={() => {
                let selectedItem = document.getElementById(
                  "selectRankingCategory"
                ).value;
                this.props.fetchRankings(selectedItem);
                this.setState({ category: selectedItem });
                if (selectedItem === "bbq") {
                  this.setState({ category: "BBQ" });
                }
                if (selectedItem === "fastfood") {
                  this.setState({ category: "Fast Food" });
                }
                if (selectedItem === "foodtruck") {
                  this.setState({ category: "Food Truck" });
                }
                if (selectedItem === "dimsum") {
                  this.setState({ category: "Dim Sum" });
                }
                if (selectedItem === "icecream") {
                  this.setState({ category: "Ice Cream" });
                }
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

    return (
      <Container>
        <h1>
          Best{" "}
          {this.state.category.charAt(0).toUpperCase() +
            this.state.category.slice(1)}{" "}
          Rankings:
        </h1>
        <p>Click on any restaurant to visit their website</p>
        <FormGroup>
          <Input
            type="select"
            name="select"
            id="selectRankingCategory"
            onChange={() => {
              let selectedItem = document.getElementById(
                "selectRankingCategory"
              ).value;
              this.props.fetchRankings(selectedItem);
              this.setState({ category: selectedItem });
              if (selectedItem === "bbq") {
                this.setState({ category: "BBQ" });
              }
              if (selectedItem === "fastfood") {
                this.setState({ category: "Fast Food" });
              }
              if (selectedItem === "foodtruck") {
                this.setState({ category: "Food Truck" });
              }
              if (selectedItem === "dimsum") {
                this.setState({ category: "Dim Sum" });
              }
              if (selectedItem === "icecream") {
                this.setState({ category: "Ice Cream" });
              }
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
