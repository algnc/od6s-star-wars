/* global Actors */

import * as StarWarsSheets from './actor-sheets-star-wars.js'

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */
Hooks.once('init', async function () {
  console.log(`Star Wars | Initializing Star Wars Sheet for od6s`)

  // Register sheet application classes
  Actors.registerSheet('od6s-star-wars',StarWarsSheets.ActorSheetStarWars, {label: "od6s-star-wars.ActorSheetStarWars"})
})


//fontloader: Pull Google Fonts when Foundry loads instead of each time character sheet opens.
var preconnectLink1 = document.createElement('link');
preconnectLink1.rel = 'preconnect';
preconnectLink1.href = 'https://fonts.googleapis.com';
document.head.appendChild(preconnectLink1);

var preconnectLink2 = document.createElement('link');
preconnectLink2.rel = 'preconnect';
preconnectLink2.href = 'https://fonts.gstatic.com';
preconnectLink2.crossOrigin = true; // Add crossorigin attribute for cross-origin request
document.head.appendChild(preconnectLink2);

var fontStylesheet = document.createElement('link');
fontStylesheet.href = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Domine:wght@400;700&display=swap';
fontStylesheet.rel = 'stylesheet';
document.head.appendChild(fontStylesheet);
