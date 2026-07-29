"use strict";

const characterSelect = document.querySelector("#character");
const markdownInput = document.querySelector("#markdown-content");
const saveButton = document.querySelector("#save-button");
const clearButton = document.querySelector("#clear-button");
const statusMessage = document.querySelector("#status");

const starterPages = {
  jericho: `# Jericho Hawthorne

<div style="display:flex; gap:16px; align-items:flex-start; width:100%; margin:0 0 1rem 0;">
  <img src="Jericho_Portrait.png" alt="Jericho Portrait" style="display:block; width:calc(50% - 8px); height:auto; object-fit:contain;">
  <img src="Jericho_WitchBolt.png" alt="Jericho Witch Bolt" style="display:block; width:calc(50% - 8px); height:auto; object-fit:contain;">
</div>

### Overview:

Jericho Hawthorne is an Eladrin warlock and accomplished artisan known for his quick wit, insatiable curiosity, and silver tongue.

***Class***: [Warlock](http://dnd2024.wikidot.com/warlock:main)  
***Subclass***: [Great Old One](http://dnd2024.wikidot.com/warlock:great-old-one-patron)  
***Level***: 3  
***Race***: [Eladrin](https://dnd5e.wikidot.com/lineage:eladrin)  
***Alignment***: Chaotic Good

### Appearance:

***Age***: 28  
***Height***: 6'1  
***Weight***: 165  
***Eyes***: Green  
***Hair***: Silver  
***Size***: Medium

### Features:

Add features here.

### Stats:

***Str***: 8  
***Dex***: 16  
***Con***: 15  
***Int***: 8  
***Wis***: 12  
***Cha***: 18

***HP***: 26  
***Speed***: 30ft.  
***AC***: 14  
***Initiative***: +3

### Spell List:

Add spells here.

### Backstory

Add backstory here.

### Allies and Connections:

Add connections here.
`,

  finn: `# Finn Harrow

### Overview:

Add Finn's overview here.

### Appearance:

Add Finn's appearance here.

### Features:

Add Finn's features here.

### Stats:

Add Finn's stats here.

### Spell List:

Add Finn's spells or abilities here.

### Backstory

Add Finn's backstory here.

### Allies and Connections:

Add Finn's connections here.
`,

  jed: `# Jed Tokki

### Overview:

Add Jed's overview here.

### Appearance:

Add Jed's appearance here.

### Features:

Add Jed's features here.

### Stats:

Add Jed's stats here.

### Spell List:

Add Jed's spells here.

### Backstory

Add Jed's backstory here.

### Allies and Connections:

Add Jed's connections here.
`,

  belokan: `# Belokan

### Overview:

Add Belokan's overview here.

### Appearance:

Add Belokan's appearance here.

### Features:

Add Belokan's features here.

### Stats:

Add Belokan's stats here.

### Spell List:

Add Belokan's abilities here.

### Backstory

Add Belokan's backstory here.

### Allies and Connections:

Add Belokan's connections here.
`,
};

function getStorageKey(character) {
  return `dawnblades-markdown-${character}`;
}

function showStatus(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.style.color = isError ? "#c87a7a" : "#c9a45f";
}

function loadCharacter() {
  const character = characterSelect.value;

  if (!character) {
    markdownInput.value = "";
    showStatus("");
    return;
  }

  const savedDraft = localStorage.getItem(getStorageKey(character));

  if (savedDraft !== null) {
    markdownInput.value = savedDraft;
    showStatus("Saved browser draft loaded.");
    return;
  }

  markdownInput.value = starterPages[character] ?? "";
  showStatus("Character template loaded.");
}

function saveCharacter() {
  const character = characterSelect.value;

  if (!character) {
    showStatus("Choose a character before saving.", true);
    return;
  }

  localStorage.setItem(
    getStorageKey(character),
    markdownInput.value,
  );

  showStatus("Markdown draft saved in this browser.");
}

function clearCharacter() {
  const character = characterSelect.value;

  if (!character) {
    markdownInput.value = "";
    showStatus("");
    return;
  }

  localStorage.removeItem(getStorageKey(character));
  markdownInput.value = starterPages[character] ?? "";

  showStatus("Browser draft cleared. Template restored.");
}

characterSelect.addEventListener("change", loadCharacter);
saveButton.addEventListener("click", saveCharacter);
clearButton.addEventListener("click", clearCharacter);