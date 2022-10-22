import { isSolid, isInteractable } from './Map.js'
import { KeyPressListener } from '../utils/KeyPressListener.js'

class Controller {
  init(players) {
    new KeyPressListener("ArrowUp", () => this.handleArrowPress(0, -1))
    new KeyPressListener("ArrowDown", () => this.handleArrowPress(0, 1))
    new KeyPressListener("ArrowLeft", () => this.handleArrowPress(-1, 0))
    new KeyPressListener("ArrowRight", () => this.handleArrowPress(1, 0))
  }
  handleArrowPress(xChange=0, yChange=0) {
    const newX = players[playerId].x + xChange;
    const newY = players[playerId].y + yChange;
    if (!isSolid(newX, newY)) {
      location.innerHTML = 'Location: (' + newX + ', ' + newY + ')'
      //move to the next space
      players[playerId].x = newX;
      players[playerId].y = newY;
      if (xChange === 1) {
        players[playerId].direction = "right";
      }
      if (xChange === -1) {
        players[playerId].direction = "left";
      }
      playerRef.set(players[playerId]);
      attemptGrabCoin(newX, newY);
    }
    if (isInteractable(newX, newY)){
      let interaction = isInteractable(newX, newY);
      if (interaction.type === "modal") {
        alert("Attempted to open " + interaction.name + " modal");
      }
      if (interaction.type === "door") {
        alert("You shout 'Open Sesame!'");
        alert("... but nothing happens");
      }
    }
    else {
      if (xChange === 1) {
        players[playerId].direction = "right";
      }
      if (xChange === -1) {
        players[playerId].direction = "left";
      }
      playerRef.set(players[playerId]);
    }
  }
}

export { Controller }