export const sort = (
  width: number,
  height: number,
  length: number,
  mass: number
) => {
  let isBulky = false
  let isHeavy = false
  if(
    width <= 0
    || height <= 0
    || length <= 0
    || mass <= 0
  ) {
    return 'REJECTED'
  }
  if(
    width * height * length >= 1000000
    || width >= 150
    || height >= 150
    || length >= 150
  ) {
    isBulky = true
  }
  if( mass >= 20 ) {
    isHeavy = true
  }
  if( isBulky && isHeavy ) {
    return 'REJECTED'
  }
  if( isBulky || isHeavy ) {
    return 'SPECIAL'
  }
  return 'STANDARD'
}

console.log( sort( 10, 20, 20, 10 ) )