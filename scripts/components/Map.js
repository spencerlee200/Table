import { getKeyString } from '../utils/functions.js'

const mapData = {
  minX: 1,
  maxX: 14,
  minY: 2,
  maxY: 13,
  blockedSpaces: {
    /* Table */ 
    "8x6": true,
    /* Coffin */
    "1x4": true,
    "1x5": true,
    "2x4": true,
    "2x5": true,
    /* Bookshelf */
    "1x2": true,
    "2x2": true,
    "3x2": true,
    /* Shelves */
    "1x10": true,
    "2x10": true,
    "3x10": true,
    /* Fireplace */
    "7x2": true,
    "8x2": true,
    "9x2": true,
    "12x2": false,
    "13x2": true,
    /* Bar tables */
    "12x9": true,
    "12x10": true,
    "8x9": true,
    "8x10": true
  },
  interactiveSpaces: {
    "5x1": {
      "type": "door"
    },
    "12x1": {
      "type": "modal",
      "name": "character_editer"
    }
  }
}

/**
 * Checks if the space at the indicated location is an obstacle
 * @param {number} x x coordinate
 * @param {number} y y coordinate
 * @return {boolean} is space blocked
*/
function isSolid(x,y) {
  const blockedNextSpace = mapData.blockedSpaces[getKeyString(x, y)];
  return (
    blockedNextSpace ||
    x >= mapData.maxX ||
    x < mapData.minX ||
    y >= mapData.maxY ||
    y < mapData.minY
  )
}

/**
 * Checks if the space at the indicated location can be interacted with
 * @param {number} x x coordinate
 * @param {number} y y coordinate
 * @return {boolean} is the space interactable
*/
function isInteractable(x,y) {
  const interactiveNextSpace = mapData.interactiveSpaces[getKeyString(x, y)];
  return interactiveNextSpace
}

export { 
  mapData, 
  isInteractable,
  isSolid 
}