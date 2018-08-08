import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardText,
  CardColumns,
  CardBody
} from "reactstrap";

const About = () => (
  <div>
    <CardColumns>
      <Card className="about-card-div">
        <CardHeader className="maroon-header-background">
          Pick your favorite restaurant
        </CardHeader>
        <CardBody>
          <CardText>
            Instead of grading a restaurant on an arbitrary scale of one to five
            stars, we randomly present you with two restaurants and ask you to
            pick which one you prefer.<br />
            <br />Each time you pick a restaurant, its rating goes up, and the
            other's goes down.
          </CardText>
        </CardBody>
      </Card>
      <Card className="about-card-div">
        <CardHeader className="blue-header-background">
          Skipping a matchup
        </CardHeader>
        <CardBody>
          <CardText>
            <p>
              If you are asked to choose between two restaruants and you haven't
              been to one or more of them, simply click 'Skip Matchup' to be
              presented with a new pair to choose from.
            </p>
            <p>
              Each time you pick a restaurant, it's rating goes up, and the
              other's goes down.
            </p>
          </CardText>
        </CardBody>
      </Card>
      <Card className="about-card-div">
        <CardHeader className="blue-header-background">
          Choose from different categories
        </CardHeader>
        <CardBody>
          <CardText>
            Of course everyone wants to know what the best restaurant in
            Portland is. But what about the best bagels? Or best pizza? Choose
            from a number of categories to search for a specialty.
          </CardText>
        </CardBody>
      </Card>
      <Card className="about-card-div">
        <CardHeader className="maroon-header-background">
          A fair system
        </CardHeader>
        <CardBody>
          <CardText>
            While you may wish to be able to choose the restaurants you can vote
            on, we believe that would lead to an imbalanced rating system. If
            you are seeing a lot of restaurants you haven't been to before, take
            it as an opportunity to explore new places!
          </CardText>
        </CardBody>
      </Card>
      <Card className="about-card-div">
        <CardHeader className="maroon-header-background">
          View the rankings
        </CardHeader>
        <CardBody>
          <CardText>
            Using an Elo rating system, we dynamically rank Portland restaurants
            in real-time based on all of your votes. Although we keep track of
            the rankings for all restaurants, only the best make it to the
            'Tasty 20' listings.<br />
            <br />Just as you can vote for different categories, we keep track
            of the separate rankings for each category.
          </CardText>
        </CardBody>
      </Card>
      <Card className="about-card-div">
        <CardHeader className="blue-header-background">Contact us</CardHeader>
        <CardBody>
          <CardText>
            Want to make sure your restaurant is listed on our site, or have any
            other feedback? Send us an email{" "}
            <a
              href="mailto:richard@stjohnswebdesign.com?Subject=Tasty20%20Feedback"
              target="_top"
            >
              here
            </a>.
          </CardText>
        </CardBody>
      </Card>
    </CardColumns>
  </div>
);

export default About;
