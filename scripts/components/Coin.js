import { getKeyString, randomSafeSpot } from '../utils/functions.js'

function placeCoin() {
  // const { x, y } = randomSafeSpot();
  // const coinRef = firebase.database().ref(`coins/${getKeyString(x, y)}`);
  // coinRef.set({
  //   x,
  //   y,
  // })
  // 
  // const coinTimeouts = [2000, 3000, 4000, 5000];
  // setTimeout(() => {
  //   placeCoin();
  // }, randomFromArray(coinTimeouts));
}

function attemptGrabCoin(x, y) {
  // const key = getKeyString(x, y);
  // if (coins[key]) {
  //   // Remove this key from data, then uptick Player's coin count
  //   firebase.database().ref(`coins/${key}`).remove();
  //   playerRef.update({
  //     coins: players[playerId].coins + 1,
  //   })
  // }
}

export { 
  placeCoin, 
  attemptGrabCoin 
}