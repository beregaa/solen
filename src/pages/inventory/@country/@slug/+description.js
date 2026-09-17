import { countryNames } from '../../../../data/inventoryData'

export function description(pageContext) {
  const p = pageContext.data?.product
  if (!p) return ''
  const parts = [
    `${p.name} (${countryNames[p.country]}) — ${p.price} ₾, უფასო მონტაჟით თბილისსა და რუსთავში.`,
    p.power && `სიმძლავრე ${p.power} კვტ.`,
    p.area && `გამოდგება ${p.area} ფართისთვის.`,
    'დარეკეთ უფასო კონსულტაციისთვის: 568 88 32 79.',
  ]
  return parts.filter(Boolean).join(' ')
}
