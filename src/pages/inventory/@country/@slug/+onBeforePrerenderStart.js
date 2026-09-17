import inventoryData from '../../../../data/inventoryData'

export { onBeforePrerenderStart }

function onBeforePrerenderStart() {
  return inventoryData.map((p) => `/inventory/${p.country}/${p.slug}`)
}
