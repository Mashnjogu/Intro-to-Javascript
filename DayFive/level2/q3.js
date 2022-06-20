const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('meat')
// add Sugar at the end of you shopping cart if it has not been already 
shoppingCart.push('sugar')
console.log(`Before removing Honey from the list`)
console.log(shoppingCart)
// remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1)
// modify Tea to 'Green Tea'
console.log(`After removing Honey from the list`)
console.log(shoppingCart)