function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomName() {
  const prefix = randomFromArray(["COOL", "SUPER", "HIP", "SMUG", "COOL", "SILKY", "GOOD", "SAFE", "DEAR", "DAMP", "WARM", "RICH", "LONG", "DARK", "SOFT", "BUFF", "DOPE" ]);
  const animal = randomFromArray(["BEAR", "DOG", "CAT", "FOX", "LAMB", "LION", "BOAR", "GOAT", "MOLE", "SEAL", "PUMA", "MULE", "BULL", "BIRD", "BUG" ]);
  return `${prefix} ${animal}`;
}

function randomSafeSpot() {
  return randomFromArray([
    { x: 1, y: 4 },
    { x: 2, y: 4 },
    { x: 1, y: 5 },
    { x: 2, y: 6 },
    { x: 2, y: 8 },
    { x: 2, y: 9 },
    { x: 4, y: 8 },
    { x: 5, y: 5 },
    { x: 5, y: 8 },
    { x: 5, y: 10 },
    { x: 5, y: 11 },
    { x: 11, y: 7 },
    { x: 12, y: 7 },
    { x: 13, y: 7 },
    { x: 13, y: 6 },
    { x: 13, y: 8 },
    { x: 7, y: 6 },
    { x: 7, y: 7 },
    { x: 7, y: 8 },
    { x: 8, y: 8 },
    { x: 10, y: 8 },
    { x: 8, y: 8 },
    { x: 11, y: 4 },
  ]);
}

function getKeyString(x, y) {
  return `${x}x${y}`;
}

/* Fisher Yates */ 
function shuffle(a) { 
    for( var i = a.length; --i;) {
        var j = Math.floor( Math.random() * (i+1));
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
}

export { 
  getKeyString,
  randomFromArray, 
  randomName,
  randomSafeSpot,
  shuffle
}