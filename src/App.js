import React, { Component } from "react";
import "./styles.css";

import sprite from "./img/sprite.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [0, 0],
      positionPerson: "0 0"
    };
  }

  componentDidMount() {
    window.addEventListener("keyup", this.move);
  }

  move = (event) => {
    const { position } = this.state;

    let newPosition = position;

    switch (event.keyCode) {
      case 38:
      case 87:
        console.log("antes 0", newPosition);
        if (position[1] - 1 >= 0 && position[1] - 1 < 20) {
          newPosition = [position[0], position[1] - 1];
          this.setState({
            positionPerson: "0 -73px"
          });
        }
        break;
      case 40:
      case 83:
        if (position[1] + 1 >= 0 && position[1] + 1 < 20) {
          newPosition = [position[0], position[1] + 1];
          this.setState({
            positionPerson: "0 0"
          });
        }
        break;
      case 37:
      case 65:
        if (position[0] - 1 >= 0 && position[0] - 1 < 20) {
          newPosition = [position[0] - 1, position[1]];
          this.setState({
            positionPerson: "0 37px"
          });
        }
        break;
      case 39:
      case 68:
        if (position[0] + 1 >= 0 && position[0] + 1 < 20) {
          newPosition = [position[0] + 1, position[1]];
          this.setState({
            positionPerson: "0 -37px"
          });
        }

        break;
      default:
        break;
    }
    this.setState({
      position: newPosition
    });
  };

  render() {
    const { position, positionPerson } = this.state;

    return (
      <div className="Container">
        <div className="Map">
          <div
            className="Person"
            style={{
              background: `url(${sprite})`,
              top: `${position[1] * 35}px`,
              left: `${position[0] * 35}px`,
              backgroundPosition: `${positionPerson}`
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
