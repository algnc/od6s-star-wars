/**
 * Star Wars character sheet overrides
 */

import OD6SActorSheet from '/systems/od6s/module/actor/actor-sheet.js'

/**
 * Extends the OD6S sheet for Star Wars 
 * @extends {OD6SActorSheet}
 */
class StarshipSheetStarWars extends OD6SActorSheet {
  /** @override */
  get template() {
        return `modules/od6s-star-wars/templates/starship-sheet.html`;
    }

  /** @override */
  getData () {
    const data = super.getData()
    return data
  }
}

export {
  StarshipSheetStarWars
}
