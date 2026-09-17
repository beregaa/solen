import { countryNames } from '../../../data/inventoryData'

export { onBeforePrerenderStart }

function onBeforePrerenderStart() {
  return Object.keys(countryNames).map((c) => `/inventory/${c}`)
}
