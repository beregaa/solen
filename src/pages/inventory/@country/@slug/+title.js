export function title(pageContext) {
  const p = pageContext.data?.product
  return p ? `${p.name} — ${p.price} ₾ + უფასო მონტაჟი | Solen` : 'Solen'
}
