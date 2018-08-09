import React from "react";
import { Button, ButtonGroup } from "reactstrap";

const Landing = () => (
  <div id="landingDiv">
    <h1 id="landingHeadline">Vote for the 20 best restaurants in Portland</h1>
    <h3 id="landingSubtitle">
      See how your favorites stack up in our rankings
    </h3>
    <div id="landingButtonGroup">
      <ButtonGroup>
        <Button href="/about" color="light">
          About
        </Button>
        <Button href="/rankings" color="light">
          Rankings
        </Button>
        <Button href="voting" color="light">
          Vote
        </Button>
      </ButtonGroup>
    </div>
  </div>
);

export default Landing;
