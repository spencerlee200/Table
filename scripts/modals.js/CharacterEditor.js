class CharacterEditor {
  constructor() {
    let content = `
      <div class="player-info">
        <div>
          <label for="player-name">Your Name</label>
          <input id="player-name" maxlength="10" type="text" />
        </div>
        <div>
          <button id="player-character">Change Character</button>
        </div>
      </div>
    `;
   };
  }
}

export { CharacterEditor }