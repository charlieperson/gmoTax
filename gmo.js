function getTaxIncrease (foods, category) {

  return foods.filter(catFilt)
  .reduce(function(accum, item) {
    return accum + item.centsPerUnit*0.15;
  }, 0);

  function catFilt(food) {
    if(food.category === category) return true;
    return false;
  }
}
