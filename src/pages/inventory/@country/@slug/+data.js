import { render } from 'vike/abort'
import { getProduct } from '../../../../data/inventoryData'

export { data }

function data(pageContext) {
  const { country, slug } = pageContext.routeParams
  const product = getProduct(country, slug)
  if (!product) throw render(404)
  return { product }
}
