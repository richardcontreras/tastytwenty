import React, { Component } from "react";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  ListGroup,
  ListGroupItem
} from "reactstrap";

export default class VotingCategories extends Component {
  render() {
    return (
      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink id="votingTab" className="active">
              Voting Categories
            </NavLink>
          </NavItem>
        </Nav>
        <ListGroup className="mb-4">
          <ListGroupItem>
            <a href="/overall">Overall</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/bagel">Bagel</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/bbq">BBQ</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/breakfast">Breakfast</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/brewpub">Brewpub</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/burger">Burger</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/chicken">Chicken</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/chinese">Chinese</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/coffee">Coffee</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/deli">Deli</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/dessert">Dessert</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/dimsum">Dim Sum</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/fastfood">Fast Food</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/foodtruck">Food Truck</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/hawaiian">Hawaiian</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/icecream">Ice Cream</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/indian">Indian</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/italian">Italian</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/korean">Korean</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/latin">Latin</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/mediterranean">Mediterranean</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/mexican">Mexican</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/noodles">Noodles</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/pizza">Pizza</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/seafood">Seafood</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/steak">Steak</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/sushi">Sushi</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/thai">Thai</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/vegan">Vegan</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/vietnamese">Vietnamese</a>
          </ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
}
