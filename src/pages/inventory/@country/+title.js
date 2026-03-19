export function title(pageContext) {
  const country = pageContext.routeParams?.country || 'italy'
  const countryNames = { italy: 'იტალია', turkey: 'თურქეთი', china: 'ჩინეთი' }
  return `გათბობის ქვაბები ${countryNames[country] || country} | Solen`
}
