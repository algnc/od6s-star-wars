/* global Actors */

import * as StarWarsSheets from './actor-sheets-star-wars.js'
import * as NPCStarWarsSheets from './npc-sheets-star-wars.js'
import * as CreatureStarWarsSheets from './creature-sheets-star-wars.js'

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */
Hooks.once('init', async function () {
  console.log(`Star Wars | Initializing Star Wars Sheet for od6s`)

  // Register sheet application classes
  Actors.registerSheet('od6s-star-wars',StarWarsSheets.ActorSheetStarWars, {label: "od6s-star-wars.ActorSheetStarWars"})
  Actors.registerSheet('od6s-star-wars',NPCStarWarsSheets.NPCSheetStarWars, {label: "od6s-star-wars.NPCSheetStarWars"})
  Actors.registerSheet('od6s-star-wars',CreatureStarWarsSheets.CreatureSheetStarWars, {label: "od6s-star-wars.CreatureSheetStarWars"})
})

