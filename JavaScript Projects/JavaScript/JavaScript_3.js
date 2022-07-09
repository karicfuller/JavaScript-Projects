function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is where " + character.innerHTML + " lives!");
}