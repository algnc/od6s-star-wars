/* global Actors */

import * as StarWarsSheets from './actor-sheets-star-wars.js'

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */
Hooks.once('init', async function () {
  console.log(`Star Wars | Initializing Star Wars Sheet for od6s`)

  // Register sheet application classes
  Actors.registerSheet('od6s-star-wars',StarWarsSheets.ActorSheetStarWars)
})

