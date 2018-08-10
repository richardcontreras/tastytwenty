import React from "react";
import {
  Card,
  CardHeader,
  CardText,
  CardColumns,
  CardBody,
  Container
} from "reactstrap";

const About = () => (
  <div>
    <Container className="mobile-no-masonry">
      <Card className="about-card-div my-3">
        <CardHeader className="header-background">
          Pick your favorite restaurant
        </CardHeader>
        <CardBody>
          <CardText>
            Instead of grading a restaurant on an arbitrary scale of one to five
            stars, we randomly present you with two restaurants and ask you
            which one you prefer.<br />
            <br />Each time you pick a restaurant, its rating goes up, and the
            other's goes down.
          </CardText>
        </CardBody>
      </Card>
      <Card className="about-card-div my-3">
        <CardHeader className="header-background">
          Choose from different categories
        </CardHeader>
        <CardBody>
          <CardText>
            Of course everyone wants to know what the best restaurant in
            Portland is. But what about the best bagels? Or the best pizza?
            Choose from a number of categories to search for a specialty.
          </CardText>
        </CardBody>
      </Card>
      <Card className="about-card-div my-3">
        <CardHeader className="header-background">View the rankings</CardHeader>
        <CardBody>
          <CardText>
            We dynamically rank Portland restaurants in real-time based on all
            of your votes. Although we keep track of the rankings for all
            restaurants, only the best make it to the "Tasty 20" listings.<br />
            <br />Just as you can vote for different categories, we keep track
            of the separate rankings for each category.
          </CardText>
        </CardBody>
      </Card>
      <Card className="about-card-div my-3">
        <CardHeader className="header-background">
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
              If you don't wish to see a restaurant displayed again, click
              'Don't show this restaurant again' and we will not show it for as
              long as you are browsing this site.
            </p>
          </CardText>
        </CardBody>
      </Card>

      <Card className="about-card-div my-3">
        <CardHeader className="header-background">
          Elo Rating System{" "}
        </CardHeader>
        <CardBody>
          <CardText>
            <p>
              We utilize the{" "}
              <a
                href="https://en.wikipedia.org/wiki/Elo_rating_system"
                target="_blank"
              >
                Elo Rating System
              </a>, which was originally developed as a framework to rank chess
              players. Think about it - if you were to give a "4-star rating" to
              two different restaurants, does that mean they are equally good?
            </p>
            <p>
              An Elo system allows our rankings to reflect the subtle
              differences between restaurants.
            </p>
          </CardText>
        </CardBody>
      </Card>

      <Card className="about-card-div my-3">
        <CardHeader className="header-background">Contact us</CardHeader>
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
    </Container>
    <Container className="desktop-masonry">
      <CardColumns>
        <Card className="about-card-div">
          <CardHeader className="header-background">
            Pick your favorite restaurant
          </CardHeader>
          <CardBody>
            <CardText>
              <p>
                Instead of grading a restaurant on an arbitrary scale of one to
                five stars, we randomly present you with two restaurants and ask
                you which one you prefer.<p />
                <p />Each time you pick a restaurant, its rating goes up, and
                the other's goes down.
              </p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="about-card-div">
          <CardHeader className="header-background">
            Skipping a matchup
          </CardHeader>
          <CardBody>
            <CardText>
              <p>
                If you are asked to choose between two restaruants and you
                haven't been to one or more of them, simply click 'Skip Matchup'
                to be presented with a new pair to choose from.
              </p>
              <p>
                If you don't wish to see a restaurant displayed again, click
                'Don't show this restaurant again' and we will not show it for
                as long as you are browsing this site.
              </p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="about-card-div">
          <CardHeader className="header-background">
            Choose from different categories
          </CardHeader>
          <CardBody>
            <CardText>
              Of course everyone wants to know what the best restaurant in
              Portland is. But what about the best bagels? Or the best pizza?
              Choose from a number of categories to search for a specialty.
            </CardText>
          </CardBody>
        </Card>
        <Card className="about-card-div">
          <CardHeader className="header-background">
            Elo Rating System
          </CardHeader>
          <CardBody>
            <CardText>
              {" "}
              <p>
                We utilize the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Elo_rating_system"
                  target="_blank"
                >
                  Elo Rating System
                </a>, which was originally developed as a framework to rank
                chess players. Think about it - if you were to give a "4-star
                rating" to two different restaurants, does that mean they are
                equally good?
              </p>
              <p>
                An Elo system allows our rankings to reflect the subtle
                differences between restaurants.
              </p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="about-card-div">
          <CardHeader className="header-background">
            View the rankings
          </CardHeader>
          <CardBody>
            <CardText>
              <p>
                We dynamically rank Portland restaurants in real-time based on
                all of your votes. Although we keep track of the rankings for
                all restaurants, only the best make it to the 'Tasty 20'
                listings.
              </p>
              <p>
                Just as you can vote for different categories, we keep track of
                the separate rankings for each category.
              </p>
            </CardText>
          </CardBody>
        </Card>
        <Card className="about-card-div">
          <CardHeader className="header-background">Contact us</CardHeader>
          <CardBody>
            <CardText>
              Want to make sure your restaurant is listed on our site, or have
              any other feedback? Send us an email{" "}
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
    </Container>
  </div>
);

export default About;
